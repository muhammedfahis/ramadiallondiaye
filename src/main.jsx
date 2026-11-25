import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ROUTER_FUTURE } from './router'
// pages.css first: on the old static site Vite placed the main stylesheet after each
// page's inline styles, so index.css (incl. Tailwind utilities) wins on equal specificity.
import './styles/pages.css'
import './index.css'

const app = (
  <StrictMode>
    <BrowserRouter future={ROUTER_FUTURE}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')

// Production pages are prerendered, so attach to the existing HTML.
// In development the root only holds the <!--app-html--> placeholder, so render from scratch.
if (root.firstElementChild) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
