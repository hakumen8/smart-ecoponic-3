import assert from "node:assert/strict";
import test from "node:test";
import { clipPrompt, downloadGlb, generateTextTo3D, isMeshyAssetUrl, MeshyError, proxyRequestUrl } from "./src/text3d.js";

const GLB = "https://assets.meshy.ai/tasks/abc/output/model.glb?Expires=1&Signature=x&Key-Pair-Id=K";

function jsonResponse(body, status = 200, headers = {}) {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: { get: (name) => headers[name.toLowerCase()] || null },
    json: async () => body,
    blob: async () => body,
  };
}

test("clips prompts to Meshy's limit and only trusts asset hosts", () => {
  assert.equal(clipPrompt("a".repeat(900)).text.length, 800);
  assert.equal(clipPrompt("a".repeat(900)).trimmed, true);
  assert.equal(isMeshyAssetUrl(GLB), true);
  assert.equal(isMeshyAssetUrl("https://example.com/model.glb"), false);
  assert.equal(proxyRequestUrl("https://proxy.example/meshy", GLB).includes(encodeURIComponent(GLB)), true);
});

test("maps an invalid key and a failed job", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    if (init?.method === "POST") return jsonResponse({ message: "Invalid API key" }, 401);
    return jsonResponse({ status: "FAILED", progress: 40, task_error: { message: "boom" } });
  };
  await assert.rejects(
    () => generateTextTo3D("a red cube", { apiKey: "msy_test", fetchImpl, sleep: async () => {}, now: () => 0, timeoutMs: 10 }),
    (error) => error instanceof MeshyError && error.code === "invalid_key",
  );
  const fetchFail = async (url, init) => {
    if (init?.method === "POST") return jsonResponse({ result: "task-1" });
    return jsonResponse({ status: "FAILED", progress: 10, task_error: { message: "boom" } });
  };
  await assert.rejects(
    () => generateTextTo3D("a red cube", { apiKey: "msy_test", fetchImpl: fetchFail, sleep: async () => {}, now: () => 0 }),
    (error) => error instanceof MeshyError && error.code === "failed",
  );
});

test("polls preview and refine, then downloads the GLB", async () => {
  let polls = 0;
  const fetchImpl = async (url, init) => {
    if (init?.method === "POST") {
      const body = JSON.parse(init.body);
      return jsonResponse({ result: body.mode === "preview" ? "preview-1" : "refine-1" });
    }
    if (String(url).includes("/preview-1") || String(url).endsWith("/preview-1")) {
      polls += 1;
      if (polls === 1) return jsonResponse({ status: "IN_PROGRESS", progress: 40 }, 200, { "retry-after": "1" });
      return jsonResponse({ status: "SUCCEEDED", progress: 100, model_urls: { glb: GLB } });
    }
    if (String(url).includes("refine-1")) return jsonResponse({ status: "SUCCEEDED", progress: 100, model_urls: { glb: GLB } });
    return { ok: true, status: 200, headers: { get: () => null }, blob: async () => new Blob([new Uint8Array(64)]) };
  };
  const phases = [];
  const result = await generateTextTo3D("a small house", {
    apiKey: "msy_test",
    fetchImpl,
    sleep: async () => {},
    now: (() => {
      let t = 0;
      return () => (t += 1000);
    })(),
    onProgress: (event) => phases.push(event.phase),
  });
  assert.equal(result.textured, true);
  assert.ok(result.blob.size >= 32);
  assert.ok(phases.includes("preview"));
  assert.ok(phases.includes("texture"));
});

test("uses the proxy when the asset host blocks the browser", async () => {
  const fetchImpl = async (url) => {
    if (String(url).startsWith("https://assets.meshy.ai")) throw new TypeError("Failed to fetch");
    assert.match(String(url), /proxy\.example/);
    return { ok: true, status: 200, headers: { get: () => null }, blob: async () => new Blob([new Uint8Array(40)]) };
  };
  const blob = await downloadGlb(GLB, { assetProxy: "https://proxy.example/asset", fetchImpl });
  assert.ok(blob.size >= 32);
  await assert.rejects(() => downloadGlb(GLB, { fetchImpl }), (error) => error instanceof MeshyError && error.code === "cors");
});

test("times out a task that never finishes", async () => {
  const fetchImpl = async (url, init) => {
    if (init?.method === "POST") return jsonResponse({ result: "slow" });
    return jsonResponse({ status: "IN_PROGRESS", progress: 5 });
  };
  await assert.rejects(
    () =>
      generateTextTo3D("cube", {
        apiKey: "msy_test",
        fetchImpl,
        sleep: async () => {},
        now: (() => {
          let t = 0;
          return () => (t += 5000);
        })(),
        timeoutMs: 6000,
      }),
    (error) => error instanceof MeshyError && error.code === "timeout",
  );
});
