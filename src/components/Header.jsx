import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE_NAME, isActive } from '../data/navigation'

const DESKTOP_ACTIVE = 'text-white border-b-2 border-white pb-0.5 nav-text'
const DESKTOP_IDLE = 'text-white/80 hover:text-white transition-colors nav-text'
const MOBILE_ACTIVE = 'text-xl uppercase tracking-[0.3em] text-white'
const MOBILE_IDLE = 'text-xl uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors'

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu after navigating.
  useEffect(() => setMenuOpen(false), [pathname])

  // Keep the page behind the open menu from scrolling.
  useEffect(() => {
    if (!menuOpen) return undefined
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 bg-gradient-to-b from-black via-black/70 to-transparent pt-6 pb-16 lg:pt-8 lg:pb-20"
        style={{ zIndex: 999999 }}
      >
        {/* Below 1280px: site name on the left, menu button on the right */}
        <Link
          to="/"
          className="xl:hidden absolute top-6 left-6 right-20 min-h-8 flex items-center font-serif uppercase text-[11px] sm:text-[13px] tracking-[0.15em] leading-snug text-white nav-text"
        >
          {SITE_NAME}
        </Link>
        <button
          id="mobile-menu-btn"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="xl:hidden absolute top-6 right-6 w-8 h-8"
        >
          {/* Three bars that turn into an X when the menu is open */}
          <span
            className={`absolute left-1 top-[9px] block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          ></span>
          <span
            className={`absolute left-1 top-[16px] block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`absolute left-1 top-[23px] block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          ></span>
        </button>

        <nav className="hidden xl:flex items-center justify-between gap-12 px-10 2xl:px-20">
          <Link to="/" className="site-nav-brand text-white hover:text-white/70 transition-colors nav-text">
            {SITE_NAME}
          </Link>
          <div className="site-nav-links">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className={isActive(pathname, to) ? DESKTOP_ACTIVE : DESKTOP_IDLE}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <nav
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 bg-black ${menuOpen ? 'flex' : 'hidden'} flex-col items-center justify-center`}
        style={{ zIndex: 999998 }}
      >
        <div className="flex flex-col items-center space-y-8">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={isActive(pathname, to) ? MOBILE_ACTIVE : MOBILE_IDLE}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
