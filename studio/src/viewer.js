import {
  ACESFilmicToneMapping,
  BackSide,
  Box3,
  CanvasTexture,
  CircleGeometry,
  Clock,
  Color,
  DirectionalLight,
  Fog,
  GridHelper,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MOUSE,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Raycaster,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  TOUCH,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { OBJExporter } from "three/addons/exporters/OBJExporter.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const LIGHTS = {
  studio: {
    bg: "#0b1020",
    hemiSky: "#d7e6ff",
    hemiGround: "#1a2033",
    hemi: 0.62,
    key: "#ffffff",
    keyI: 3.4,
    fill: "#8eb6ff",
    fillI: 0.85,
    rim: "#c4b5fd",
    rimI: 1,
    skyTop: "#35558a",
    skyMid: "#1a2744",
    floor: "#1a2333",
    pad: "#243044",
  },
  day: {
    bg: "#c5d7ef",
    hemiSky: "#fff7ea",
    hemiGround: "#8aa0b8",
    hemi: 0.85,
    key: "#fff1d0",
    keyI: 3.8,
    fill: "#c5d8ff",
    fillI: 1,
    rim: "#ffe0b2",
    rimI: 0.55,
    skyTop: "#7eb6ff",
    skyMid: "#d5e6f8",
    floor: "#c9d5bf",
    pad: "#e4ecda",
  },
  sunset: {
    bg: "#2a1630",
    hemiSky: "#ffb07a",
    hemiGround: "#241428",
    hemi: 0.5,
    key: "#ff9a62",
    keyI: 2.8,
    fill: "#7e57c2",
    fillI: 0.7,
    rim: "#ff7043",
    rimI: 1.25,
    skyTop: "#ff8f62",
    skyMid: "#3a2040",
    floor: "#2c1d2c",
    pad: "#3d2a38",
  },
  night: {
    bg: "#070b16",
    hemiSky: "#9ec9ff",
    hemiGround: "#10131c",
    hemi: 0.32,
    key: "#d6e4ff",
    keyI: 1.35,
    fill: "#3949ab",
    fillI: 0.45,
    rim: "#5ad1ff",
    rimI: 0.85,
    skyTop: "#10203c",
    skyMid: "#070b16",
    floor: "#0d121c",
    pad: "#161d2b",
  },
};

function disposeObject(object) {
  const materials = new Set();
  object.traverse((node) => {
    if (node.geometry) node.geometry.dispose();
    const mats = node.material ? [].concat(node.material) : [];
    mats.forEach((mat) => materials.add(mat));
  });
  materials.forEach((mat) => mat.dispose());
}

export class Viewer {
  constructor(container) {
    this.container = container;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(42, 1, 0.08, 180);
    this.camera.position.set(4.4, 2.5, 6.4);
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    this.pixelCap = 2;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.pixelCap));
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.domElement.style.touchAction = "none";
    this.renderer.domElement.setAttribute("aria-label", "3D viewport");
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.rotateSpeed = 0.85;
    this.controls.zoomSpeed = 1.05;
    this.controls.panSpeed = 0.85;
    this.controls.screenSpacePanning = true;
    this.controls.zoomToCursor = true;
    this.controls.minDistance = 0.6;
    this.controls.maxDistance = 40;
    this.controls.maxPolarAngle = Math.PI * 0.92;
    this.controls.minPolarAngle = 0.08;
    this.controls.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };
    this.controls.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };

    this.hemi = new HemisphereLight("#d7e6ff", "#1a2033", 0.55);
    this.key = new DirectionalLight("#ffffff", 3.1);
    this.key.position.set(5, 9, 4);
    this.key.castShadow = true;
    this.key.shadow.mapSize.set(2048, 2048);
    this.key.shadow.bias = -0.00025;
    this.key.shadow.normalBias = 0.028;
    this.key.shadow.radius = 2.5;
    const shadow = this.key.shadow.camera;
    shadow.near = 0.4;
    shadow.far = 40;
    shadow.left = -8;
    shadow.right = 8;
    shadow.top = 8;
    shadow.bottom = -8;
    this.fill = new DirectionalLight("#8eb6ff", 0.7);
    this.fill.position.set(-6, 3, -2);
    this.rim = new DirectionalLight("#c4b5fd", 0.85);
    this.rim.position.set(-2, 4, -6);
    this.scene.add(this.hemi, this.key, this.key.target, this.fill, this.rim);

    this.ground = new Mesh(
      new CircleGeometry(22, 64),
      new MeshStandardMaterial({ color: "#151b27", roughness: 0.96, metalness: 0.02 }),
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.ground.position.y = -0.012;
    this.pad = new Mesh(
      new CircleGeometry(3.4, 48),
      new MeshStandardMaterial({ color: "#1d2636", roughness: 0.88, metalness: 0.04 }),
    );
    this.pad.rotation.x = -Math.PI / 2;
    this.pad.receiveShadow = true;
    this.pad.position.y = -0.004;
    this.skyCanvas = document.createElement("canvas");
    this.skyCanvas.width = 8;
    this.skyCanvas.height = 256;
    this.skyTex = new CanvasTexture(this.skyCanvas);
    this.skyTex.colorSpace = SRGBColorSpace;
    this.sky = new Mesh(
      new SphereGeometry(90, 28, 18),
      new MeshBasicMaterial({ map: this.skyTex, side: BackSide, depthWrite: false, fog: false }),
    );
    this.grid = new GridHelper(20, 20, 0x5ad1ff, 0x243049);
    this.grid.position.y = 0.001;
    this.scene.add(this.sky, this.ground, this.pad, this.grid);
    this.raycaster = new Raycaster();
    this.pointer = new Vector2();
    this.highlighted = null;

    this.model = new Group();
    this.scene.add(this.model);

    const pmrem = new PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    this.clock = new Clock();
    this.labelsOn = true;
    this.wireOn = false;
    this.flowLive = false;
    this.shadowsOn = true;
    this.intensity = 1;
    this.lightName = "studio";
    this.autoBg = true;
    this.homePos = this.camera.position.clone();
    this.homeTarget = new Vector3();
    this.fly = null;

    this.setLighting("studio");
    this.resize();
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(container);
    this.renderer.setAnimationLoop(() => this.tick());
  }

  resize() {
    const { clientWidth, clientHeight } = this.container;
    if (!clientWidth || !clientHeight) return;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight, false);
  }

  paintSky(top, mid, bottom) {
    const ctx = this.skyCanvas.getContext("2d");
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, top);
    grad.addColorStop(0.42, mid);
    grad.addColorStop(1, bottom);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 8, 256);
    this.skyTex.needsUpdate = true;
  }

  setBackground(hex, fromPreset = false) {
    if (!fromPreset) this.autoBg = false;
    this.bg = hex;
    this.scene.background = new Color(hex);
    this.scene.fog = new Fog(hex, 24, 68);
    if (!fromPreset) this.paintSky(hex, hex, hex);
  }

  setLighting(name) {
    const preset = LIGHTS[name] || LIGHTS.studio;
    this.lightName = LIGHTS[name] ? name : "studio";
    this.hemi.color.set(preset.hemiSky);
    this.hemi.groundColor.set(preset.hemiGround);
    this.hemi.intensity = preset.hemi;
    this.key.color.set(preset.key);
    this.fill.color.set(preset.fill);
    this.fill.intensity = preset.fillI;
    this.rim.color.set(preset.rim);
    this.rim.intensity = preset.rimI;
    this.baseKey = preset.keyI;
    this.key.intensity = preset.keyI * this.intensity;
    this.autoBg = true;
    this.paintSky(preset.skyTop || preset.bg, preset.skyMid || preset.bg, preset.bg);
    if (this.ground) this.ground.material.color.set(preset.floor || preset.bg);
    if (this.pad) this.pad.material.color.set(preset.pad || preset.floor || preset.bg);
    this.setBackground(preset.bg, true);
    return preset.bg;
  }

  setQuality(mode) {
    const fast = mode === "fast";
    this.quality = fast ? "fast" : "high";
    this.pixelCap = fast ? 1.25 : 2;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.pixelCap));
    const size = fast ? 1024 : 2048;
    if (this.key.shadow.map) {
      this.key.shadow.map.dispose();
      this.key.shadow.map = null;
    }
    this.key.shadow.mapSize.set(size, size);
    this.key.shadow.radius = fast ? 1 : 3;
    this.resize();
  }

  setIntensity(value) {
    this.intensity = value;
    this.key.intensity = this.baseKey * value;
  }

  setShadows(on) {
    this.shadowsOn = on;
    this.renderer.shadowMap.enabled = on;
    this.key.castShadow = on;
  }

  setGrid(on) {
    this.grid.visible = on;
  }

  setAutoRotate(on) {
    this.controls.autoRotate = on;
    this.controls.autoRotateSpeed = 0.9;
  }

  setWireframe(on) {
    this.wireOn = on;
    this.model.traverse((node) => {
      if (!node.isMesh) return;
      [].concat(node.material || []).forEach((mat) => {
        if (mat && "wireframe" in mat) mat.wireframe = on;
      });
    });
  }

  setFlowLive(on) {
    this.flowLive = !!on;
  }

  setLabels(on) {
    this.labelsOn = on;
    this.model.traverse((node) => {
      if (node.userData?.isLabel) node.visible = on;
    });
  }

  hasModel() {
    return this.model.children.length > 0;
  }

  clear() {
    this.highlighted = null;
    for (const child of [...this.model.children]) {
      this.model.remove(child);
      disposeObject(child);
    }
  }

  setModel(object) {
    this.clear();
    this.model.add(object);
    object.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = !(node.material && node.material.transmission > 0);
        node.receiveShadow = true;
      }
      if (node.userData?.isLabel) node.visible = this.labelsOn;
    });
    if (this.wireOn) this.setWireframe(true);
    this.frame(false);
  }

  frame(animate = false) {
    const box = new Box3().setFromObject(this.model);
    if (box.isEmpty()) return;
    const size = box.getSize(new Vector3());
    const target = box.getCenter(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z, 0.6);
    const dist = (maxDim / (2 * Math.tan((this.camera.fov * Math.PI) / 360))) * 1.38;
    const pos = new Vector3(target.x + dist * 0.72, target.y + Math.max(size.y * 0.35, dist * 0.38), target.z + dist * 0.95);
    this.homePos.copy(pos);
    this.homeTarget.copy(target);
    const span = Math.max(8, maxDim * 2);
    if (this.pad) this.pad.scale.setScalar(Math.max(1, Math.max(size.x, size.z) / 2.4));
    const cam = this.key.shadow.camera;
    cam.left = -span;
    cam.right = span;
    cam.top = span;
    cam.bottom = -span;
    cam.updateProjectionMatrix();
    this.key.position.set(target.x + span * 0.45, target.y + span * 0.8, target.z + span * 0.3);
    this.key.target.position.copy(target);
    this.key.target.updateMatrixWorld();
    if (animate) this.flyTo(pos, target);
    else {
      this.fly = null;
      this.camera.position.copy(pos);
      this.controls.target.copy(target);
      this.controls.update();
    }
  }

  resetCamera() {
    this.flyTo(this.homePos, this.homeTarget);
  }

  flyTo(pos, target) {
    this.fly = {
      fromP: this.camera.position.clone(),
      fromT: this.controls.target.clone(),
      toP: pos.clone(),
      toT: target.clone(),
      t: 0,
    };
  }

  tick() {
    const t = this.clock.getElapsedTime();
    const dt = t - (this.prevTime || 0);
    this.prevTime = t;
    if (this.fly) {
      this.fly.t = Math.min(1, this.fly.t + dt * 2.2);
      const k = 1 - (1 - this.fly.t) ** 3;
      this.camera.position.lerpVectors(this.fly.fromP, this.fly.toP, k);
      this.controls.target.lerpVectors(this.fly.fromT, this.fly.toT, k);
      if (this.fly.t >= 1) this.fly = null;
    }
    this.model.traverse((node) => {
      node.userData?.tick?.(t, node);
      node.userData?.flowTick?.(t, this.flowLive);
      if (node.userData?.isLabel) node.lookAt(this.camera.position);
    });
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  stats() {
    let meshes = 0;
    let tris = 0;
    this.model.traverse((node) => {
      if (!node.isMesh || !node.geometry) return;
      meshes += 1;
      const geo = node.geometry;
      const count = geo.index ? geo.index.count / 3 : geo.attributes.position.count / 3;
      tris += count * (node.isInstancedMesh ? node.count : 1);
    });
    return { meshes, tris: Math.round(tris) };
  }

  screenshot({ scale = 2, transparent = false } = {}) {
    const ratio = this.renderer.getPixelRatio();
    const prev = {
      background: this.scene.background,
      fog: this.scene.fog,
      grid: this.grid.visible,
      ground: this.ground.visible,
      pad: this.pad.visible,
      sky: this.sky.visible,
    };
    if (transparent) {
      this.scene.background = null;
      this.scene.fog = null;
      this.grid.visible = false;
      this.ground.visible = false;
      this.pad.visible = false;
      this.sky.visible = false;
      this.renderer.setClearColor(0x000000, 0);
    }
    const edge = Math.max(this.container.clientWidth || 1, this.container.clientHeight || 1);
    const pixelRatio = Math.min(scale, 4096 / edge);
    this.renderer.setPixelRatio(Math.max(1, pixelRatio));
    this.resize();
    this.renderer.render(this.scene, this.camera);
    const url = this.renderer.domElement.toDataURL("image/png");
    this.scene.background = prev.background;
    this.scene.fog = prev.fog;
    this.grid.visible = prev.grid;
    this.ground.visible = prev.ground;
    this.pad.visible = prev.pad;
    this.sky.visible = prev.sky;
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setPixelRatio(ratio);
    this.resize();
    return url;
  }

  parts() {
    const list = [];
    this.model.traverse((node) => {
      if (node.userData?.edit) list.push(node);
    });
    return list;
  }

  pick(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObject(this.model, true);
    for (const hit of hits) {
      let node = hit.object;
      while (node && node !== this.model) {
        if (node.userData?.edit) return node;
        node = node.parent;
      }
    }
    return null;
  }

  clearHighlight() {
    if (!this.highlighted) return;
    this.highlighted.traverse((node) => {
      if (!node.isMesh) return;
      [].concat(node.material || []).forEach((mat) => {
        if (!mat?.emissive || !mat.userData?.picked) return;
        mat.emissive.copy(mat.userData.pickEm);
        mat.emissiveIntensity = mat.userData.pickEi;
        mat.userData.picked = false;
      });
    });
    this.highlighted = null;
  }

  highlight(group) {
    this.clearHighlight();
    if (!group) return;
    this.highlighted = group;
    group.traverse((node) => {
      if (!node.isMesh || node.userData?.isLabel || node.userData?.flowBead) return;
      [].concat(node.material || []).forEach((mat) => {
        if (!mat?.emissive) return;
        mat.userData.pickEm = mat.emissive.clone();
        mat.userData.pickEi = mat.emissiveIntensity || 0;
        mat.userData.picked = true;
        mat.emissive.set("#0f6e5c");
        mat.emissiveIntensity = Math.max(0.22, mat.userData.pickEi);
      });
    });
  }

  setPartColor(group, hex) {
    const color = new Color(hex);
    group.traverse((node) => {
      if (!node.isMesh || node.userData?.isLabel || node.userData?.flowBead || node.userData?.isFlowArrow || node.userData?.flowStream) return;
      [].concat(node.material || []).forEach((mat) => {
        if (!mat?.color || mat.userData?.locked) return;
        mat.color.copy(color);
      });
    });
    if (group.userData.edit) group.userData.edit.color = hex;
  }

  setPartScale(group, factor) {
    const base = group.userData.baseScale || group.scale.clone();
    group.userData.baseScale = base;
    const next = Math.max(0.4, Math.min(2.4, Number(factor) || 1));
    group.scale.set(base.x * next, base.y * next, base.z * next);
    if (group.userData.edit) group.userData.edit.factor = next;
  }

  async exportGLB() {
    const exporter = new GLTFExporter();
    const bin = await exporter.parseAsync(this.model, { binary: true });
    return new Blob([bin], { type: "model/gltf-binary" });
  }

  exportOBJ() {
    const text = new OBJExporter().parse(this.model);
    return new Blob([text], { type: "text/plain" });
  }
}

export async function loadGltf(file) {
  const url = URL.createObjectURL(file);
  try {
    const gltf = await new GLTFLoader().loadAsync(url);
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    return gltf.scene;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export { LIGHTS };
