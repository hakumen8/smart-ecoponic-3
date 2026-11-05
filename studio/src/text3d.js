/** Optional Meshy text-to-3D client. The API key stays in localStorage and is never written to the repo. */

export const MESHY_API = "https://api.meshy.ai/openapi/v2/text-to-3d";
export const KEY_STORAGE = "mujassam.meshy.key";
export const PROXY_STORAGE = "mujassam.meshy.assetProxy";
const ASSET_HOSTS = new Set(["assets.meshy.ai"]);
const PROMPT_LIMIT = 800;

export class MeshyError extends Error {
  constructor(code, message = "") {
    super(message || code);
    this.name = "MeshyError";
    this.code = code;
  }
}

function storage() {
  try {
    return globalThis.localStorage || null;
  } catch {
    return null;
  }
}

export function loadApiKey() {
  return storage()?.getItem(KEY_STORAGE)?.trim() || "";
}

export function saveApiKey(value) {
  const store = storage();
  if (!store) return "";
  const key = String(value || "").trim();
  if (!key) store.removeItem(KEY_STORAGE);
  else store.setItem(KEY_STORAGE, key);
  return key;
}

export function loadAssetProxy() {
  return storage()?.getItem(PROXY_STORAGE)?.trim() || "";
}

export function saveAssetProxy(value) {
  const store = storage();
  if (!store) return "";
  const url = String(value || "").trim();
  if (!url) store.removeItem(PROXY_STORAGE);
  else store.setItem(PROXY_STORAGE, url);
  return url;
}

export function clipPrompt(text) {
  const value = String(text || "").trim();
  return { text: value.slice(0, PROMPT_LIMIT), trimmed: value.length > PROMPT_LIMIT };
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url;
  } catch {
    return null;
  }
}

export function isMeshyAssetUrl(value) {
  const url = safeUrl(value);
  return !!url && url.protocol === "https:" && ASSET_HOSTS.has(url.hostname);
}

export function proxyRequestUrl(proxy, assetUrl) {
  const base = String(proxy || "").trim();
  if (!base || !isMeshyAssetUrl(assetUrl)) throw new MeshyError("cors");
  if (base.includes("{url}")) return base.replaceAll("{url}", encodeURIComponent(assetUrl));
  const url = safeUrl(base);
  if (!url) throw new MeshyError("bad_request", "proxy");
  url.searchParams.set("url", assetUrl);
  return url.toString();
}

async function errorFrom(response) {
  let message = "";
  try {
    const body = await response.json();
    message = body?.message || body?.task_error?.message || "";
  } catch {
    message = "";
  }
  if (response.status === 401) return new MeshyError("invalid_key", message);
  if (response.status === 402) return new MeshyError("credits", message);
  if (response.status === 403) return new MeshyError("forbidden", message);
  if (response.status === 429) return new MeshyError("rate", message);
  if (response.status === 400) return new MeshyError("bad_request", message);
  return new MeshyError("failed", message || `HTTP ${response.status}`);
}

function waitMs(response, fallback) {
  const retry = Number(response.headers.get("Retry-After"));
  if (Number.isFinite(retry) && retry > 0) return Math.min(Math.max(retry * 1000, 2000), 15000);
  return fallback;
}

async function createTask(body, { apiKey, fetchImpl, signal }) {
  let response;
  try {
    response = await fetchImpl(MESHY_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if (error?.name === "AbortError") throw new MeshyError("cancelled");
    throw new MeshyError("network");
  }
  if (!response.ok) throw await errorFrom(response);
  const data = await response.json();
  if (!data?.result) throw new MeshyError("failed", "missing task id");
  return data.result;
}

async function pollTask(id, { apiKey, fetchImpl, signal, sleep, now, timeoutMs, onProgress, phase }) {
  const started = now();
  while (now() - started < timeoutMs) {
    if (signal?.aborted) throw new MeshyError("cancelled");
    let response;
    try {
      response = await fetchImpl(`${MESHY_API}/${id}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        signal,
      });
    } catch (error) {
      if (error?.name === "AbortError") throw new MeshyError("cancelled");
      throw new MeshyError("network");
    }
    if (!response.ok) throw await errorFrom(response);
    const task = await response.json();
    const progress = Number(task.progress) || 0;
    onProgress?.({ phase, progress, status: task.status || "" });
    if (task.status === "SUCCEEDED") return task;
    if (task.status === "FAILED") throw new MeshyError("failed", task.task_error?.message || "FAILED");
    if (task.status === "CANCELED") throw new MeshyError("cancelled");
    await sleep(waitMs(response, 4000));
  }
  throw new MeshyError("timeout");
}

async function readGlb(response) {
  if (!response.ok) throw new MeshyError("failed", `download ${response.status}`);
  const blob = await response.blob();
  if (!blob || blob.size < 32) throw new MeshyError("failed", "empty model");
  return blob;
}

export async function downloadGlb(assetUrl, { assetProxy = "", fetchImpl = fetch, signal } = {}) {
  if (!isMeshyAssetUrl(assetUrl)) throw new MeshyError("failed", "unexpected model host");
  const cors = () => {
    const error = new MeshyError("cors");
    error.url = assetUrl;
    return error;
  };
  try {
    const direct = await fetchImpl(assetUrl, { signal, mode: "cors" });
    return await readGlb(direct);
  } catch (error) {
    if (error instanceof MeshyError) throw error;
    if (error?.name === "AbortError") throw new MeshyError("cancelled");
    if (!assetProxy) throw cors();
  }
  try {
    const proxied = await fetchImpl(proxyRequestUrl(assetProxy, assetUrl), { signal, mode: "cors" });
    return await readGlb(proxied);
  } catch (error) {
    if (error instanceof MeshyError) throw error;
    if (error?.name === "AbortError") throw new MeshyError("cancelled");
    throw cors();
  }
}

function glbUrl(task) {
  return task?.model_urls?.glb || "";
}

export async function generateTextTo3D(prompt, options = {}) {
  const fetchImpl = options.fetchImpl || fetch;
  const sleep = options.sleep || ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const now = options.now || (() => Date.now());
  const timeoutMs = options.timeoutMs || 8 * 60 * 1000;
  const signal = options.signal;
  const onProgress = options.onProgress;
  const apiKey = String(options.apiKey || "").trim();
  if (!apiKey) throw new MeshyError("invalid_key");
  const clipped = clipPrompt(prompt);
  if (!clipped.text) throw new MeshyError("bad_request", "empty");
  const shared = { apiKey, fetchImpl, signal, sleep, now, timeoutMs, onProgress };
  onProgress?.({ phase: "submit", progress: 0, status: "PENDING" });
  const previewId = await createTask(
    { mode: "preview", prompt: clipped.text, target_formats: ["glb"], ai_model: "latest" },
    shared,
  );
  const preview = await pollTask(previewId, { ...shared, phase: "preview" });
  let task = preview;
  let textured = false;
  try {
    const refineId = await createTask(
      { mode: "refine", preview_task_id: previewId, enable_pbr: true, target_formats: ["glb"] },
      shared,
    );
    task = await pollTask(refineId, { ...shared, phase: "texture" });
    textured = true;
  } catch (error) {
    if (error instanceof MeshyError && (error.code === "cancelled" || error.code === "invalid_key")) throw error;
    textured = false;
    task = preview;
  }
  const url = glbUrl(task) || glbUrl(preview);
  if (!url) throw new MeshyError("failed", "missing model url");
  onProgress?.({ phase: "download", progress: 100, status: "SUCCEEDED" });
  const blob = await downloadGlb(url, { assetProxy: options.assetProxy || "", fetchImpl, signal });
  return { blob, url, textured, trimmed: clipped.trimmed, previewId };
}
