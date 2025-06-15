
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Set your repo name here (or "/" for root), for user/organization pages use '/'.
// For project pages like "https://USERNAME.github.io/REPO/", set to "/REPO/".
// If you deploy to "https://arjunuthpala.github.io/" (user page), use "/".
// If you use "https://arjunuthpala.github.io/project-portfolio/", use "/project-portfolio/".

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
