import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { ROUTER_FUTURE } from './router'
import { getPageMeta, prerenderPaths } from './routes'

// Used by scripts/prerender.mjs at build time.
export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url} future={ROUTER_FUTURE}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
  return { html, meta: getPageMeta(url) }
}

export { prerenderPaths }
