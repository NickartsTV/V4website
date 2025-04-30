import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { fileURLToPath, URL } from "url";


export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@images', replacement: fileURLToPath(new URL('./src/assets/images', import.meta.url)) },
      { find: '@partials', replacement: fileURLToPath(new URL('./src/components/partials', import.meta.url)) },
    ],
  },
})
