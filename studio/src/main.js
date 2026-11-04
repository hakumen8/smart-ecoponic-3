import { buildSpec } from "./compose.js";
import { EXAMPLES, PRESETS, layerName, materialName, objectName, t } from "./i18n.js";
import { parsePrompt } from "./parser.js";
import { clearPrompt, loadState, saveState } from "./storage.js";
import { Viewer, loadGltf } from "./viewer.js";

const $ = (id) => document.getElementById(id);
const prompt = $("prompt");
const viewer = new Viewer($("viewport"));

let lang = "ar";
let presetId = null;
let parsed = null;
let fileTitle = "";
let busy = false;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}

function toast(message, warn = false) {
  const node = $("toast");
  node.textContent = message;
  node.classList.toggle("warn", warn);
  node.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => node.classList.remove("show"), warn ? 4600 : 2400);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setProgress(amount, key) {
  $("progressBar").style.width = `${Math.round(amount * 100)}%`;
  $("progressLabel").textContent = t(lang, key);
}

function setBusy(on) {
  busy = on;
  $("loading").classList.toggle("hidden", !on);
  $("btnGenerate").disabled = on;
  $("btnGenerate").querySelector("span").textContent = t(lang, on ? "generating" : "generate");
}

function applyStaticText() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t(lang, "appName");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(lang, node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((node) => {
    node.setAttribute("placeholder", t(lang, node.dataset.i18nPh));
  });
  document.querySelectorAll(".tbtn, #langBtn").forEach((button) => {
    const span = button.querySelector("[data-i18n]");
    if (span) button.setAttribute("aria-label", span.textContent);
  });
  const light = $("lightPreset");
  const current = light.value || "studio";
  light.innerHTML = ["studio", "day", "sunset", "night"]
    .map((id) => `<option value="${id}">${escapeHtml(t(lang, `light${id[0].toUpperCase()}${id.slice(1)}`))}</option>`)
    .join("");
  light.value = current;
  $("btnFullscreen").querySelector("span").textContent = t(
    lang,
    document.fullscreenElement || $("stage").classList.contains("pseudo-fs") ? "exitFullscreen" : "fullscreen",
  );
  $("flowSwitch").setAttribute("aria-label", t(lang, "flowView"));
  $("btnFlowStatic").title = t(lang, "flowStaticTitle");
  $("btnFlowLive").title = t(lang, "flowLiveTitle");
}

function renderExamples() {
  const host = $("examples");
  host.replaceChildren();
  for (const example of EXAMPLES[lang]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = example;
    button.dir = "auto";
    button.addEventListener("click", () => {
      prompt.value = example;
      generate(example, { preset: null });
    });
    host.appendChild(button);
  }
}

function renderPresets() {
  const host = $("presets");
  host.replaceChildren();
  const index = lang === "ar" ? 0 : 1;
  for (const preset of PRESETS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `preset${preset.featured ? " featured" : ""}${preset.id === presetId ? " active" : ""}`;
    button.innerHTML = `<span class="pi" aria-hidden="true">${preset.icon}</span><span class="pn">${escapeHtml(preset.name[index])}</span><span class="pd">${escapeHtml(preset.desc[index])}</span>`;
    button.addEventListener("click", () => {
      const text = preset.prompt[index];
      prompt.value = text;
      generate(text, { preset: preset.id });
    });
    host.appendChild(button);
  }
}

function renderUnderstood() {
  const host = $("understood");
  if (!parsed) {
    host.innerHTML = `<span class="empty-note">${escapeHtml(t(lang, "nothingYet"))}</span>`;
    return;
  }
  const bits = [];
  if (parsed.mode === "filtration") {
    bits.push(`<span class="tag">💧 ${escapeHtml(objectName(lang, "filtration"))}</span>`);
    bits.push(`<span class="tag">${parsed.filtration.tanks} × ${escapeHtml(objectName(lang, "tank"))}</span>`);
    parsed.filtration.layers.forEach((id, i) => {
      bits.push(`<span class="tag layer">${i + 1}. ${escapeHtml(layerName(lang, id))}</span>`);
    });
  } else if (parsed.mode === "aquaponics") {
    bits.push(`<span class="tag">🌱 ${escapeHtml(objectName(lang, "aquaponics"))}</span>`);
    bits.push(`<span class="tag">${parsed.aquaponics.fish} × ${escapeHtml(objectName(lang, "fish"))}</span>`);
    bits.push(`<span class="tag">${parsed.aquaponics.plants} × ${escapeHtml(objectName(lang, "plant"))}</span>`);
  }
  for (const obj of parsed.objects || []) {
    const swatch = obj.color ? `<span class="sw" style="background:${obj.color}"></span>` : "";
    const notes = [
      obj.material && materialName(lang, obj.material),
      obj.glow && t(lang, "glowing"),
      obj.scale > 1.2 && t(lang, "large"),
      obj.scale < 0.85 && t(lang, "small"),
      obj.floors && `${obj.floors} ${t(lang, "floors")}`,
      obj.slot === "on" && `${t(lang, "on")} ${objectName(lang, parsed.objects[obj.on]?.type || "")}`,
    ].filter(Boolean);
    bits.push(
      `<span class="tag">${swatch}${obj.count} × ${escapeHtml(objectName(lang, obj.type))}${notes.length ? ` <span class="mat">${escapeHtml(notes.join(" · "))}</span>` : ""}</span>`,
    );
  }
  if (parsed.unknown) bits.push(`<p class="notice">${escapeHtml(t(lang, "unknown"))}</p>`);
  host.innerHTML = bits.join("");
}

function modelTitle() {
  if (fileTitle) return fileTitle;
  if (!parsed) return "";
  if (parsed.mode === "filtration") return t(lang, "filtrationTitle");
  if (parsed.mode === "aquaponics") return t(lang, "aquaponicsTitle");
  return (parsed.objects || [])
    .map((obj) => `${obj.count > 1 ? `${obj.count}× ` : ""}${objectName(lang, obj.type)}`)
    .join(" + ");
}

function updateStats() {
  const stats = viewer.hasModel() ? viewer.stats() : null;
  $("modelTitle").textContent = modelTitle();
  $("modelStats").textContent = stats ? `${stats.meshes} ${t(lang, "objects")} · ${stats.tris.toLocaleString()} △` : "";
}

function fileName(ext) {
  const base = (parsed?.mode === "filtration"
    ? "filtration"
    : parsed?.mode === "aquaponics"
      ? "aquaponics"
      : (parsed?.objects || []).map((obj) => obj.type).join("-")) || "model";
  return `${base.slice(0, 48)}.${ext}`;
}

function persist() {
  saveState({
    lang,
    prompt: prompt.value,
    presetId,
    bg: $("bgColor").value,
    light: $("lightPreset").value,
    intensity: Number($("lightIntensity").value),
    shadows: $("shadows").checked,
    rotate: $("btnRotate").classList.contains("on"),
    wire: $("btnWire").classList.contains("on"),
    labels: $("btnLabels").classList.contains("on"),
    grid: $("btnGrid").classList.contains("on"),
    flowLive: $("btnFlowLive").classList.contains("on"),
  });
}

async function generate(text, { preset = null, keepCamera = false } = {}) {
  const value = (text ?? prompt.value).trim();
  if (!value) {
    prompt.focus();
    toast(t(lang, "emptyBody"), true);
    return;
  }
  prompt.value = value;
  presetId = preset;
  fileTitle = "";
  const previous = keepCamera
    ? { pos: viewer.camera.position.clone(), target: viewer.controls.target.clone() }
    : null;
  setBusy(true);
  setProgress(0.12, "progressParse");
  await sleep(30);
  try {
    const spec = parsePrompt(value);
    setProgress(0.46, "progressBuild");
    await sleep(20);
    const root = buildSpec(spec, {
      lang,
      tr: (key) => t(lang, key),
      layer: (id) => layerName(lang, id),
    });
    setProgress(0.82, "progressPlace");
    await sleep(16);
    viewer.setModel(root);
    if (previous) {
      viewer.fly = null;
      viewer.camera.position.copy(previous.pos);
      viewer.controls.target.copy(previous.target);
      viewer.controls.update();
    }
    parsed = spec;
    $("emptyState").classList.add("hidden");
    renderUnderstood();
    renderPresets();
    updateStats();
    if (spec.unknown) toast(t(lang, "unknown"), true);
    const url = new URL(location.href);
    url.searchParams.set("q", value);
    history.replaceState(null, "", url);
    persist();
    setProgress(1, "progressDone");
    await sleep(160);
  } catch (error) {
    console.error(error);
    toast(error?.message || t(lang, "exportFail"), true);
  } finally {
    setBusy(false);
  }
}

function setFlowMode(live, { persistNow = true } = {}) {
  viewer.setFlowLive(live);
  const staticBtn = $("btnFlowStatic");
  const liveBtn = $("btnFlowLive");
  staticBtn.classList.toggle("on", !live);
  staticBtn.setAttribute("aria-pressed", String(!live));
  liveBtn.classList.toggle("on", live);
  liveBtn.setAttribute("aria-pressed", String(live));
  if (persistNow) persist();
}

function bindToggle(id, apply) {
  const button = $(id);
  button.addEventListener("click", () => {
    const on = !button.classList.contains("on");
    button.classList.toggle("on", on);
    button.setAttribute("aria-pressed", String(on));
    apply(on);
    persist();
  });
}

async function toggleFullscreen() {
  const stage = $("stage");
  const active = document.fullscreenElement || stage.classList.contains("pseudo-fs");
  if (!active) {
    try {
      await stage.requestFullscreen();
    } catch {
      stage.classList.add("pseudo-fs");
    }
  } else if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    stage.classList.remove("pseudo-fs");
  }
  applyStaticText();
  viewer.resize();
}

function downloadBlob(blob, name) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1500);
}

async function boot() {
  const saved = loadState();
  lang = saved.lang === "en" ? "en" : "ar";
  applyStaticText();
  renderExamples();
  renderPresets();
  renderUnderstood();

  if (saved.light) {
    const bg = viewer.setLighting(saved.light);
    $("lightPreset").value = saved.light;
    $("bgColor").value = saved.bg || bg;
    if (saved.bg) viewer.setBackground(saved.bg);
  }
  if (saved.intensity) {
    $("lightIntensity").value = String(saved.intensity);
    viewer.setIntensity(Number(saved.intensity));
  }
  if (saved.shadows === false) {
    $("shadows").checked = false;
    viewer.setShadows(false);
  }
  if (saved.grid === false) {
    $("btnGrid").classList.remove("on");
    $("btnGrid").setAttribute("aria-pressed", "false");
    viewer.setGrid(false);
  }
  if (saved.labels === false) {
    $("btnLabels").classList.remove("on");
    $("btnLabels").setAttribute("aria-pressed", "false");
    viewer.setLabels(false);
  }
  if (saved.rotate) {
    $("btnRotate").classList.add("on");
    $("btnRotate").setAttribute("aria-pressed", "true");
    viewer.setAutoRotate(true);
  }
  if (saved.wire) {
    $("btnWire").classList.add("on");
    $("btnWire").setAttribute("aria-pressed", "true");
    viewer.setWireframe(true);
  }
  setFlowMode(saved.flowLive === true, { persistNow: false });

  $("promptForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!busy) generate(prompt.value, { preset: null });
  });
  prompt.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      generate(prompt.value, { preset: null });
    }
  });
  $("btnClear").addEventListener("click", () => {
    prompt.value = "";
    viewer.clear();
    parsed = null;
    presetId = null;
    fileTitle = "";
    $("emptyState").classList.remove("hidden");
    renderUnderstood();
    renderPresets();
    updateStats();
    clearPrompt();
    const url = new URL(location.href);
    url.searchParams.delete("q");
    history.replaceState(null, "", url);
  });
  $("langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    applyStaticText();
    renderExamples();
    renderPresets();
    renderUnderstood();
    updateStats();
    persist();
    if (!parsed && !fileTitle) return;
    if (presetId) {
      const preset = PRESETS.find((item) => item.id === presetId);
      if (preset) {
        const text = preset.prompt[lang === "ar" ? 0 : 1];
        prompt.value = text;
        generate(text, { preset: preset.id, keepCamera: true });
        return;
      }
    }
    if (prompt.value.trim()) generate(prompt.value, { preset: null, keepCamera: true });
  });
  $("btnReset").addEventListener("click", () => viewer.resetCamera());
  $("btnFlowStatic").addEventListener("click", () => setFlowMode(false));
  $("btnFlowLive").addEventListener("click", () => setFlowMode(true));
  bindToggle("btnRotate", (on) => viewer.setAutoRotate(on));
  bindToggle("btnWire", (on) => viewer.setWireframe(on));
  bindToggle("btnLabels", (on) => viewer.setLabels(on));
  bindToggle("btnGrid", (on) => viewer.setGrid(on));
  $("btnFullscreen").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    applyStaticText();
    viewer.resize();
  });
  $("btnGLB").addEventListener("click", async () => {
    if (!viewer.hasModel()) return toast(t(lang, "emptyBody"), true);
    try {
      downloadBlob(await viewer.exportGLB(), fileName("glb"));
      toast(t(lang, "exported"));
    } catch (error) {
      console.error(error);
      toast(t(lang, "exportFail"), true);
    }
  });
  $("btnPNG").addEventListener("click", () => {
    if (!viewer.hasModel()) return toast(t(lang, "emptyBody"), true);
    const link = document.createElement("a");
    link.href = viewer.screenshot();
    link.download = fileName("png");
    link.click();
    toast(t(lang, "exported"));
  });
  $("btnOBJ").addEventListener("click", () => {
    if (!viewer.hasModel()) return toast(t(lang, "emptyBody"), true);
    try {
      downloadBlob(viewer.exportOBJ(), fileName("obj"));
      toast(t(lang, "exported"));
    } catch (error) {
      console.error(error);
      toast(t(lang, "exportFail"), true);
    }
  });
  $("fileInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setBusy(true);
    setProgress(0.4, "progressBuild");
    try {
      const model = await loadGltf(file);
      viewer.setModel(model);
      parsed = null;
      presetId = null;
      fileTitle = file.name;
      $("emptyState").classList.add("hidden");
      renderUnderstood();
      renderPresets();
      updateStats();
      toast(t(lang, "loaded"));
    } catch (error) {
      console.error(error);
      toast(t(lang, "loadFail"), true);
    } finally {
      setBusy(false);
    }
  });
  $("bgColor").addEventListener("input", () => {
    viewer.setBackground($("bgColor").value);
    persist();
  });
  $("lightPreset").addEventListener("change", () => {
    const bg = viewer.setLighting($("lightPreset").value);
    $("bgColor").value = bg;
    viewer.setIntensity(Number($("lightIntensity").value));
    persist();
  });
  $("lightIntensity").addEventListener("input", () => {
    viewer.setIntensity(Number($("lightIntensity").value));
    persist();
  });
  $("shadows").addEventListener("change", () => {
    viewer.setShadows($("shadows").checked);
    persist();
  });
  window.addEventListener("keydown", (event) => {
    if (event.target.matches("textarea, input, select")) return;
    if (event.key === "r") viewer.resetCamera();
    if (event.key === "f") toggleFullscreen();
  });

  if (document.fonts?.ready) await document.fonts.ready;
  const query = new URLSearchParams(location.search).get("q");
  if (query) {
    prompt.value = query;
    generate(query, { preset: null });
  } else if (saved.prompt) {
    prompt.value = saved.prompt;
    generate(saved.prompt, { preset: saved.presetId || null });
  } else {
    const preset = PRESETS[0];
    const text = preset.prompt[lang === "ar" ? 0 : 1];
    prompt.value = text;
    generate(text, { preset: preset.id });
  }
}

boot().catch((error) => console.error(error));
