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

export function rememberPrompt(text) {
  const value = String(text || "").trim();
  if (!value) return loadState().history || [];
  const history = [value, ...(loadState().history || []).filter((item) => item !== value)].slice(0, 3);
  saveState({ history });
  return history;
}

export function loadFavorites() {
  const list = loadState().favorites;
  return Array.isArray(list) ? list : [];
}

export function saveFavorite(entry) {
  const favorites = [entry, ...loadFavorites().filter((item) => item.prompt !== entry.prompt)].slice(0, 16);
  try {
    saveState({ favorites });
  } catch {
    const slim = favorites.map((item) => {
      const next = { ...item };
      delete next.thumbnail;
      return next;
    });
    saveState({ favorites: slim });
  }
  return loadFavorites();
}

export function removeFavorite(id) {
  const favorites = loadFavorites().filter((item) => item.id !== id);
  saveState({ favorites });
  return favorites;
}
