import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        vision: 'vision.html',
        contact: 'contact.html',
        gallery: 'gallery.html',
        projects: 'projects.html',
        biography: 'biography.html',
      },
    },
  },
})
