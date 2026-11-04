import {
  ACESFilmicToneMapping,
  Box3,
  Clock,
  Color,
  DirectionalLight,
  Fog,
  GridHelper,
  Group,
  HemisphereLight,
  Mesh,
  MOUSE,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  ShadowMaterial,
  CircleGeometry,
  SRGBColorSpace,
  TOUCH,
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
    hemi: 0.55,
    key: "#ffffff",
    keyI: 3.1,
    fill: "#8eb6ff",
    fillI: 0.7,
    rim: "#c4b5fd",
    rimI: 0.85,
  },
  day: {
    bg: "#c5d7ef",
    hemiSky: "#fff7ea",
    hemiGround: "#8aa0b8",
    hemi: 0.75,
    key: "#fff1d0",
    keyI: 3.6,
    fill: "#c5d8ff",
    fillI: 0.9,
    rim: "#ffe0b2",
    rimI: 0.45,
  },
  sunset: {
    bg: "#2a1630",
    hemiSky: "#ffb07a",
    hemiGround: "#241428",
    hemi: 0.45,
    key: "#ff9a62",
    keyI: 2.6,
    fill: "#7e57c2",
    fillI: 0.55,
    rim: "#ff7043",
    rimI: 1.15,
  },
  night: {
    bg: "#070b16",
    hemiSky: "#9ec9ff",
    hemiGround: "#10131c",
    hemi: 0.25,
    key: "#d6e4ff",
    keyI: 1.15,
    fill: "#3949ab",
    fillI: 0.35,
    rim: "#5ad1ff",
    rimI: 0.7,
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
    this.camera = new PerspectiveCamera(42, 1, 0.08, 80);
    this.camera.position.set(4.4, 2.5, 6.4);
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
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
    this.key.shadow.bias = -0.0004;
    this.key.shadow.normalBias = 0.02;
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

    this.ground = new Mesh(new CircleGeometry(24, 64), new ShadowMaterial({ opacity: 0.38 }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.ground.position.y = 0;
    this.grid = new GridHelper(20, 20, 0x5ad1ff, 0x243049);
    this.grid.position.y = 0.001;
    this.scene.add(this.ground, this.grid);

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

  setBackground(hex, fromPreset = false) {
    if (!fromPreset) this.autoBg = false;
    this.bg = hex;
    this.scene.background = new Color(hex);
    this.scene.fog = new Fog(hex, 16, 42);
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
    this.setBackground(preset.bg, true);
    return preset.bg;
  }

  setIntensity(value) {
    this.intensity = value;
    this.key.intensity = this.baseKey * value;
  }

  setShadows(on) {
    this.shadowsOn = on;
    this.renderer.shadowMap.enabled = on;
    this.key.castShadow = on;
    this.ground.visible = on;
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

  screenshot() {
    const ratio = this.renderer.getPixelRatio();
    this.renderer.setPixelRatio(Math.min(2.5, (window.devicePixelRatio || 1) * 1.5));
    this.resize();
    this.renderer.render(this.scene, this.camera);
    const url = this.renderer.domElement.toDataURL("image/png");
    this.renderer.setPixelRatio(ratio);
    this.resize();
    return url;
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
