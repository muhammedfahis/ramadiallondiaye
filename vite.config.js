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
        insights: 'insights.html',
        'insights/simandou-africa-strategic-resource-era': 'insights/simandou-africa-strategic-resource-era.html',
        'insights/guineas-strategic-pivot-sovereign-resource-development': 'insights/guineas-strategic-pivot-sovereign-resource-development.html',
        'insights/reframing-investment-in-africa-from-extraction-to-partnership': 'insights/reframing-investment-in-africa-from-extraction-to-partnership.html',
        'insights/rise-of-african-strategic-corridors': 'insights/rise-of-african-strategic-corridors.html',
        'insights/africa-new-global-supply-chains': 'insights/africa-new-global-supply-chains.html',
      },
    },
  },
})
