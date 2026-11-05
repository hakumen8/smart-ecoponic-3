import { Box3, Group, Vector3 } from "three";
import { buildAquaponics, buildClassroom, buildFiltration, buildObject, buildPlumbing, buildRoom, resetEditIds } from "./builders.js";
import { connectPoints } from "./kit.js";

function metricsOf(group) {
  group.updateMatrixWorld(true);
  const box = new Box3().setFromObject(group);
  const size = box.getSize(new Vector3());
  return {
    w: Math.max(size.x, 0.25),
    h: Math.max(size.y, 0.25),
    d: Math.max(size.z, 0.25),
  };
}

function layoutObjects(list, ctx) {
  if (!list?.length) return null;
  const entries = list.map((spec, source) => {
    const count = Math.max(1, spec.count || 1);
    return Array.from({ length: count }, (_, copy) => {
      let group;
      try {
        group = buildObject({ ...spec, count: 1 }, ctx);
      } catch (error) {
        console.error(error);
        group = buildObject({ ...spec, type: "abstract", count: 1 }, ctx);
      }
      group.scale.set((spec.sx || 1) * (spec.scale || 1), (spec.sy || 1) * (spec.scale || 1), spec.scale || 1);
      if (group.userData.edit) group.userData.baseScale = group.scale.clone();
      const metrics = metricsOf(group);
      return { spec, source, copy, group, ...metrics, placed: false };
    });
  }).flat();

  const firstOf = new Map();
  entries.forEach((entry, index) => {
    if (!firstOf.has(entry.source)) firstOf.set(entry.source, index);
  });
  const attached = new Set();
  entries.forEach((entry, index) => {
    const host = entry.spec.slot === "on" || entry.spec.slot === "under" ? entry.spec.on : entry.spec.anchor;
    if (host != null && host !== entry.source && firstOf.has(host)) attached.add(index);
  });

  let cursor = 0;
  for (let i = 0; i < entries.length; ) {
    if (attached.has(i)) {
      i += 1;
      continue;
    }
    const source = entries[i].source;
    let inner = 0;
    let j = i;
    while (j < entries.length && !attached.has(j) && entries[j].source === source) {
      const entry = entries[j];
      entry.group.position.set(cursor + inner + entry.w / 2, 0, 0);
      entry.placed = true;
      inner += entry.w + 0.22;
      j += 1;
    }
    cursor += Math.max(inner - 0.22, 0) + 0.6;
    i = Math.max(j, i + 1);
  }

  const pending = entries.filter((_, index) => attached.has(index));
  let guard = 0;
  while (pending.length && guard++ < 10) {
    for (let k = pending.length - 1; k >= 0; k--) {
      const entry = pending[k];
      const slot = entry.spec.slot || "on";
      const hostSource = slot === "on" || slot === "under" ? entry.spec.on : entry.spec.anchor;
      const host = entries[firstOf.get(hostSource)];
      if (!host?.placed) continue;
      const siblings = entries.filter((other) => {
        const otherSlot = other.spec.slot || "on";
        const otherHost = otherSlot === "on" || otherSlot === "under" ? other.spec.on : other.spec.anchor;
        return otherHost === hostSource && otherSlot === slot;
      });
      const idx = Math.max(0, siblings.indexOf(entry));
      const spread = idx - (siblings.length - 1) / 2;
      const hx = host.group.position.x;
      const hy = host.group.position.y;
      const hz = host.group.position.z;
      if (slot === "on") entry.group.position.set(hx + spread * (entry.w + 0.08), hy + host.h, hz);
      else if (slot === "under") entry.group.position.set(hx + spread * 0.25, hy, hz);
      else if (slot === "inside") {
        entry.group.position.set(hx + spread * 0.12, hy + host.h * 0.42, hz);
        entry.group.scale.multiplyScalar(0.42);
      } else if (slot === "left") entry.group.position.set(hx - host.w / 2 - entry.w / 2 - 0.32 + spread * (entry.w + 0.12), hy, hz);
      else if (slot === "behind") entry.group.position.set(hx, hy, hz - host.d / 2 - entry.d / 2 - 0.28 + spread * 0.2);
      else if (slot === "front") entry.group.position.set(hx, hy, hz + host.d / 2 + entry.d / 2 + 0.28 + spread * 0.2);
      else entry.group.position.set(hx + host.w / 2 + entry.w / 2 + 0.32 + spread * (entry.w + 0.12), hy, hz);
      entry.placed = true;
      pending.splice(k, 1);
    }
  }

  entries.forEach((entry) => {
    if (entry.spec.slot !== "between" || !entry.placed) return;
    const others = entries.filter((other) => other !== entry && other.placed);
    if (others.length < 2) return;
    const a = others[0].group.position;
    const b = others[1].group.position;
    entry.group.position.set((a.x + b.x) / 2, 0, (a.z + b.z) / 2);
  });

  const wrap = new Group();
  wrap.name = "Objects";
  entries.forEach((entry) => wrap.add(entry.group));
  entries.forEach((entry) => {
    if (entry.spec.slot !== "connected" || !entry.placed) return;
    const hostSource = entry.spec.anchor;
    const host = entries[firstOf.get(hostSource)];
    if (!host?.placed) return;
    const a = host.group.position.clone();
    a.y += Math.max(0.25, host.h * 0.45);
    const b = entry.group.position.clone();
    b.y += Math.max(0.25, entry.h * 0.45);
    const mid = a.clone().lerp(b, 0.5);
    mid.y += 0.38;
    connectPoints(wrap, [a, mid, b], { radius: 0.045, color: "#90a4ae", valve: true, valveColor: "#ffb300" });
  });
  return wrap;
}

function center(root) {
  root.updateMatrixWorld(true);
  const box = new Box3().setFromObject(root);
  if (box.isEmpty()) return root;
  const centerV = box.getCenter(new Vector3());
  root.position.x -= centerV.x;
  root.position.z -= centerV.z;
  root.position.y -= box.min.y;
  return root;
}

export function buildSpec(spec, ctx = {}) {
  resetEditIds();
  const view = { ...ctx, interior: !!(ctx.interior || spec.interior) };
  const root = new Group();
  root.name = "MujassamModel";
  if (spec.mode === "filtration") root.add(buildFiltration(spec, view));
  if (spec.mode === "aquaponics") root.add(buildAquaponics(spec, view));
  if (spec.mode === "classroom") root.add(buildClassroom(spec, view));
  if (spec.mode === "room") root.add(buildRoom(spec, view));
  if (spec.mode === "plumbing") root.add(buildPlumbing(spec, view));
  const extras = spec.mode === "room" ? null : layoutObjects(spec.objects || [], view);
  if (extras) {
    root.updateMatrixWorld(true);
    const have = new Box3().setFromObject(root);
    if (!have.isEmpty()) {
      const extraBox = new Box3().setFromObject(extras);
      extras.position.x += have.max.x - extraBox.min.x + 0.7;
    }
    root.add(extras);
  }
  return center(root);
}
