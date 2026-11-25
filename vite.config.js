import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single-page React app. `npm run build` also prerenders every route to static
// HTML (see scripts/prerender.mjs).
export default defineConfig({
  plugins: [react()],
})
