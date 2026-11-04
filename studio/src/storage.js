const KEY = "mujassam.studio.v1";

export function loadState() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function saveState(patch) {
  const next = { ...loadState(), ...patch };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearPrompt() {
  const next = loadState();
  delete next.prompt;
  delete next.presetId;
  localStorage.setItem(KEY, JSON.stringify(next));
}
