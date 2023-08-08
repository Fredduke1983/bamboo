import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/bamboo",
  plugins: [react()],
  server: {
    open: "/bamboo",
    port: 3030,
  },
  preview: {
    port: 8080,
  },
});
