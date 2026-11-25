import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Biography from './pages/Biography'
import Insights from './pages/Insights'
import InsightArticle from './pages/InsightArticle'
import { articles, getArticle } from './data/insights'
import { SITE_NAME } from './data/navigation'

// Classes the old static pages put on <html>/<body>, kept per page so each page
// renders exactly as before.
const HTML_DEFAULT = 'scroll-smooth'
const BODY_DEFAULT = 'text-white antialiased bg-black'

// Every page of the site. `footer: false` hides the site footer (Home has none).
export const pages = [
  {
    path: '/',
    key: 'home',
    Component: Home,
    title: SITE_NAME,
    description:
      'Pan-African Diplomat & Global Strategist for Climate Resilience, Green Industrialization, and Cultural Power.',
    htmlClass: 'h-full',
    bodyClass: 'h-full bg-black text-white font-sans antialiased',
    footer: false,
  },
  {
    path: '/about',
    key: 'about',
    Component: About,
    title: `About | ${SITE_NAME}`,
    description:
      "Dr. Ramatoulaye Diallo N'Diaye - A Global African Leader shaping climate resilience, green industrialization, and cultural power.",
  },
  {
    path: '/vision',
    key: 'vision',
    Component: Vision,
    title: `Vision | ${SITE_NAME}`,
    description:
      "A Vision by Dr. Ramatoulaye Diallo N'Diaye: Culture as a world-class asset, a source of economic value, strategic influence, and global leadership.",
  },
  {
    path: '/gallery',
    key: 'gallery',
    Component: Gallery,
    title: `Gallery | ${SITE_NAME}`,
    description: "Photo gallery showcasing the work and engagements of Dr. Ramatoulaye Diallo N'Diaye.",
  },
  {
    path: '/projects',
    key: 'projects',
    Component: Projects,
    title: `Projects | ${SITE_NAME}`,
    description:
      "Strategic initiatives and projects led by Dr. Ramatoulaye Diallo N'Diaye for Africa's green transition and cultural development.",
  },
  {
    path: '/contact',
    key: 'contact',
    Component: Contact,
    title: `Contact | ${SITE_NAME}`,
    description:
      "Contact the Office of Dr. Ramatoulaye Diallo N'Diaye for strategic inquiries, speaking engagements, and partnerships.",
  },
  {
    path: '/biography',
    key: 'biography',
    Component: Biography,
    title: `Biography | ${SITE_NAME}`,
    description:
      "The complete biography of Dr. Ramatoulaye Diallo N'Diaye - A visionary African leader in climate resilience, cultural power, and sustainable finance.",
  },
  {
    path: '/insights',
    key: 'insights',
    Component: Insights,
    title: `Strategic Insights | ${SITE_NAME}`,
    description:
      "Strategic insights by Dr. Ramatoulaye Diallo N'Diaye on food sovereignty, African integration, cultural heritage and opportunity for young Africans.",
  },
  {
    path: '/insights/:slug',
    key: 'insight-article',
    Component: InsightArticle,
    type: 'article',
  },
]

const withDefaults = (page) => ({
  htmlClass: HTML_DEFAULT,
  bodyClass: BODY_DEFAULT,
  footer: true,
  type: 'website',
  ...page,
})

const NOT_FOUND = withDefaults({ key: 'not-found', title: `Page not found | ${SITE_NAME}`, description: '' })

// Title, description and <html>/<body> classes for a URL path.
export function getPageMeta(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const article = path.startsWith('/insights/') && getArticle(path.slice('/insights/'.length))
  if (article) {
    const page = withDefaults(pages.find((p) => p.key === 'insight-article'))
    return { ...page, title: `${article.title} | ${SITE_NAME}`, description: article.description }
  }
  const page = pages.find((p) => p.path === path)
  return page ? withDefaults(page) : NOT_FOUND
}

// Every concrete URL to prerender into static HTML at build time.
export const prerenderPaths = [
  ...pages.filter((p) => !p.path.includes(':')).map((p) => p.path),
  ...articles.map((a) => `/insights/${a.slug}`),
]
