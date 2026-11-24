// Generates the Strategic Insights pages from src/data/insights.json:
//   insights.html                -> listing page
//   insights/<slug>.html         -> one page per article
// Run: node scripts/build-insights.mjs   (then commit the generated HTML)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const articles = JSON.parse(readFileSync(join(root, 'src/data/insights.json'), 'utf8'))

const NAME = "Dr. Ramatoulaye Diallo N'Diaye"
const OFFICE = `The Office of ${NAME}`

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const pad = (n) => String(n).padStart(2, '0')

const NAV = [
  ['/', 'Home'],
  ['/about.html', 'About'],
  ['/vision.html', 'Vision'],
  ['/gallery.html', 'Gallery'],
  ['/projects.html', 'Projects'],
  ['/insights.html', 'Strategic Insights'],
  ['/contact.html', 'Contact'],
]
const ACTIVE = '/insights.html'

function head({ title, description, canonicalPath }) {
  return `<!doctype html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:type" content="${canonicalPath === ACTIVE ? 'website' : 'article'}" />
    <link rel="stylesheet" href="/src/index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: #000;
        }

        .font-serif {
            font-family: 'Playfair Display', serif;
        }

        .drop-cap::first-letter {
            float: left;
            font-size: 5rem;
            line-height: 0.85;
            padding-right: 0.75rem;
            margin-top: 0.1rem;
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            color: #fff;
        }

        .nav-text {
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
            font-weight: 500;
        }
    </style>
</head>
`
}

function header() {
  const desktop = NAV.map(([href, label]) =>
    href === ACTIVE
      ? `                <a href="${href}" class="text-white border-b-2 border-white pb-0.5 nav-text">${label}</a>`
      : `                <a href="${href}" class="text-white/80 hover:text-white transition-colors nav-text">${label}</a>`
  ).join('\n')
  const mobile = NAV.map(([href, label]) =>
    href === ACTIVE
      ? `            <a href="${href}" class="text-xl uppercase tracking-[0.3em] text-white">${label}</a>`
      : `            <a href="${href}"
                class="text-xl uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">${label}</a>`
  ).join('\n')

  return `
<body class="text-white antialiased bg-black">

    <!-- Header with Gradient Background -->
    <header
        class="fixed top-0 left-0 right-0 bg-gradient-to-b from-black via-black/70 to-transparent pt-6 pb-16 lg:pt-8 lg:pb-20"
        style="z-index: 999999;">

        <!-- Mobile Navigation Toggle -->
        <button id="mobile-menu-btn" aria-label="Toggle navigation"
            class="xl:hidden absolute top-6 right-6 flex flex-col justify-center items-center w-8 h-8">
            <span class="block w-6 h-0.5 bg-white mb-1.5 transition-all"></span>
            <span class="block w-6 h-0.5 bg-white mb-1.5 transition-all"></span>
            <span class="block w-6 h-0.5 bg-white transition-all"></span>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center justify-between gap-12 px-10 2xl:px-20">
            <a href="/"
                class="site-nav-brand text-white hover:text-white/70 transition-colors nav-text">
                ${OFFICE}
            </a>
            <div class="site-nav-links">
${desktop}
            </div>
        </nav>
    </header>

    <!-- Mobile Navigation Menu -->
    <nav id="mobile-menu" class="xl:hidden fixed inset-0 bg-black/95 hidden flex-col items-center justify-center"
        style="z-index: 999998;">
        <div class="flex flex-col items-center space-y-8">
${mobile}
        </div>
    </nav>

    <script>
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    </script>
`
}

function footer() {
  const links = NAV.map(([href, label]) =>
    href === ACTIVE
      ? `                <a href="${href}" aria-current="page" class="text-white">${label}</a>`
      : `                <a href="${href}" class="text-white/60 hover:text-white transition-colors">${label}</a>`
  ).join('\n')
  return `
    <!-- Footer -->
    <footer class="bg-black text-white border-t border-white/10">
        <div class="max-w-6xl mx-auto px-8 md:px-16 pt-20 md:pt-24 pb-10 text-center">
            <p class="font-serif text-3xl md:text-4xl text-white font-light leading-snug">${OFFICE}</p>
            <div class="w-16 h-px bg-white/30 mx-auto my-8"></div>
            <p class="text-white/60 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Strategic intelligence shaping Africa's rise. Green transition powered by communities.
            </p>

            <div role="navigation" aria-label="Footer"
                class="mt-12 flex flex-wrap justify-center gap-x-8 md:gap-x-10 gap-y-4 text-xs md:text-sm uppercase tracking-[0.2em]">
${links}
            </div>

            <div
                class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-[0.15em]">
                <p>&copy; 2025 ${OFFICE}.</p>
                <p>Africa: the world's most strategic climate frontier.</p>
            </div>
        </div>
    </footer>

</body>

</html>
`
}

// ---------- Listing page ----------

function listingPage() {
  const [lead, ...rest] = articles

  const leadCard = `
            <!-- Lead article -->
            <a href="/insights/${lead.slug}.html"
                class="group block border-t border-white/20 pt-10 pb-16">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                    <div class="md:col-span-2">
                        <span class="font-serif text-5xl md:text-6xl text-white/30 group-hover:text-white transition-colors">01</span>
                    </div>
                    <div class="md:col-span-10">
                        <p class="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Featured Insight</p>
                        <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 font-light">
                            ${esc(lead.title)}
                        </h2>
                        <p class="text-base md:text-lg text-white/70 leading-relaxed font-light max-w-3xl mb-8">
                            ${esc(lead.description)}
                        </p>
                        <span
                            class="inline-block text-sm uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                            Read the full article →
                        </span>
                    </div>
                </div>
            </a>`

  const rows = rest
    .map(
      (a, i) => `
            <a href="/insights/${a.slug}.html"
                class="group block border-t border-white/10 py-10 hover:bg-white/[0.03] transition-colors">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start">
                    <div class="md:col-span-2">
                        <span class="font-serif text-3xl text-white/30 group-hover:text-white transition-colors">${pad(i + 2)}</span>
                    </div>
                    <div class="md:col-span-7">
                        <h2 class="font-serif text-2xl md:text-3xl text-white leading-snug mb-4 font-light">
                            ${esc(a.title)}
                        </h2>
                        <p class="text-base text-white/60 leading-relaxed font-light">
                            ${esc(a.description)}
                        </p>
                    </div>
                    <div class="md:col-span-3 md:text-right md:pt-2">
                        <span
                            class="inline-block text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                            Read →
                        </span>
                    </div>
                </div>
            </a>`
    )
    .join('\n')

  return (
    head({
      title: `Strategic Insights | ${OFFICE}`,
      description:
        "Strategic insights by Dr. Ramatoulaye Diallo N'Diaye on Africa's role in critical minerals, sovereign resource development, strategic corridors, and global supply chains.",
      canonicalPath: ACTIVE,
    }) +
    header() +
    `
    <!-- Hero -->
    <section class="relative min-h-[75vh] w-full overflow-hidden bg-black">
        <div class="absolute inset-y-0 right-0 w-full md:w-[65%]">
            <img src="/assets/rama-portrait-2.jpg" alt="${NAME} reading in a library"
                class="w-full h-full object-cover object-[35%_30%] filter grayscale" />
            <!-- fade the photo's left edge into the black background -->
            <div class="absolute inset-0 z-[2] bg-gradient-to-r from-black via-black/60 md:via-black/20 to-transparent"></div>
        </div>
        <div class="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        <div class="relative z-10 min-h-[75vh] flex flex-col justify-end px-6 md:px-16 lg:px-20 pb-16 md:pb-24">
            <p class="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Thought Leadership</p>
            <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-light"
                style="text-shadow: 0 4px 30px rgba(0,0,0,0.5);">
                Strategic Insights
            </h1>
            <div class="w-24 h-px bg-white/60 mb-6"></div>
            <p class="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl font-light tracking-wide">
                Africa's strategic role in global supply chains, critical minerals, and the economic corridors
                shaping the future of sustainable development.
            </p>
        </div>
    </section>

    <!-- Intro -->
    <section class="w-full pt-20 md:pt-28 pb-12 bg-black">
        <div class="max-w-6xl mx-auto px-8 md:px-16">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <p class="md:col-span-2 text-xs uppercase tracking-[0.3em] text-white/50 pt-2">The Series</p>
                <div class="md:col-span-10">
                    <h2 class="font-serif text-2xl md:text-3xl text-white leading-snug font-light mb-4">
                        Sovereign resource development, strategic corridors, and global supply chains
                    </h2>
                    <p class="text-base md:text-lg text-white/60 font-light">
                        Policy-style analysis by ${NAME}.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Articles -->
    <section class="w-full pb-20 md:pb-32 bg-black">
        <div class="max-w-6xl mx-auto px-8 md:px-16">
${leadCard}
${rows}
            <div class="border-t border-white/10"></div>
        </div>
    </section>
` +
    footer()
  )
}

// ---------- Article page ----------

function articlePage(a, i) {
  const prev = articles[i - 1]
  const next = articles[i + 1]
  const paragraphs = a.paragraphs
    .map(
      (p, j) =>
        `                <p class="${j === 0 ? 'drop-cap ' : ''}text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
                    ${esc(p)}
                </p>`
    )
    .join('\n\n')

  const signature = a.signed
    ? `
            <div class="mt-12 pt-8 border-t border-white/10">
                <p class="font-serif text-xl italic text-white">${NAME}</p>
                <p class="text-sm uppercase tracking-[0.2em] text-white/50 mt-2">CEO, Starcom International</p>
            </div>`
    : ''

  const pager = (art, idx, dir) =>
    art
      ? `<a href="/insights/${art.slug}.html" class="group block ${dir === 'next' ? 'md:text-right' : ''}">
                    <p class="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">${dir === 'next' ? 'Next' : 'Previous'} · ${pad(idx + 1)}</p>
                    <p class="font-serif text-xl md:text-2xl text-white/80 group-hover:text-white transition-colors leading-snug font-light">${esc(art.title)}</p>
                </a>`
      : '<div></div>'

  return (
    head({
      title: `${a.title} | ${OFFICE}`,
      description: a.description,
      canonicalPath: `/insights/${a.slug}.html`,
    }) +
    header() +
    `
    <!-- Article Header -->
    <section class="w-full pt-36 md:pt-44 pb-12 md:pb-16 bg-black">
        <div class="max-w-4xl mx-auto px-8 md:px-16">
            <a href="/insights.html"
                class="inline-block text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors mb-10">
                ← Strategic Insights
            </a>
            <p class="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">Strategic Insight · No. ${pad(i + 1)}</p>
            <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light mb-8">
                ${esc(a.title)}
            </h1>
            <div class="w-24 h-px bg-white/60 mb-8"></div>
            <p class="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
                ${esc(a.description)}
            </p>
            <p class="text-sm uppercase tracking-[0.2em] text-white/50">By ${NAME}</p>
        </div>
    </section>

    <!-- Article Body -->
    <section class="w-full pb-20 md:pb-28 bg-black">
        <div class="max-w-4xl mx-auto px-8 md:px-16">
            <article class="border-t border-white/10 pt-12 md:pt-16">
${paragraphs}
            </article>
${signature}
            <p class="mt-10 text-sm text-white/40 font-light">
                Originally published by
                <a href="${esc(a.originalUrl)}" target="_blank" rel="noopener"
                    class="text-white/60 underline underline-offset-4 hover:text-white transition-colors">Starcom International</a>.
            </p>
        </div>
    </section>

    <!-- Previous / Next -->
    <section class="w-full pb-20 md:pb-28 bg-black">
        <div class="max-w-4xl mx-auto px-8 md:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-12">
                ${pager(prev, i - 1, 'prev')}
                ${pager(next, i + 1, 'next')}
            </div>
            <div class="text-center mt-16">
                <a href="/insights.html"
                    class="inline-block px-8 py-4 border-2 border-white/50 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
                    All Strategic Insights →
                </a>
            </div>
        </div>
    </section>
` +
    footer()
  )
}

writeFileSync(join(root, 'insights.html'), listingPage())
mkdirSync(join(root, 'insights'), { recursive: true })
articles.forEach((a, i) => writeFileSync(join(root, 'insights', `${a.slug}.html`), articlePage(a, i)))
console.log(`Wrote insights.html and ${articles.length} article pages.`)
