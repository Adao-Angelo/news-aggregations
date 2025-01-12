import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.ts",
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.apitube.io",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
