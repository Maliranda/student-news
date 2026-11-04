import { globSync } from 'node:fs'
console.log(globSync('src/*').length)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
