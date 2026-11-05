/** Shared quality switch. Fast mode simplifies glass, shadows, and heavy meshes for iPad. */

let mode = "high";

export function setQualityMode(next) {
  mode = next === "fast" ? "fast" : "high";
  return mode;
}

export function qualityMode() {
  return mode;
}

export function isFast() {
  return mode === "fast";
}

export function seg(high, fast) {
  return mode === "fast" ? fast : high;
}

export function detectFastDevice() {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const touch = navigator.maxTouchPoints || 0;
  const iPad = /iPad/.test(ua) || (platform === "MacIntel" && touch > 1);
  const iPhone = /iPhone|iPod/.test(ua);
  const androidTablet = /Android/i.test(ua) && !/Mobile/i.test(ua);
  return iPad || iPhone || androidTablet;
}
