import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.fbx",
    "**/*.usdz",
    "**/*.stl",
    "**/*.drc",
    "**/*.FBX",
    "**/*.dae"
  ],
  build: {
    rollupOptions: {
      external: ["moment"]
    }
  },
  resolve: {
    // Add the file extensions you want to handle
    extensions: [
      ".fbx",
      ".gltf",
      ".obj",
      ".dae",
      ".drc",
      ".mjs",
      ".js",
      ".jsx",
      ".json"
    ]
  },
  optimizeDeps: {
    // Include any necessary loaders as dependencies
    include: [
      "three/examples/jsm/loaders/DRACOLoader",
      "three/examples/jsm/loaders/ColladaLoader"
    ],
    exclude: ["moment"]
  }
});
