import { buildObject } from "./builders.js";
import { buildSpec } from "./compose.js";
import { improvePrompt } from "./improve.js";
import { EXAMPLES, FILTER_STACK, PRESETS, layerName, materialName, objectName, t } from "./i18n.js";
import { parsePrompt, suggestPrompt } from "./parser.js";
import { detectFastDevice, setQualityMode } from "./quality.js";
import { clearPrompt, loadFavorites, loadState, rememberPrompt, removeFavorite, saveFavorite, saveState } from "./storage.js";
import { generateTextTo3D, loadApiKey, loadAssetProxy, MeshyError, saveApiKey, saveAssetProxy } from "./text3d.js";
import { Viewer, loadGltf } from "./viewer.js";

const $ = (id) => document.getElementById(id);
const prompt = $("prompt");
const viewer = new Viewer($("viewport"));

let lang = "ar";
let presetId = null;
let parsed = null;
let fileTitle = "";
let busy = false;
let apiJob = false;
let apiAbort = null;
let fromApi = false;
let panelOpen = true;
let quality = "high";
let showInterior = false;
let panelWidth = 332;
let selectedPartId = null;

function narrowScreen() {
  return window.matchMedia("(max-width: 1100px)").matches;
}

function applyTheme(theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "light" ? "#eceff3" : "#16181c");
}

function applyPanel() {
  const app = $("app");
  app.classList.toggle("panel-open", panelOpen);
  app.classList.toggle("panel-closed", !panelOpen);
  const btn = $("panelToggle");
  if (!btn) return;
  btn.setAttribute("aria-expanded", String(panelOpen));
  $("panelToggleLabel").textContent = t(lang, panelOpen ? "hidePanel" : "showPanel");
  btn.setAttribute("aria-label", t(lang, panelOpen ? "hidePanelFull" : "showPanelFull"));
  const grip = $("sheetGrip");
  if (grip) grip.setAttribute("aria-label", t(lang, "hidePanelFull"));
  const panel = $("studioPanel");
  if (panel) panel.inert = !panelOpen;
}

function syncStatus() {
  const node = $("status");
  if (!node) return;
  node.classList.toggle("busy", busy);
  $("statusText").textContent = t(lang, busy ? "statusGenerating" : "statusReady");
  const gen = $("btnGenerate");
  gen.disabled = busy;
  gen.querySelector("span").textContent = t(lang, busy ? "generating" : "generate");
  gen.setAttribute("aria-label", t(lang, busy ? "generating" : "generate"));
  const apiBtn = $("btnApi");
  if (apiBtn) {
    apiBtn.disabled = busy;
    apiBtn.querySelector("span").textContent = t(lang, busy && apiJob ? "apiGenerating" : "apiGenerate");
  }
  const theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  const themeKey = theme === "light" ? "themeToDark" : "themeToLight";
  const themeFull = theme === "light" ? "themeToDarkFull" : "themeToLightFull";
  $("themeLabel").textContent = t(lang, themeKey);
  $("themeBtn").setAttribute("aria-label", t(lang, themeFull));
  $("themeBtn").setAttribute("title", t(lang, themeFull));
  applyPanel();
}

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

function setProgress(amount, key, detail = "") {
  $("progressBar").style.width = `${Math.round(amount * 100)}%`;
  const base = t(lang, key);
  $("progressLabel").textContent = detail ? `${base} · ${detail}` : base;
}

function setBusy(on) {
  busy = on;
  $("loading").classList.toggle("hidden", !on);
  syncStatus();
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
  const light = $("lightPreset");
  const current = light.value || "studio";
  light.innerHTML = ["studio", "day", "sunset", "night"]
    .map((id) => `<option value="${id}">${escapeHtml(t(lang, `light${id[0].toUpperCase()}${id.slice(1)}`))}</option>`)
    .join("");
  light.value = current;
  const fullLabel = t(lang, document.fullscreenElement || $("stage").classList.contains("pseudo-fs") ? "exitFullscreen" : "fullscreen");
  $("btnFullscreen").querySelector("span").textContent = fullLabel;
  $("dockFull").querySelector("span").textContent = fullLabel;
  $("flowSwitch").setAttribute("aria-label", t(lang, "flowView"));
  $("btnFlowStatic").title = t(lang, "flowStaticTitle");
  $("btnFlowLive").title = t(lang, "flowLiveTitle");
  const interiorBtn = $("btnInterior");
  if (interiorBtn) {
    interiorBtn.title = t(lang, "showInteriorTitle");
    interiorBtn.setAttribute("aria-label", t(lang, "showInterior"));
  }
  syncStatus();
  document.querySelectorAll(".tbtn, #langBtn, #btnFlowStatic, #btnFlowLive, #btnClear").forEach((button) => {
    const span = button.querySelector("[data-i18n]");
    if (span?.textContent) button.setAttribute("aria-label", span.textContent);
  });
}

function renderExamples() {
  const host = $("examples");
  host.replaceChildren();
  const cats = ["water", "basics", "education", "engineering", "environment", "games", "furniture"];
  const catKey = {
    water: "catWater",
    basics: "catBasics",
    education: "catEducation",
    engineering: "catEngineering",
    environment: "catEnvironment",
    games: "catGames",
    furniture: "catFurniture",
  };
  for (const cat of cats) {
    const items = EXAMPLES[lang].filter((example) => (example.cat || "basics") === cat);
    if (!items.length) continue;
    const label = document.createElement("div");
    label.className = "example-cat";
    label.textContent = t(lang, catKey[cat]);
    host.appendChild(label);
    for (const example of items) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "example-card";
      button.dir = "auto";
      button.title = example.text;
      button.innerHTML = `<span class="et">${escapeHtml(example.title)}</span><span class="ed">${escapeHtml(example.text)}</span>`;
      button.addEventListener("click", () => {
        prompt.value = example.text;
        generate(example.text, { preset: null });
      });
      host.appendChild(button);
    }
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
    FILTER_STACK.forEach((id, i) => {
      bits.push(`<span class="tag layer">${i + 1}. ${escapeHtml(layerName(lang, id))}</span>`);
    });
  } else if (parsed.mode === "aquaponics") {
    bits.push(`<span class="tag">🌱 ${escapeHtml(objectName(lang, "aquaponics"))}</span>`);
    bits.push(`<span class="tag">${parsed.aquaponics.fish} × ${escapeHtml(objectName(lang, "fish"))}</span>`);
    bits.push(`<span class="tag">${parsed.aquaponics.plants} × ${escapeHtml(objectName(lang, "plant"))}</span>`);
  } else if (parsed.mode === "classroom") {
    bits.push(`<span class="tag">📚 ${escapeHtml(t(lang, "classroomTitle"))}</span>`);
    bits.push(`<span class="tag">${parsed.classroom?.desks || 6} × ${escapeHtml(objectName(lang, "table"))}</span>`);
    bits.push(`<span class="tag">${escapeHtml(objectName(lang, "board"))}</span>`);
    bits.push(`<span class="tag">${escapeHtml(objectName(lang, "screen"))}</span>`);
  }
  if (showInterior || parsed.interior) bits.push(`<span class="tag">${escapeHtml(t(lang, "showInterior"))}</span>`);
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
  if (parsed.mode === "classroom") return t(lang, "classroomTitle");
  return (parsed.objects || [])
    .map((obj) => `${obj.count > 1 ? `${obj.count}× ` : ""}${objectName(lang, obj.type)}`)
    .join(" + ");
}

function complexityOf(tris) {
  if (tris < 12000) return "light";
  if (tris < 40000) return "medium";
  return "heavy";
}

function updateStats() {
  const stats = viewer.hasModel() ? viewer.stats() : null;
  const partCount = viewer.hasModel() ? viewer.parts().length : 0;
  $("modelTitle").textContent = modelTitle();
  const badge = $("complexity");
  if (!stats) {
    $("modelStats").textContent = "";
    badge.textContent = "";
    badge.className = "pill complexity";
    return;
  }
  const level = complexityOf(stats.tris);
  $("modelStats").textContent = `${partCount} ${t(lang, "parts")} · ${stats.meshes} ${t(lang, "objects")} · ${stats.tris.toLocaleString()} ${t(lang, "triangles")}`;
  badge.textContent = t(lang, level === "light" ? "complexityLight" : level === "medium" ? "complexityMedium" : "complexityHeavy");
  badge.className = `pill complexity ${level}`;
}

function fileName(ext) {
  if (fromApi) return `meshy.${ext}`;
  const base = (parsed?.mode === "filtration"
    ? "filtration"
    : parsed?.mode === "aquaponics"
      ? "aquaponics"
      : parsed?.mode === "classroom"
        ? "classroom"
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
    showInterior,
    theme: document.documentElement.dataset.theme === "light" ? "light" : "dark",
    quality,
    panelWidth,
  });
}

async function generate(text, { preset = null, keepCamera = false } = {}) {
  const value = (text ?? prompt.value).trim();
  if (!value) {
    prompt.focus();
    if (narrowScreen() && !panelOpen) {
      panelOpen = true;
      applyPanel();
    }
    toast(t(lang, "emptyBody"), true);
    return;
  }
  prompt.value = value;
  if (narrowScreen()) {
    panelOpen = false;
    applyPanel();
  }
  presetId = preset;
  fileTitle = "";
  fromApi = false;
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
      interior: showInterior,
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
    selectedPartId = null;
    rememberPrompt(value);
    $("emptyState").classList.add("hidden");
    renderUnderstood();
    renderPresets();
    renderHistory();
    renderParts();
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

function setInterior(on, { persistNow = true, regenerate = true } = {}) {
  showInterior = !!on;
  const button = $("btnInterior");
  if (button) {
    button.classList.toggle("on", showInterior);
    button.setAttribute("aria-pressed", String(showInterior));
  }
  if (persistNow) persist();
  if (regenerate && !fromApi && prompt.value.trim() && !busy) {
    generate(prompt.value, { preset: presetId, keepCamera: true });
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
  if (!(blob instanceof Blob) || blob.size < 16) throw new Error("empty file");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(url);
  }, 120000);
}

function colorInputValue(hex) {
  return /^#[0-9a-fA-F]{6}$/.test(hex || "") ? hex : "#90a4ae";
}

function readPartColor(group) {
  let found = "#90a4ae";
  group.traverse((node) => {
    if (found !== "#90a4ae") return;
    if (node.isMesh && node.material?.color && !node.userData?.isLabel) found = `#${node.material.color.getHexString()}`;
  });
  return found;
}

function renderParts() {
  const host = $("partList");
  const parts = viewer.parts();
  host.replaceChildren();
  if (!parts.length) {
    host.innerHTML = `<span class="empty-note">${escapeHtml(t(lang, "nothingYet"))}</span>`;
    return;
  }
  for (const part of parts) {
    const edit = part.userData.edit;
    const row = document.createElement("div");
    row.className = `part${edit.id === selectedPartId ? " selected" : ""}`;
    row.dataset.id = edit.id;
    const name = document.createElement("button");
    name.type = "button";
    name.className = "pname";
    name.textContent = edit.label;
    name.addEventListener("click", () => selectPart(part));
    const size = document.createElement("input");
    size.type = "range";
    size.min = "0.4";
    size.max = "2.4";
    size.step = "0.05";
    size.value = String(edit.factor || 1);
    size.setAttribute("aria-label", t(lang, "editSize"));
    size.addEventListener("input", () => {
      viewer.setPartScale(part, Number(size.value));
      updateStats();
    });
    const color = document.createElement("input");
    color.type = "color";
    color.value = colorInputValue(edit.color || readPartColor(part));
    color.setAttribute("aria-label", t(lang, "editColor"));
    color.addEventListener("input", () => viewer.setPartColor(part, color.value));
    row.append(name, size, color);
    host.appendChild(row);
  }
}

function selectPart(part) {
  selectedPartId = part?.userData?.edit?.id || null;
  viewer.highlight(part || null);
  document.querySelectorAll(".part").forEach((row) => row.classList.toggle("selected", row.dataset.id === selectedPartId));
  document.querySelector(".part.selected")?.scrollIntoView({ block: "nearest" });
}

function renderSuggestions() {
  const host = $("suggestions");
  const hits = suggestPrompt(prompt.value, lang);
  host.replaceChildren();
  host.hidden = hits.length === 0;
  for (const hit of hits) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = hit;
    button.addEventListener("click", () => {
      const value = prompt.value;
      const typing = value.length > 0 && !/\s$/.test(value);
      const next = typing ? value.replace(/\S+$/, hit) : `${value}${hit}`;
      prompt.value = `${next} `;
      prompt.focus();
      renderSuggestions();
    });
    host.appendChild(button);
  }
}

function renderHistory() {
  const host = $("history");
  const items = loadState().history || [];
  host.replaceChildren();
  for (const item of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.length > 48 ? `${item.slice(0, 48)}…` : item;
    button.title = item;
    button.addEventListener("click", () => {
      prompt.value = item;
      generate(item, { preset: null });
    });
    host.appendChild(button);
  }
}

function renderFavorites() {
  const host = $("favorites");
  const items = loadFavorites();
  host.replaceChildren();
  if (!items.length) {
    host.innerHTML = `<span class="empty-note">${escapeHtml(t(lang, "noFavorites"))}</span>`;
    return;
  }
  for (const item of items) {
    const wrap = document.createElement("div");
    wrap.className = "preset favorite-row";
    const thumb = item.thumbnail ? `<img class="fav-thumb" alt="" src="${escapeHtml(item.thumbnail)}" />` : "";
    wrap.innerHTML = `${thumb}<span class="pn">${escapeHtml(item.title || item.prompt)}</span><span class="pd">${escapeHtml(item.prompt)}</span>`;
    wrap.addEventListener("click", () => {
      prompt.value = item.prompt;
      generate(item.prompt, { preset: null });
    });
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-fav";
    remove.textContent = t(lang, "remove");
    remove.addEventListener("click", (event) => {
      event.stopPropagation();
      removeFavorite(item.id);
      renderFavorites();
    });
    wrap.appendChild(remove);
    host.appendChild(wrap);
  }
}

function applyQuality(next, { regenerate = false, save = true } = {}) {
  quality = next === "fast" ? "fast" : "high";
  setQualityMode(quality);
  viewer.setQuality(quality);
  $("btnQualityHigh").classList.toggle("on", quality === "high");
  $("btnQualityFast").classList.toggle("on", quality === "fast");
  $("btnQualityHigh").setAttribute("aria-pressed", String(quality === "high"));
  $("btnQualityFast").setAttribute("aria-pressed", String(quality === "fast"));
  if (regenerate && prompt.value.trim() && !busy) generate(prompt.value, { preset: presetId, keepCamera: true });
  else if (save) persist();
}

function placeResizer() {
  const resizer = $("panelResizer");
  const layout = document.querySelector(".layout");
  const panel = $("studioPanel");
  if (!resizer || narrowScreen() || !panelOpen) {
    if (resizer) resizer.hidden = true;
    return;
  }
  resizer.hidden = false;
  const edge = document.documentElement.dir === "rtl" ? panel.getBoundingClientRect().right : panel.getBoundingClientRect().left;
  resizer.style.left = `${edge - layout.getBoundingClientRect().left - 7}px`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }
}

function shareUrl() {
  const url = new URL(location.href);
  const value = prompt.value.trim();
  if (value) url.searchParams.set("q", value);
  else url.searchParams.delete("q");
  history.replaceState(null, "", url);
  return url.toString();
}

function showShare(text) {
  $("shareUrl").value = text;
  $("shareSheet").classList.remove("hidden");
  $("shareUrl").focus();
  $("shareUrl").select();
}

async function shareLink() {
  const text = shareUrl();
  try {
    if (navigator.share && narrowScreen()) {
      await navigator.share({ title: t(lang, "appName"), text, url: text });
      return;
    }
  } catch (error) {
    if (error?.name === "AbortError") return;
  }
  const ok = await copyText(text);
  showShare(text);
  toast(t(lang, ok ? "copied" : "shareFail"), !ok);
}

function closeExportMenu() {
  $("exportMenu").classList.add("hidden");
  $("dockExport").setAttribute("aria-expanded", "false");
}

async function exportPNG(options) {
  if (!viewer.hasModel()) return toast(t(lang, "emptyBody"), true);
  try {
    const blob = await viewer.capturePNG(options);
    downloadBlob(blob, fileName("png"));
    toast(t(lang, "exported"));
  } catch (error) {
    console.error(error);
    toast(t(lang, "exportFail"), true);
  }
}

async function exportGLB() {
  if (!viewer.hasModel()) return toast(t(lang, "emptyBody"), true);
  try {
    downloadBlob(await viewer.exportGLB(), fileName("glb"));
    toast(t(lang, "exported"));
  } catch (error) {
    console.error(error);
    toast(t(lang, "exportFail"), true);
  }
}

function exportOBJ() {
  if (!viewer.hasModel()) return toast(t(lang, "emptyBody"), true);
  try {
    downloadBlob(viewer.exportOBJ(), fileName("obj"));
    toast(t(lang, "exported"));
  } catch (error) {
    console.error(error);
    toast(t(lang, "exportFail"), true);
  }
}

function showShortcuts(on) {
  $("shortcuts").classList.toggle("hidden", !on);
}

function syncApiKeyForm() {
  const saved = !!loadApiKey();
  const editing = $("apiKeyForm").dataset.force === "1";
  $("apiKeyForm").classList.toggle("hidden", saved && !editing);
  $("apiKeySaved").classList.toggle("hidden", !saved || editing);
  $("apiProxyInput").value = loadAssetProxy();
}

function revealApiKey() {
  $("apiKeyForm").dataset.force = "1";
  $("apiKeyForm").classList.remove("hidden");
  $("apiKeySaved").classList.add("hidden");
  $("apiKeyInput").focus();
}

function rememberApiKey() {
  const key = saveApiKey($("apiKeyInput").value);
  $("apiKeyInput").value = "";
  delete $("apiKeyForm").dataset.force;
  syncApiKeyForm();
  toast(t(lang, key ? "apiSavedKey" : "apiForgotKey"), !key);
}

function addShape(type) {
  if (busy) return;
  const spec = {
    type,
    count: 1,
    scale: 1,
    sx: 1,
    sy: 1,
    color: type === "sphere" ? "#1e88e5" : "#90a4ae",
    material: type === "sphere" ? "glass" : type === "cone" ? "metal" : null,
    seed: Date.now(),
  };
  const group = buildObject(spec, { lang, partLabel: (id) => objectName(lang, id) });
  viewer.addPart(group);
  $("emptyState").classList.add("hidden");
  selectedPartId = group.userData.edit?.id || null;
  renderParts();
  updateStats();
  selectPart(group);
}

function apiErrorText(error) {
  const code = error instanceof MeshyError ? error.code : "failed";
  const key = {
    invalid_key: "apiInvalidKey",
    credits: "apiCredits",
    forbidden: "apiForbidden",
    rate: "apiRate",
    bad_request: "apiBadRequest",
    failed: "apiFailed",
    timeout: "apiTimeout",
    network: "apiNetwork",
    cors: "apiCors",
    cancelled: "apiCancelled",
  }[code] || "apiFailed";
  return t(lang, key);
}

async function generateApi() {
  const value = prompt.value.trim();
  if (!value) {
    prompt.focus();
    toast(t(lang, "emptyBody"), true);
    return;
  }
  if (!loadApiKey()) {
    revealApiKey();
    toast(t(lang, "apiNeedKey"), true);
    return;
  }
  if (busy) return;
  apiJob = true;
  apiAbort = new AbortController();
  $("apiCancel").classList.remove("hidden");
  $("apiFileLinkWrap").classList.add("hidden");
  setBusy(true);
  setProgress(0.04, "apiProgressSubmit");
  if (narrowScreen()) {
    panelOpen = false;
    applyPanel();
  }
  try {
    const result = await generateTextTo3D(value, {
      apiKey: loadApiKey(),
      assetProxy: loadAssetProxy(),
      signal: apiAbort.signal,
      onProgress: ({ phase, progress }) => {
        if (phase === "preview") setProgress(0.08 + (progress / 100) * 0.4, "apiProgressPreview", `${progress}%`);
        else if (phase === "texture") setProgress(0.5 + (progress / 100) * 0.38, "apiProgressTexture", `${progress}%`);
        else if (phase === "download") setProgress(0.94, "apiProgressDownload");
      },
    });
    if (result.trimmed) toast(t(lang, "apiTrimmed"), true);
    const file = new File([result.blob], "meshy.glb", { type: "model/gltf-binary" });
    const model = await loadGltf(file);
    viewer.setModel(model);
    parsed = null;
    presetId = null;
    fromApi = true;
    fileTitle = value.length > 42 ? `${value.slice(0, 42)}…` : value;
    $("emptyState").classList.add("hidden");
    selectedPartId = null;
    rememberPrompt(value);
    renderUnderstood();
    renderPresets();
    renderHistory();
    renderParts();
    updateStats();
    const url = new URL(location.href);
    url.searchParams.set("q", value);
    history.replaceState(null, "", url);
    persist();
    setProgress(1, "progressDone");
    toast(t(lang, result.textured ? "apiReady" : "apiTextureSkipped"), !result.textured);
  } catch (error) {
    console.error(error?.code || error?.name || "api");
    if (error instanceof MeshyError && error.code === "cancelled") {
      toast(t(lang, "apiCancelled"));
    } else {
      if (error instanceof MeshyError && error.code === "cors") {
        $("apiProxyDetails").open = true;
        if (error.url) {
          $("apiFileLink").href = error.url;
          $("apiFileLinkWrap").classList.remove("hidden");
        }
      }
      toast(apiErrorText(error), true);
    }
  } finally {
    apiJob = false;
    apiAbort = null;
    $("apiCancel").classList.add("hidden");
    setBusy(false);
  }
}

function renderShortcutList() {
  const rows = [
    ["Ctrl + Enter", "generate"],
    ["R", "resetView"],
    ["F", "fullscreen"],
    ["W", "wireframe"],
    ["L", "labels"],
    ["G", "grid"],
    ["A", "autoRotate"],
    ["1 / 2", "flowStatic"],
    ["I", "showInterior"],
    ["H", "showPanel"],
    ["Q", "quality"],
    ["S", "share"],
    ["?", "shortcuts"],
  ];
  $("shortcutList").innerHTML = rows
    .map(([key, id]) => `<li><span>${escapeHtml(t(lang, id))}</span><kbd>${escapeHtml(key)}</kbd></li>`)
    .join("");
}

function clickToggle(id) {
  const button = $(id);
  button.click();
}

async function boot() {
  const saved = loadState();
  lang = saved.lang === "en" ? "en" : "ar";
  const storedTheme = saved.theme === "light" || saved.theme === "dark" ? saved.theme : "";
  applyTheme(storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  panelOpen = !narrowScreen();
  applyStaticText();
  renderExamples();
  renderPresets();
  renderUnderstood();
  renderHistory();
  renderFavorites();
  renderParts();
  renderShortcutList();
  syncApiKeyForm();
  if (saved.panelWidth) {
    panelWidth = Math.max(280, Math.min(560, Number(saved.panelWidth) || 332));
    document.querySelector(".layout").style.setProperty("--panel-w", `${panelWidth}px`);
  }
  const initialQuality = saved.quality === "high" || saved.quality === "fast" ? saved.quality : detectFastDevice() ? "fast" : "high";
  applyQuality(initialQuality, { save: false });
  placeResizer();

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
  setInterior(saved.showInterior === true, { persistNow: false, regenerate: false });

  $("promptForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!busy) generate(prompt.value, { preset: null });
  });
  prompt.addEventListener("input", () => renderSuggestions());
  prompt.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      generate(prompt.value, { preset: null });
    }
  });
  $("btnImprove").addEventListener("click", () => {
    if (busy) return;
    const next = improvePrompt(prompt.value);
    prompt.value = next;
    renderSuggestions();
    generate(next, { preset: null });
  });
  $("btnShare").addEventListener("click", () => shareLink());
  $("copyShare").addEventListener("click", async () => {
    const ok = await copyText($("shareUrl").value);
    toast(t(lang, ok ? "copied" : "shareFail"), !ok);
  });
  $("closeShare").addEventListener("click", () => $("shareSheet").classList.add("hidden"));
  $("shareSheet").addEventListener("click", (event) => {
    if (event.target === $("shareSheet")) $("shareSheet").classList.add("hidden");
  });
  $("btnApi").addEventListener("click", () => generateApi());
  $("btnSaveKey").addEventListener("click", () => rememberApiKey());
  $("btnForgetKey").addEventListener("click", () => {
    $("apiKeyInput").value = "";
    saveApiKey("");
    delete $("apiKeyForm").dataset.force;
    syncApiKeyForm();
    toast(t(lang, "apiForgotKey"));
  });
  $("btnEditKey").addEventListener("click", () => revealApiKey());
  $("apiProxyInput").addEventListener("change", () => {
    saveAssetProxy($("apiProxyInput").value.trim());
    toast(t(lang, "apiProxySaved"));
  });
  $("apiCancel").addEventListener("click", () => apiAbort?.abort());
  $("addCube").addEventListener("click", () => addShape("cube"));
  $("addSphere").addEventListener("click", () => addShape("sphere"));
  $("addCylinder").addEventListener("click", () => addShape("cylinder"));
  $("addCone").addEventListener("click", () => addShape("cone"));
  $("btnFavorite").addEventListener("click", () => {
    const value = prompt.value.trim();
    if (!value) return toast(t(lang, "emptyBody"), true);
    let thumbnail = "";
    try {
      thumbnail = viewer.hasModel() ? viewer.thumbnail() : "";
    } catch {
      thumbnail = "";
    }
    saveFavorite({
      id: `${Date.now()}`,
      title: (modelTitle() || value).slice(0, 48),
      prompt: value,
      thumbnail,
    });
    renderFavorites();
    toast(t(lang, "savedFavorite"));
  });
  $("btnClear").addEventListener("click", () => {
    prompt.value = "";
    viewer.clear();
    parsed = null;
    presetId = null;
    fileTitle = "";
    fromApi = false;
    $("emptyState").classList.remove("hidden");
    selectedPartId = null;
    viewer.clearHighlight();
    renderUnderstood();
    renderPresets();
    renderParts();
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
    renderHistory();
    renderFavorites();
    renderShortcutList();
    renderSuggestions();
    updateStats();
    placeResizer();
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
  $("dockReset").addEventListener("click", () => viewer.resetCamera());
  $("dockFull").addEventListener("click", toggleFullscreen);
  $("dockExport").addEventListener("click", () => {
    const menu = $("exportMenu");
    const open = menu.classList.toggle("hidden");
    $("dockExport").setAttribute("aria-expanded", String(!open));
  });
  $("menuGLB").addEventListener("click", () => {
    closeExportMenu();
    exportGLB();
  });
  $("menuPNG").addEventListener("click", () => {
    closeExportMenu();
    exportPNG({ scale: 2 });
  });
  $("menuPNGHD").addEventListener("click", () => {
    closeExportMenu();
    exportPNG({ scale: 3 });
  });
  $("menuPNGAlpha").addEventListener("click", () => {
    closeExportMenu();
    exportPNG({ scale: 2, transparent: true });
  });
  $("menuOBJ").addEventListener("click", () => {
    closeExportMenu();
    exportOBJ();
  });
  document.addEventListener("pointerdown", (event) => {
    if (!$("exportMenu").contains(event.target) && event.target !== $("dockExport") && !$("dockExport").contains(event.target)) closeExportMenu();
  });
  $("btnFlowStatic").addEventListener("click", () => setFlowMode(false));
  $("btnFlowLive").addEventListener("click", () => setFlowMode(true));
  $("btnInterior").addEventListener("click", () => setInterior(!showInterior));
  bindToggle("btnRotate", (on) => viewer.setAutoRotate(on));
  bindToggle("btnWire", (on) => viewer.setWireframe(on));
  bindToggle("btnLabels", (on) => viewer.setLabels(on));
  bindToggle("btnGrid", (on) => viewer.setGrid(on));
  $("btnFullscreen").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    applyStaticText();
    viewer.resize();
  });
  $("btnGLB").addEventListener("click", exportGLB);
  $("btnPNG").addEventListener("click", () => exportPNG({ scale: 2 }));
  $("btnOBJ").addEventListener("click", exportOBJ);
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
      fromApi = false;
      if (narrowScreen()) {
        panelOpen = false;
        applyPanel();
      }
      $("emptyState").classList.add("hidden");
      selectedPartId = null;
      renderUnderstood();
      renderPresets();
      renderParts();
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
  $("btnQualityHigh").addEventListener("click", () => applyQuality("high", { regenerate: true }));
  $("btnQualityFast").addEventListener("click", () => applyQuality("fast", { regenerate: true }));
  $("themeBtn").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
    syncStatus();
    persist();
  });
  $("panelToggle").addEventListener("click", () => {
    panelOpen = !panelOpen;
    applyPanel();
    placeResizer();
    if (panelOpen && narrowScreen()) setTimeout(() => prompt.focus(), 250);
  });
  $("shortcutBtn").addEventListener("click", () => {
    renderShortcutList();
    showShortcuts(true);
  });
  $("closeShortcuts").addEventListener("click", () => showShortcuts(false));
  $("shortcuts").addEventListener("click", (event) => {
    if (event.target === $("shortcuts")) showShortcuts(false);
  });
  const resizer = $("panelResizer");
  resizer.addEventListener("pointerdown", (event) => {
    if (narrowScreen() || !panelOpen) return;
    event.preventDefault();
    resizer.setPointerCapture(event.pointerId);
    const rtl = document.documentElement.dir === "rtl";
    const startX = event.clientX;
    const startW = $("studioPanel").getBoundingClientRect().width;
    const move = (ev) => {
      const dx = ev.clientX - startX;
      panelWidth = Math.max(280, Math.min(560, startW + (rtl ? dx : -dx)));
      document.querySelector(".layout").style.setProperty("--panel-w", `${panelWidth}px`);
      placeResizer();
      viewer.resize();
    };
    const up = () => {
      resizer.removeEventListener("pointermove", move);
      resizer.removeEventListener("pointerup", up);
      persist();
      viewer.resize();
    };
    resizer.addEventListener("pointermove", move);
    resizer.addEventListener("pointerup", up);
  });
  const canvas = viewer.renderer.domElement;
  let pointerDown = null;
  canvas.addEventListener("pointerdown", (event) => {
    pointerDown = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!pointerDown) return;
    const dx = event.clientX - pointerDown.x;
    const dy = event.clientY - pointerDown.y;
    pointerDown = null;
    if (dx * dx + dy * dy > 16) return;
    selectPart(viewer.pick(event.clientX, event.clientY));
  });
  $("sheetScrim").addEventListener("click", () => {
    panelOpen = false;
    applyPanel();
  });
  $("sheetGrip").addEventListener("click", () => {
    panelOpen = false;
    applyPanel();
  });
  window.matchMedia("(max-width: 1100px)").addEventListener("change", (event) => {
    panelOpen = !event.matches;
    applyPanel();
    placeResizer();
    viewer.resize();
  });
  window.addEventListener("resize", () => placeResizer());
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeExportMenu();
      if (!$("shareSheet").classList.contains("hidden")) {
        $("shareSheet").classList.add("hidden");
        return;
      }
      if (!$("shortcuts").classList.contains("hidden")) {
        showShortcuts(false);
        return;
      }
      if (panelOpen && narrowScreen()) {
        if (event.target.matches("textarea, input, select")) event.target.blur();
        panelOpen = false;
        applyPanel();
      }
      return;
    }
    if (event.key === "?" && !event.target.matches("textarea, input, select")) {
      renderShortcutList();
      showShortcuts($("shortcuts").classList.contains("hidden"));
      return;
    }
    if (event.target.matches("textarea, input, select")) return;
    if (narrowScreen()) return;
    const key = event.key.toLowerCase();
    if (key === "r") viewer.resetCamera();
    else if (key === "f") toggleFullscreen();
    else if (key === "w") clickToggle("btnWire");
    else if (key === "l") clickToggle("btnLabels");
    else if (key === "g") clickToggle("btnGrid");
    else if (key === "a") clickToggle("btnRotate");
    else if (key === "h") $("panelToggle").click();
    else if (key === "q") applyQuality(quality === "high" ? "fast" : "high", { regenerate: true });
    else if (key === "s") shareLink();
    else if (event.key === "1") setFlowMode(false);
    else if (event.key === "2") setFlowMode(true);
    else if (key === "i") setInterior(!showInterior);
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
