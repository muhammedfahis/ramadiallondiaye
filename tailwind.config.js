/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        surfaceStrong: 'var(--color-surface-strong)',
        foreground: 'var(--color-foreground)',
        textMuted: 'var(--color-text-muted)',
        textMutedStrong: 'var(--color-text-muted-strong)',
        border: 'var(--color-border)',
        borderStrong: 'var(--color-border-strong)',
        accent: 'var(--color-accent)',
        accentSoft: 'var(--color-accent-soft)',
        focus: 'var(--color-focus)',
        overlayDark: 'var(--color-overlay-dark)',
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 35px 120px rgba(37, 99, 235, 0.4)',
        card: '0 22px 60px rgba(3, 6, 23, 0.55)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(37, 99, 235, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.28), transparent 45%), linear-gradient(180deg, #020617 0%, #020617 100%)',
      },
    },
  },
  plugins: [],
}

