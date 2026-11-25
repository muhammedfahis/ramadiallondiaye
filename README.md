# The Office of Dr. Ramatoulaye Diallo N'Diaye

Personal site built with React, Vite, React Router and Tailwind CSS. Every page is
prerendered to static HTML at build time, then React takes over in the browser.

## Commands

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # client build + prerender every route into dist/
npm run preview      # serve dist/ locally
npm run lint
npm run images:webp  # convert any new JPEG/PNG/AVIF in public/ to WebP
```

## Structure

```
index.html                 HTML shell (the prerenderer fills in each page)
src/
  main.jsx                 browser entry (hydrates the prerendered HTML)
  entry-server.jsx         build-time render entry used by scripts/prerender.mjs
  App.jsx                  routes
  routes.js                page list: path, component, title, description
  layouts/SiteLayout.jsx   header + footer around every page
  components/              Header, Footer, gallery (grid, view more, lightbox), ContactForm
  pages/                   one component per page
  data/                    navigation, gallery photo sets, insights articles
  styles/                  pages.css (page-level styles), theme.css
  index.css                Tailwind + global styles
public/                    images (WebP) served as-is
scripts/
  prerender.mjs            writes dist/<route>.html for every route
  convert-images-to-webp.mjs
```

## Common edits

- **Add a Strategic Insight:** append an entry to `src/data/insights.json`
  (`slug`, `title`, `date`, `description`, `body`; the block types are listed in
  `src/data/insights.js`). Give each article its own date. The listing, the
  article page and the prerendered file are created automatically.
- **Add gallery photos:** put the WebP files in `public/gallery/<folder>/` and
  list them in `src/data/gallery.js`.
- **Add a page:** create `src/pages/MyPage.jsx`, add it to `pages` in
  `src/routes.js`, and to `NAV_LINKS` in `src/data/navigation.js` if it belongs
  in the menu.

## Deployment

Cloudflare Workers with static assets (`wrangler.toml`), deployed from GitHub.
URLs are clean (`/about`); the old `/about.html` links redirect automatically.

## Notes

- `pages.css` is imported before `index.css` on purpose: it reproduces the
  cascade order of the old static build, so the site looks exactly as before.
- `src/index.css` still pins any `footer nav` to the bottom of the screen
  (legacy rule), which is why the footer links use `role="navigation"` on a div.
