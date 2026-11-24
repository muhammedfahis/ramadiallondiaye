/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './insights.html', './insights/**/*.html'],
  // The inner pages (about, vision, gallery, projects, contact, biography) are
  // not scanned, to keep their current rendering unchanged. These are the
  // classes they rely on that used to be generated only because the removed
  // React app (src/*.jsx) happened to use them too.
  safelist: [
    'border',
    'border-white/30',
    'container',
    'duration-500',
    'from-black/95',
    'gap-2',
    'gap-3',
    'gap-8',
    'group-hover:opacity-100',
    'group-hover:w-16',
    'h-16',
    'h-[400px]',
    'inline-flex',
    'lg:h-[500px]',
    'lg:text-3xl',
    'lg:text-base',
    'mb-16',
    'md:grid-cols-3',
    'min-h-screen',
    'ml-auto',
    'mt-4',
    'mt-6',
    'opacity-0',
    'p-10',
    'p-6',
    'p-8',
    'pt-32',
    'px-4',
    'py-1',
    'py-5',
    'text-left',
    'text-right',
    'text-white/90',
    'to-black/40',
    'tracking-wider',
    'tracking-widest',
    'transition-opacity',
    'via-black/85',
    'via-transparent',
    'w-12',
    'z-30',
  ],
  theme: {
    extend: {
      colors: {
        'emerald-deep': '#00594C',
        'gold-accent': '#D4AF37',
        'gray-dark': '#111111',
        'gray-light': '#F5F5F5',
        'sand-beige': '#f5f5dc',
        'charcoal': '#333333',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
      },
    },
  },
  plugins: [],
}

