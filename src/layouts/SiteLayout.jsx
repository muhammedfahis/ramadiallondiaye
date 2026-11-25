import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPageMeta } from '../routes'

// Wraps every page with the header (and footer, unless the page opts out).
// On client-side navigation it also updates the document head and the
// <html>/<body> classes, which the prerenderer writes into the static HTML.
export default function SiteLayout({ children }) {
  const { pathname } = useLocation()
  const meta = getPageMeta(pathname)

  // Runs on URL changes only (not on every re-render, which would jump to the top).
  useEffect(() => {
    const page = getPageMeta(pathname)
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    document.documentElement.className = page.htmlClass
    document.body.className = `${page.bodyClass} page-${page.key}`
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Header />
      {children}
      {meta.footer && <Footer />}
    </>
  )
}
