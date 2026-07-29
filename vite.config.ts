import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5192,
    strictPort: true,
  },
  build: {
    // Site 100% estático em dist/ — hospedável em qualquer servidor
    target: "es2020",
  },
});
