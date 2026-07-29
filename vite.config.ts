import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Subcaminho do GitHub Pages (https://abalduinojose-cmd.github.io/s-ocamilo_lab/).
  // Ao publicar em domínio próprio na raiz, troque para "/".
  base: "/s-ocamilo_lab/",
  plugins: [tailwindcss()],
  server: {
    port: 5192,
    strictPort: true,
  },
  build: {
    // GitHub Pages serve a pasta docs/ da branch main
    outDir: "docs",
    target: "es2020",
  },
});
