import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),    
    },
  },
  server: {
    port: 3000,
  },
});
