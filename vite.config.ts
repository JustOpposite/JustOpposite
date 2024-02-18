/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react-swc'
import preact from '@preact/preset-vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), preact()],
  resolve: {
    // react-router-dom specifies "module" field in package.json for ESM entry
    // if it's not mapped, it uses the "main" field which is CommonJS that redirects to CJS preact
    mainFields: ['module'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts'
  }
})
