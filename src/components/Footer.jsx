import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE_NAME, isActive } from '../data/navigation'

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 md:px-16 pt-20 md:pt-24 pb-10 text-center">
        <p className="font-serif text-3xl md:text-4xl text-white font-light leading-snug">{SITE_NAME}</p>
        <div className="w-16 h-px bg-white/30 mx-auto my-8"></div>
        <p className="text-white/60 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Strategic intelligence shaping Africa&apos;s rise. Green transition powered by communities.
        </p>

        {/* A div (not <nav>): index.css pins any `footer nav` to the bottom of the screen. */}
        <div
          role="navigation"
          aria-label="Footer"
          className="mt-12 flex flex-wrap justify-center gap-x-8 md:gap-x-10 gap-y-4 text-xs md:text-sm uppercase tracking-[0.2em]"
        >
          {NAV_LINKS.map(({ to, label }) =>
            isActive(pathname, to) ? (
              <Link key={to} to={to} aria-current="page" className="text-white">
                {label}
              </Link>
            ) : (
              <Link key={to} to={to} className="text-white/60 hover:text-white transition-colors">
                {label}
              </Link>
            )
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-[0.15em]">
          <p>&copy; 2025 {SITE_NAME}.</p>
          <p>Africa: the world&apos;s most strategic climate frontier.</p>
        </div>
      </div>
    </footer>
  )
}
