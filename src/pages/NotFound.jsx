import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-black">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">404</p>
      <h1 className="font-serif text-4xl md:text-5xl text-white font-light mb-8">Page not found</h1>
      <Link
        to="/"
        className="inline-block px-8 py-4 border-2 border-white/50 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
      >
        Back to Home
      </Link>
    </section>
  )
}
