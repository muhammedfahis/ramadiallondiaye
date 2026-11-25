export const SITE_NAME = "The Office of Dr. Ramatoulaye Diallo N'Diaye"

// Main menu, used by the header (desktop + mobile) and the footer.
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/vision', label: 'Vision' },
  { to: '/projects', label: 'Projects' },
  { to: '/insights', label: 'Strategic Insights' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

// A link is active on its own page and on any page below it (e.g. /insights/<slug>).
export function isActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}
