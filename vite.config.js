import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",
  build: {
    // Relative to the root
    outDir: "./build",
  },
  plugins: [
    // …
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: "**/*.{jsx,tsx}",
      babel: {},
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve("src"),
    },
  },
  publicDir: "../public",
});
