# Mujassam 3D Studio · استوديو مجسّم

Bilingual text-to-3D studio for GitHub Pages: [https://hakumen8.github.io/smart-ecoponic-3/](https://hakumen8.github.io/smart-ecoponic-3/)

Describe a model in Arabic or English. The page builds it in the browser with Three.js, then you can orbit it and download **GLB**, **OBJ**, or **PNG**.

## How generation works

There is no cloud text-to-3D call. A procedural parser reads the sentence (Arabic and English shapes, counts, colors, materials, floors, and relations such as “on”) and assembles meshes: primitives, vehicles, buildings, and multi-part systems.

The filtration preset is a cutaway water filter: glass tanks, a layered media column (sponge, sand, charcoal, gravel, and others), pipes, a pump, and moving flow markers. Aquaponics builds a fish tank, grow bed, biofilter, and pump.

Hunyuan3D, Tripo, Meshy, and similar mesh APIs are **not** wired in. They need an account API key and a backend (browsers cannot call them directly because of CORS, and this repo does not store secrets). No API key is included. To add one later, proxy the vendor from your own server and load the returned GLB with the existing file button.

## Pages

The live site is the repository root (`index.html`, `assets/`, `.nojekyll`). Paths are relative. Source for the studio lives in `studio/`.

```bash
cd studio
npm install
npm test
npm run dev
npm run build
```

Copy `studio/dist/index.html` and `studio/dist/assets/` to the repository root before pushing `main` so GitHub Pages updates.

## Controls

- Language toggle switches every interface string, the examples, and the gallery. The layout is RTL in Arabic and LTR in English.
- Reset camera, orbit / pinch-zoom / two-finger pan, auto-rotate, wireframe, labels, grid, fullscreen.
- Background color, lighting preset, intensity, and shadows.
- The last description and these view settings are stored in `localStorage` (`mujassam.studio.v1`).
