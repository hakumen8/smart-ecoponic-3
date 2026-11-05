/**
 * Optional Cloudflare Worker. Meshy's task API allows this site's browser calls.
 * The GLB file host (assets.meshy.ai) does not send CORS headers, so the page
 * can only read the file after a proxy you control adds them.
 *
 * Deploy, then paste the worker URL into "Optional download proxy URL".
 * The worker receives the signed file URL only. Do not send the API key here.
 */
const ALLOWED_HOST = "assets.meshy.ai";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders() });
    if (request.method !== "GET") return new Response("Method not allowed", { status: 405, headers: corsHeaders() });
    const target = new URL(request.url).searchParams.get("url");
    let parsed;
    try {
      parsed = new URL(target || "");
    } catch {
      parsed = null;
    }
    if (!parsed || parsed.protocol !== "https:" || parsed.hostname !== ALLOWED_HOST) {
      return new Response("Only https://assets.meshy.ai file URLs are allowed", { status: 400, headers: corsHeaders() });
    }
    const upstream = await fetch(parsed, { redirect: "follow" });
    const headers = new Headers(corsHeaders());
    headers.set("Content-Type", upstream.headers.get("Content-Type") || "model/gltf-binary");
    headers.set("Cache-Control", "private, max-age=300");
    return new Response(upstream.body, { status: upstream.status, headers });
  },
};
