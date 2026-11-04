import { globSync } from 'node:fs' // exists only in Node 22+
console.log('files in src:', globSync('src/*').length)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
