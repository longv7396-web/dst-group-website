import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "./",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
              return "vendor-react";
            }
            if (id.includes("framer-motion") || id.includes("gsap")) {
              return "vendor-motion";
            }
            if (id.includes("@lottiefiles") || id.includes("lucide-react")) {
              return "vendor-ui";
            }
            return "vendor";
          }
          return undefined;
        },
      },
    },
  },
});
