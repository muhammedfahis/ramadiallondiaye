// Prerenders every route to static HTML after `vite build`.
//
//   1. vite build                               -> dist/ (client bundle + index.html template)
//   2. vite build --ssr src/entry-server.jsx    -> dist-ssr/entry-server.js
//   3. node scripts/prerender.mjs               -> dist/<route>.html for every route
//
// Output: "/" -> dist/index.html, "/about" -> dist/about.html,
// "/insights/<slug>" -> dist/insights/<slug>.html. Cloudflare static assets
// serve /about from about.html and redirect /about.html to /about.

import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const { render, prerenderPaths } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

for (const url of prerenderPaths) {
  const { html, meta } = render(url)
  const head = [
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
  ].join('\n    ')

  const page = template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(meta.description)}" />`)
    .replace('<!--app-head-->', head)
    .replace(/\s*<!-- data-ssr-\* placeholders[^>]*-->/, '')
    .replace(' data-ssr-html', ` class="${esc(meta.htmlClass)}"`)
    .replace(/<body class="[^"]*" data-ssr-body>/, `<body class="${esc(`${meta.bodyClass} page-${meta.key}`)}">`)
    .replace('<!--app-html-->', html)

  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  mkdirSync(dirname(join(dist, file)), { recursive: true })
  writeFileSync(join(dist, file), page)
  console.log(`prerendered ${url.padEnd(70)} -> dist/${file}`)
}

rmSync(ssrDir, { recursive: true, force: true })
