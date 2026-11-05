import {
  BoxGeometry,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  InstancedMesh,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  Shape,
} from "three";
import { metalMaterial, paint, windowGlass } from "./materials.js";

export const OPEN_START = Math.PI * 0.18;
export const OPEN_SWEEP = Math.PI * 1.58;

export function showInside(spec, ctx) {
  return !!(ctx?.interior || spec?.cutaway);
}

function piece(geo, mat, x = 0, y = 0, z = 0) {
  const mesh = new Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = !(mat && (mat.transmission > 0 || mat.transparent));
  mesh.receiveShadow = true;
  return mesh;
}

export function cylinderBody(radiusTop, radiusBottom, height, mat, open, segs = 36) {
  const geo = new CylinderGeometry(
    radiusTop,
    radiusBottom,
    Math.max(height, 0.02),
    segs,
    1,
    false,
    open ? OPEN_START : 0,
    open ? OPEN_SWEEP : Math.PI * 2,
  );
  if (open && mat) mat.side = DoubleSide;
  return piece(geo, mat);
}

export function addCutCaps(group, radius, height, y, mat) {
  if (!mat) return;
  mat.side = DoubleSide;
  for (const angle of [OPEN_START, OPEN_START + OPEN_SWEEP]) {
    const face = piece(new PlaneGeometry(Math.max(radius, 0.02), Math.max(height, 0.02)), mat);
    face.position.set(Math.sin(angle) * radius * 0.5, y, Math.cos(angle) * radius * 0.5);
    face.rotation.y = Math.atan2(Math.cos(angle), -Math.sin(angle));
    group.add(face);
  }
}

export function addFacadeWindows(group, {
  floors,
  cols,
  width,
  depth,
  floorH,
  yBase,
  openFront = false,
  doorSpan = 1,
}) {
  const paneW = Math.min(0.2, (width / cols) * 0.46);
  const paneH = Math.min(0.16, floorH * 0.42);
  const glass = windowGlass("#e5f3ff");
  const frameMat = new MeshStandardMaterial({ color: "#172026", metalness: 0.42, roughness: 0.36 });
  const mullion = new MeshStandardMaterial({ color: "#d7dde2", metalness: 0.25, roughness: 0.4 });
  const items = [];
  let doorCol = -1;
  if (doorSpan > 0) {
    const mid = (cols - 1) / 2;
    let best = 1e9;
    for (let c = 0; c < cols; c++) {
      const dist = Math.abs(c - mid);
      if (dist < best) {
        best = dist;
        doorCol = c;
      }
    }
  }
  for (let f = 0; f < floors; f++) {
    for (let c = 0; c < cols; c++) {
      const x = -width / 2 + (c + 0.5) * (width / cols);
      const y = yBase + f * floorH + floorH * 0.62;
      const door = f === 0 && c === doorCol;
      if (!door && !openFront) items.push([x, y, depth / 2 + 0.06, 0]);
      if (!door) items.push([x, y, -depth / 2 - 0.06, Math.PI]);
    }
    const y = yBase + f * floorH + floorH * 0.62;
    items.push([width / 2 + 0.06, y, 0, Math.PI / 2]);
    items.push([-width / 2 - 0.06, y, 0, -Math.PI / 2]);
  }
  if (!items.length) return;
  const count = items.length;
  const frames = new InstancedMesh(new BoxGeometry(paneW + 0.035, paneH + 0.035, 0.03), frameMat, count);
  const panes = new InstancedMesh(new BoxGeometry(paneW, paneH, 0.016), glass, count);
  const barsV = new InstancedMesh(new BoxGeometry(0.012, paneH, 0.02), mullion, count);
  const barsH = new InstancedMesh(new BoxGeometry(paneW, 0.012, 0.02), mullion, count);
  const sills = new InstancedMesh(new BoxGeometry(paneW + 0.06, 0.02, 0.05), frameMat, count);
  const dummy = new Object3D();
  const place = (x, y, z, ry, out) => {
    dummy.position.set(x + Math.sin(ry) * out, y, z + Math.cos(ry) * out);
    dummy.rotation.set(0, ry, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
  };
  items.forEach(([x, y, z, ry], index) => {
    place(x, y, z, ry, 0);
    frames.setMatrixAt(index, dummy.matrix);
    place(x, y, z, ry, 0.012);
    panes.setMatrixAt(index, dummy.matrix);
    barsV.setMatrixAt(index, dummy.matrix);
    place(x, y, z, ry, 0.016);
    barsH.setMatrixAt(index, dummy.matrix);
    place(x, y - paneH * 0.62, z, ry, 0.01);
    sills.setMatrixAt(index, dummy.matrix);
  });
  for (const mesh of [frames, panes, barsV, barsH, sills]) {
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = mesh !== panes;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
}

export function addEntryDoor(group, { x = 0, z = 0, yaw = 0, width = 0.34, height = 0.62, material, color } = {}) {
  const wood = paint({ material: material || "wood", color: color || "#6d4c41" }, "#6d4c41", "wood");
  const frame = paint({}, "#3e2723", "wood");
  const door = new Group();
  door.add(piece(new BoxGeometry(width + 0.08, height + 0.08, 0.05), frame, 0, height / 2, 0));
  door.add(piece(new BoxGeometry(width, height, 0.04), wood, 0, height / 2, 0.02));
  door.add(piece(new BoxGeometry(width * 0.72, height * 0.28, 0.02), paint({}, "#5d4037", "wood"), 0, height * 0.28, 0.045));
  door.add(piece(new BoxGeometry(width * 0.72, height * 0.28, 0.02), paint({}, "#5d4037", "wood"), 0, height * 0.68, 0.045));
  door.add(piece(new BoxGeometry(width * 0.36, height * 0.18, 0.015), windowGlass("#d7ecff"), 0, height * 0.84, 0.05));
  const knob = piece(new CylinderGeometry(0.018, 0.018, 0.03, 10), metalMaterial("#d4af37", 1, 0.25), width * 0.32, height * 0.48, 0.05);
  knob.rotation.x = Math.PI / 2;
  door.add(knob);
  door.position.set(x, 0, z);
  door.rotation.y = yaw;
  group.add(door);
  return door;
}

export function addShellInterior(group, { floors, floorH, width, depth, yBase, school = false }) {
  const slabMat = new MeshStandardMaterial({ color: "#efe8dc", roughness: 0.86 });
  const wood = paint({}, "#c4a574", "wood");
  const limit = Math.min(floors, 8);
  for (let f = 0; f < limit; f++) {
    group.add(piece(new BoxGeometry(width * 0.9, 0.045, depth * 0.82), f === 0 ? wood : slabMat, 0, yBase + f * floorH + 0.03, -0.02));
  }
  const steps = Math.min(6, Math.max(3, floors));
  for (let i = 0; i < steps; i++) {
    group.add(piece(
      new BoxGeometry(0.28, 0.06, 0.16),
      slabMat,
      width * 0.28,
      yBase + 0.05 + i * (floorH * 0.45) / steps,
      -depth * 0.22 + i * 0.1,
    ));
  }
  group.add(piece(new BoxGeometry(0.46, 0.035, 0.28), wood, -width * 0.16, yBase + 0.1, 0.02));
  group.add(piece(new BoxGeometry(0.05, 0.16, 0.05), wood, -width * 0.16, yBase + 0.16, -0.1));
  group.add(piece(new BoxGeometry(0.22, 0.16, 0.22), school ? paint({}, "#1565c0", "plastic") : paint({}, "#607d8b", "fabric"), -width * 0.16, yBase + 0.2, 0.16));
  if (school) {
    group.add(piece(new BoxGeometry(width * 0.46, floorH * 0.38, 0.02), paint({}, "#f7f9fb"), 0, yBase + floorH * 0.62, -depth * 0.38));
    group.add(piece(new BoxGeometry(width * 0.42, floorH * 0.3, 0.01), paint({}, "#e3f2fd"), 0, yBase + floorH * 0.62, -depth * 0.36));
  }
  const lamp = piece(new BoxGeometry(0.28, 0.03, 0.08), new MeshStandardMaterial({ color: "#fff8e1", emissive: "#ffe082", emissiveIntensity: 0.8 }), 0, yBase + floorH * 0.92, 0);
  group.add(lamp);
}

export function buildGearGroup(spec) {
  const teeth = 12;
  const shape = new Shape();
  const outer = 0.46;
  const root = 0.32;
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const step = (Math.PI * 2) / teeth;
    const pts = [
      [a0, root],
      [a0 + step * 0.18, outer],
      [a0 + step * 0.48, outer],
      [a0 + step * 0.66, root],
    ];
    pts.forEach(([a, r], index) => {
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0 && index === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
  }
  shape.closePath();
  const geo = new ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.01, bevelSegments: 1 });
  geo.center();
  const mat = paint(spec, "#90a4ae", spec.material || "metal");
  const group = new Group();
  const disc = piece(geo, mat, 0, 0.16, 0);
  disc.rotation.x = Math.PI / 2;
  group.add(disc);
  group.add(piece(new CylinderGeometry(0.1, 0.1, 0.14, 20), metalMaterial("#eceff1", 0.8, 0.25), 0, 0.16, 0));
  group.add(piece(new CylinderGeometry(0.045, 0.045, 0.16, 14), metalMaterial("#37474f", 0.7, 0.35), 0, 0.16, 0));
  const small = piece(new CylinderGeometry(0.16, 0.16, 0.08, 16), mat, 0.52, 0.14, 0);
  group.add(small);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    group.add(piece(new BoxGeometry(0.06, 0.09, 0.06), mat, 0.52 + Math.cos(a) * 0.18, 0.14, Math.sin(a) * 0.18));
  }
  return group;
}
