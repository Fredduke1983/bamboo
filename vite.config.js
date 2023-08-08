// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/bamboo",
//   plugins: [react()],
//   server: {
//     port: 3030,
//   },
//   preview: {
//     port: 8080,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react()],
  server: {
    open: "/bamboo",
    port: 8000,
  },
  base: "/bamboo",
});
