/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ["vitest"],
      dts: true, // generate TypeScript declaration
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
