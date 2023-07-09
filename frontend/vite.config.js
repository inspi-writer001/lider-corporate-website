import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp({
      policies: {
        "script-src": [
          "'self'",
          "'unsafe-eval'",
          "'report-sample'",
          "'nonce-BPodzRMzcGJrNTCZVKC5sg'",
          "'nonce-8V4yErRm84LJirZlfj6Iiw'",
          "'nonce-bCMFOWNxviz0Tc3PZuuF0w'",
          "'nonce-AGmzBRbK4Q4DRseDr0N9oA'",
          "'unsafe-inline'",
          "'strict-dynamic'"
        ] // Add additional sources if needed
      }
    })
  ],
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
