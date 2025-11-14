import { useMemo, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { FaGlobeAfrica, FaLeaf, FaPeopleCarry, FaSun } from 'react-icons/fa'
import { RiArrowDownLine, RiArrowRightUpLine, RiTeamLine, RiAwardLine } from 'react-icons/ri'
import { HiOutlineUserGroup } from 'react-icons/hi'
import {
  heroHighlights,
  biography,
  projects,
  galleryHighlights,
  contactContent,
} from './data/content'
import OptimizedImage from './components/OptimizedImage'

const container = 'mx-auto w-full max-w-7xl px-6'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Rama' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const heroImageBase = '/images/hero-main'
const aboutPortraitBase = '/images/about-portrait'

const galleryImages = [
  { base: '/images/gallery-01', alt: 'Ramadi Allondiaye speaking on stage during a climate forum.' },
  { base: '/images/gallery-02', alt: 'Ramadi Allondiaye in conversation with global leaders at an event.' },
  { base: '/images/gallery-03', alt: 'Ramadi Allondiaye addressing participants at an international summit.' },
  { base: '/images/gallery-04', alt: 'Ramadi Allondiaye networking with delegates after a keynote session.' },
  { base: '/images/gallery-05', alt: 'Ramadi Allondiaye sharing insights alongside fellow panelists.' },
  { base: '/images/gallery-06', alt: 'Official portrait of Ramadi Allondiaye in formal attire.' },
]

const projectMedia = {
  'Great Green Wall of Africa': {
    base: '/images/great-wall-of-africa',
    alt: 'Great Green Wall of Africa initiative landscape.',
  },
  'Forbes Interview': {
    base: '/images/forbes-interview',
    alt: 'Ramatoulaye Diallo N’Diaye featured in a Forbes interview.',
  },
  'Mali – Timbuktu Renaissance': {
    base: '/images/mali---timbuktu-renaissance',
    alt: 'Timbuktu Renaissance cultural performance highlighting Mali heritage.',
  },
  'Mali Magic': {
    base: '/images/mali-magic',
    alt: 'Mali Magic digital heritage showcase.',
  },
}

const projectIcons = [FaGlobeAfrica, FaLeaf, FaPeopleCarry, FaSun]

const services = projects.map((project, index) => ({
  ...project,
  Icon: projectIcons[index % projectIcons.length],
  media: projectMedia[project.name],
}))

const galleryCards = galleryImages.map((image, index) => ({
  image,
  title: galleryHighlights.events[index] ?? `Featured Engagement ${index + 1}`,
  teaser:
    galleryHighlights.media[index % galleryHighlights.media.length] ??
    'Discover more moments from Rama’s journey.',
}))

const aboutSpotlight = [
  { base: '/images/gallery-02', alt: 'Ramadi Allondiaye speaking with leaders.' },
  { base: '/images/gallery-04', alt: 'Networking after a keynote session.' },
  { base: '/images/gallery-06', alt: 'Official portrait of Ramadi Allondiaye.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const scrollPulse = {
  animate: {
    y: [0, 8, 0],
    opacity: [0.4, 1, 0.4],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

const heroTitle = 'Championing Culture, Resilience & Inclusive Growth'
const heroTitleCharacters = heroTitle.split('')

const charVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: 'easeOut' },
  }),
}

const floatingBubble = {
  animate: {
    y: [-12, 12, -12],
    rotate: [-4, 4, -4],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
}

const floatingBubbleSlow = {
  animate: {
    y: [-18, 18, -18],
    rotate: [2, -2, 2],
    transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
  },
}

const marqueeItems = [
  'Culture Impact',
  'Climate Innovation',
  'Creative Economies',
  'Tourism Futures',
  'SDG Advocacy',
]

const HighlightBadge = ({ accent }) => (
  <motion.span
    variants={fadeUp}
    className="relative inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
  >
    <span className="absolute inset-0 rounded-full bg-accent/20 blur-md" aria-hidden />
    <span className="relative">{accent}</span>
  </motion.span>
)

const SectionHeader = ({ id, kicker, title, subtitle, align = 'left' }) => (
  <motion.header
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '0px 0px -80px' }}
    variants={fadeUp}
    className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}
  >
    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/80">{kicker}</span>
    <h2 id={id} className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="max-w-3xl text-base leading-relaxed text-ivory/70 md:text-lg">{subtitle}</p>
    )}
    <span
      className="h-px w-24 rounded-full bg-gradient-to-r from-accent via-accent/40 to-transparent"
      aria-hidden
    />
  </motion.header>
)

const Hero = () => {
  const { scrollY } = useScroll()
  const scrollProgress = useSpring(scrollY, { stiffness: 100, damping: 30 })
  const heroY = useTransform(scrollProgress, [0, 600], [0, -80])
  const imageY = useTransform(scrollProgress, [0, 600], [0, 120])
  const imageScale = useTransform(scrollProgress, [0, 500], [1, 1.08])

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const parallaxX = useSpring(useTransform(cursorX, (value) => value * 0.02), { stiffness: 90, damping: 18 })
  const parallaxY = useSpring(useTransform(cursorY, (value) => value * 0.02), { stiffness: 90, damping: 18 })

  useEffect(() => {
    const onMouseMove = (e) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      cursorX.set(e.clientX - centerX)
      cursorY.set(e.clientY - centerY)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [cursorX, cursorY])

  const marqueeSequence = useMemo(() => [...marqueeItems, ...marqueeItems], [])
  const marqueeTransition = useMemo(
    () => ({ duration: 18, ease: 'linear', repeat: Infinity }),
    [],
  )

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen pb-32 pt-40"
    >
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* Primary Liquid Blob - Top Right */}
        <motion.div
          className="absolute -right-32 top-20 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-accent/30 via-purple-500/25 to-indigo-500/30 blur-[140px]"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360],
            borderRadius: ['50%', '40%', '60%', '50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary Liquid Blob - Bottom Left */}
        <motion.div
          className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-500/20 to-accent/25 blur-[130px]"
          animate={{
            x: [0, -60, 80, 0],
            y: [0, 70, -50, 0],
            scale: [1.1, 0.85, 1.15, 1.1],
            rotate: [360, 270, 180, 0],
            borderRadius: ['50%', '55%', '45%', '50%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Tertiary Liquid Blob - Center */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/20 via-accent/15 to-pink-500/15 blur-[120px]"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, -90, -180, -360],
            borderRadius: ['50%', '60%', '40%', '50%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Quaternary Liquid Blob - Top Left */}
        <motion.div
          className="absolute -left-20 top-40 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-cyan-500/15 via-blue-500/20 to-indigo-500/25 blur-[110px]"
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 50, -60, 0],
            scale: [0.9, 1.2, 0.85, 0.9],
            rotate: [0, 120, 240, 360],
            borderRadius: ['50%', '45%', '55%', '50%'],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Quinary Liquid Blob - Bottom Right */}
        <motion.div
          className="absolute -bottom-20 right-20 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-violet-500/20 via-purple-500/15 to-fuchsia-500/20 blur-[125px]"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 70, 0],
            scale: [1, 0.9, 1.25, 1],
            rotate: [0, -60, -120, -180],
            borderRadius: ['50%', '65%', '35%', '50%'],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Small Floating Particles */}
        <motion.div
          className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-accent/10 blur-[60px]"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 h-[180px] w-[180px] rounded-full bg-indigo-500/10 blur-[55px]"
          animate={{
            x: [0, -25, 25, 0],
            y: [0, 35, -25, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
      </div>
      <motion.div
        className={`${container} relative`}
        style={{ y: heroY }}
      >
        {/* Hero Content - Centered Layout */}
        <motion.div
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            The Office of Ramatoulaye Diallo N'Diaye
          </motion.span>
          
          <motion.h1
            id="hero-heading"
            className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl"
            variants={fadeUp}
            custom={0.5}
          >
            Championing Culture,{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Resilience
            </motion.span>{' '}
            & Inclusive Growth
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg font-medium uppercase tracking-[0.35em] text-accentSoft/80"
          >
            Public Speaker • Strategist • Innovator
          </motion.p>
          
          <motion.p 
            variants={fadeUp} 
            custom={1.5}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            International public speaker, former Minister for Culture and Tourism of Mali, 
            and a lifelong advocate for communities across Africa.
          </motion.p>
          {/* Highlight Cards */}
          <motion.ul 
            variants={stagger} 
            className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3"
          >
            {heroHighlights.map((item, index) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                custom={2 + index * 0.3}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl transition-all duration-500 hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(76,111,255,0.3)]"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(76,111,255,0.15) 0%, transparent 70%)'
                  }}
                />
                <HighlightBadge accent={item.accent} />
                <p className="relative mt-4 text-sm leading-relaxed text-muted-strong transition-colors group-hover:text-white">
                  {item.title}
                </p>
                <motion.span
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </motion.li>
            ))}
          </motion.ul>
          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3.5}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(76,111,255,0.4)] transition-all hover:shadow-[0_20px_60px_rgba(76,111,255,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              data-cursor="interactive"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-accent via-white/20 to-accent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ opacity: 0.3 }}
              />
              <span className="relative">Book me to speak</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
              href="#gallery"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              data-cursor="interactive"
            >
              Watch my talk
            </motion.a>
          </motion.div>
          {/* Marquee */}
          <motion.div
            className="relative mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-full border border-accent/20 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 py-4 backdrop-blur-sm"
            variants={fadeUp}
            custom={4}
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05091a] via-[#05091a]/80 to-transparent z-10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05091a] via-[#05091a]/80 to-transparent z-10"
              aria-hidden
            />
            <motion.div
              className="flex items-center gap-16 whitespace-nowrap px-4 text-xs font-bold uppercase tracking-[0.45em] text-accent/80"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
              aria-hidden
            >
              {marqueeSequence.map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Hero Image - Floating Effect */}
        <motion.div
          className="relative mx-auto mt-20 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          style={{ y: imageY, scale: imageScale }}
        >
          <motion.div 
            className="relative"
            style={{ x: parallaxX, y: parallaxY }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-8 rounded-[48px] bg-accent/30 blur-[80px]"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            
            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <OptimizedImage
                srcBase={heroImageBase}
                alt="Ramadi Allondiaye speaking on stage"
                sizes="(min-width: 1024px) 800px, 90vw"
                widths={[640, 960, 1440]}
                className="relative z-10 w-full rounded-[40px] border-2 border-white/10 object-cover shadow-[0_40px_100px_rgba(0,0,0,0.6)] ring-1 ring-accent/30"
                priority
              />
              {/* Accent Border */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-accent/20 via-transparent to-indigo-500/20" aria-hidden />
            </motion.div>
            
            {/* Floating Orbs */}
            <motion.div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-2 border-accent/30 bg-accent/10 blur-2xl"
              animate={{ y: [-20, 20, -20], rotate: [0, 180, 360], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            <motion.div
              className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-accent/30 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-xs font-semibold uppercase tracking-[0.4em] text-accent/80"
        variants={scrollPulse}
        animate="animate"
      >
        Scroll down
        <RiArrowDownLine className="mt-2 text-xl" />
      </motion.a>
    </motion.section>
  )
}

const About = () => {
  const impactMetrics = [
    { value: '20+', label: 'Years of Leadership', Icon: RiAwardLine },
    { value: '50+', label: 'Global Engagements', Icon: FaGlobeAfrica },
    { value: '100K+', label: 'Lives Impacted', Icon: HiOutlineUserGroup },
  ]

  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[140px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className={container}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            About Rama
          </motion.span>
          <motion.h2
            id="about-heading"
            variants={fadeUp}
            custom={0.5}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Leading with{' '}
            <span className="bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent">
              empathy
            </span>
            ,<br />
            experience and vision
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted"
          >
            {biography.intro}
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="relative grid gap-4 lg:grid-cols-12">
          {/* Large Image Card - Spans 2 rows */}
          <motion.div
            className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:col-span-6 lg:row-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative h-full overflow-hidden rounded-[36px]">
              {/* Animated Border Gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(76,111,255,0.3) 0%, rgba(139,92,246,0.3) 100%)',
                  filter: 'blur(20px)',
                }}
                aria-hidden
              />
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative h-full"
              >
                <OptimizedImage
                  srcBase={aboutPortraitBase}
                  alt="Portrait of Ramadi Allondiaye"
                  sizes="(min-width: 1024px) 600px, 90vw"
                  widths={[640, 960, 1440]}
                  className="h-full min-h-[500px] w-full rounded-[32px] object-cover lg:min-h-[700px]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent/10 to-indigo-500/10 p-6 backdrop-blur-xl lg:col-span-6 lg:h-[340px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <motion.div
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            <div className="relative flex h-full flex-col">
              <svg className="h-11 w-11 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-5 flex-1 text-xl font-semibold leading-relaxed text-white">
                {biography.affirmations[0]}
              </p>
              <span className="mt-4 block text-sm font-medium uppercase tracking-[0.3em] text-accent">
                {biography.affirmations[1]}
              </span>
            </div>
          </motion.div>

          {/* Stats Cards Grid - Glass Icons */}
          <motion.div
            className="grid gap-4 sm:grid-cols-3 lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                custom={0.4 + index * 0.2}
                className="group relative lg:h-[230px]"
                style={{ perspective: '1000px' }}
              >
                {/* Floating Glow Background */}
                <motion.div
                  className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-gradient-to-br from-accent/20 to-indigo-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                  aria-hidden
                />

                <motion.div
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative h-full overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-white/[0.15] to-white/[0.05] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Top Light Reflection */}
                  <motion.div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />

                  {/* Shimmer Effect */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                    aria-hidden
                  />

                  {/* Radial Glow on Hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(76,111,255,0.2) 0%, transparent 70%)',
                    }}
                    aria-hidden
                  />

                  <div className="relative flex h-full flex-col items-center justify-center text-center">
                    {/* Glass Icon Container */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      {/* Icon Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent/30 blur-xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.4,
                        }}
                        aria-hidden
                      />
                      
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-accent/20 to-indigo-500/20 shadow-[inset_0_2px_20px_rgba(255,255,255,0.15)] backdrop-blur-xl">
                        <metric.Icon className="text-4xl text-accent drop-shadow-[0_0_12px_rgba(76,111,255,0.8)]" />
                      </div>
                    </motion.div>

                    <motion.p
                      className="mt-5 bg-gradient-to-br from-white to-white/70 bg-clip-text text-5xl font-extrabold text-transparent"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {metric.value}
                    </motion.p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                      {metric.label}
                    </p>

                    {/* Bottom Border Accent */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-indigo-500 transition-all duration-500 group-hover:w-3/4"
                      aria-hidden
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Biography Story */}
        <motion.div
          className="relative mt-16 rounded-[40px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent p-10 backdrop-blur-sm lg:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {biography.story.map((paragraph, index) => (
              <motion.div
                key={paragraph.slice(0, 20)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />
                <p className="text-base leading-relaxed text-muted lg:text-lg">{paragraph}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Projects = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/30 to-background" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,111,255,0.1),transparent_60%)]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[150px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className={`${container} relative`}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            Impact Projects
          </motion.span>
          <motion.h2
            id="projects-heading"
            variants={fadeUp}
            custom={0.5}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Pioneering initiatives across{' '}
            <span className="bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent">
              culture & climate
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted"
          >
            A portfolio of collaborations and movements accelerating sustainable transformation across the Sahel and beyond.
          </motion.p>
        </motion.div>

        {/* Featured Project Grid - Masonry Style */}
        <div className="grid gap-6 lg:grid-cols-12">
          {services.map(({ name, description, Icon, url, media }, index) => {
            const isFeatured = index === 0
            const isLarge = index === 1
            
            return (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className={
                  isFeatured
                    ? 'lg:col-span-7'
                    : isLarge
                    ? 'lg:col-span-5'
                    : 'lg:col-span-6'
                }
              >
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover="hover"
                  className="group relative block h-full overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-accent/50 hover:shadow-[0_30px_90px_rgba(76,111,255,0.25)]"
                  data-cursor="interactive"
                >
                  {/* Image Container with Parallax */}
                  {media && (
                    <div className="relative overflow-hidden">
                      <motion.div
                        variants={{
                          hover: { scale: 1.08 },
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative"
                      >
                        <OptimizedImage
                          srcBase={media.base}
                          alt={media.alt}
                          sizes={
                            isFeatured
                              ? '(min-width: 1024px) 800px, 90vw'
                              : isLarge
                              ? '(min-width: 1024px) 600px, 90vw'
                              : '(min-width: 1024px) 500px, 90vw'
                          }
                          widths={[480, 720, 960]}
                          className={
                            isFeatured
                              ? 'h-[400px] w-full object-cover lg:h-[500px]'
                              : isLarge
                              ? 'h-[350px] w-full object-cover lg:h-[450px]'
                              : 'h-[300px] w-full object-cover lg:h-[350px]'
                          }
                        />
                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-indigo-500/20"
                          variants={{
                            hover: { opacity: [0, 0.4] },
                          }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.div>
                      
                      {/* Floating Badge */}
                      <motion.div
                        className="absolute right-6 top-6"
                        variants={{
                          hover: { scale: 1.1, rotate: 5 },
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/20 backdrop-blur-xl">
                          <Icon className="text-xl text-accent" />
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Content */}
                  <div className={isFeatured ? 'p-8 lg:p-10' : 'p-6 lg:p-8'}>
                    <motion.h3
                      className={
                        isFeatured
                          ? 'text-2xl font-bold text-white lg:text-3xl'
                          : 'text-xl font-bold text-white lg:text-2xl'
                      }
                      variants={{
                        hover: { x: 8 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {name}
                    </motion.h3>
                    <p
                      className={
                        isFeatured
                          ? 'mt-4 text-base leading-relaxed text-muted lg:text-lg'
                          : 'mt-3 text-sm leading-relaxed text-muted lg:text-base'
                      }
                    >
                      {description}
                    </p>
                    
                    {/* CTA */}
                    <motion.div
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:border-accentSoft/40 group-hover:bg-accentSoft/10 group-hover:text-accentSoft lg:text-base"
                      variants={{
                        hover: { x: 8 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      Explore project
                      <motion.div
                        variants={{
                          hover: { x: 4, y: -4 },
                        }}
                      >
                        <RiArrowRightUpLine className="text-lg" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
                    variants={{
                      hover: { opacity: [0, 1], scale: [0.8, 1.2] },
                    }}
                    transition={{ duration: 0.6 }}
                    aria-hidden
                  />
                </motion.a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Gallery = () => {
  // Curated gallery images from the directory
  // Curated to 32 images for better grid balance (4 columns × 8 rows)
  const galleryImages = [
    'rs=w:1024.jpeg', 'rs=w:1024_1.jpeg', 'rs=w:1024_2.jpeg', 'rs=w:1024_3.jpeg',
    'rs=w:1024_4.jpeg', 'rs=w:1024_5.jpeg', 'rs=w:1024_6.jpeg', 'rs=w:1024_7.jpeg',
    'rs=w:1024_8.jpeg', 'rs=w:1024_9.jpeg', 'rs=w:1024_10.jpeg', 'rs=w:1024_11.jpeg',
    'rs=w:1024_12.jpeg', 'rs=w:1024_13.jpeg', 'rs=w:1024_14.jpeg', 'rs=w:1024_15.jpeg',
    'rs=w:1024_16.jpeg', 'rs=w:1024_17.jpeg', 'rs=w:1024_18.jpeg', 'rs=w:1024_19.jpeg',
    'rs=w:1024_20.jpeg', 'rs=w:1024_21.jpeg', 'rs=w:1024_22.jpeg', 'rs=w:1024_23.jpeg',
    'rs=w:1024_24.jpeg', 'rs=w:1024_25.jpeg', 'rs=w:1024_26.jpeg', 'rs=w:1024_27.jpeg',
    'rs=w:1024_28.jpeg', 'rs=w:1024_29.jpeg', 'rs=w:1024_30.jpeg', 'rs=w:1024_31.jpeg'
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight/20 to-background" aria-hidden />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(76,111,255,0.08),transparent_50%)]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <div className={container}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            Gallery & Media
          </motion.span>
          <motion.h2
            id="gallery-heading"
            variants={fadeUp}
            custom={0.5}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Snapshots from{' '}
            <span className="bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent">
              global engagements
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted"
          >
            Browse a curated selection of speaking moments, strategic sessions, and cultural collaborations captured across continents.
          </motion.p>
        </motion.div>

        {/* Masonry Grid Gallery */}
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4">
          {galleryImages.map((image, index) => {
            const isLarge = index % 7 === 0
            const isMedium = index % 5 === 0
            
            return (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: (index % 12) * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative break-inside-avoid"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Image */}
                  <img
                    src={`/ramadiallondiaye.com-1763108064434/${image}`}
                    alt={`Gallery moment ${index + 1}`}
                    className={
                      isLarge
                        ? 'w-full object-cover'
                        : isMedium
                        ? 'w-full object-cover'
                        : 'w-full object-cover'
                    }
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity duration-500"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                  />
                  
                  {/* Accent Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/20 to-indigo-500/20 opacity-0"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Border Glow on Hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    animate={{
                      boxShadow:
                        hoveredIndex === index
                          ? '0 0 0 2px rgba(76, 111, 255, 0.3), 0 20px 60px rgba(76, 111, 255, 0.2)'
                          : '0 0 0 0px rgba(76, 111, 255, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Video Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-32"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
            >
              Featured Videos
            </motion.span>
            <motion.h3
              variants={fadeUp}
              custom={0.2}
              className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl"
            >
              Watch Our{' '}
              <span className="bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent">
                Impact Stories
              </span>
            </motion.h3>
          </motion.div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              { 
                title: 'Engagement of Private Sector in the Great Green Wall Initiative', 
                type: 'youtube',
                url: 'https://www.youtube.com/embed/tgCGm66rsPo'
              },
              { 
                title: 'Mali Protection Alliance', 
                type: 'youtube',
                url: 'https://www.youtube.com/embed/vkNDbf6okvg'
              },
              { 
                title: 'Mali Empire', 
                type: 'vimeo',
                url: 'https://player.vimeo.com/video/736629296?h=4fe308db03&autoplay=0&title=0&portrait=0&byline=0&badge=0'
              },
              { 
                title: 'Mali - Tourism', 
                type: 'vimeo',
                url: 'https://player.vimeo.com/video/839384564?h=73cde7eeb7&autoplay=0&title=0&portrait=0&byline=0&badge=0'
              },
            ].map((video, index) => (
              <motion.div
                key={video.title}
                variants={fadeUp}
                custom={index * 0.15}
                className="group relative"
              >
                {/* Floating Glow Background */}
                <motion.div
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                  aria-hidden
                />

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-[0_25px_80px_rgba(76,111,255,0.25)]"
                >
                  {/* Video Embed Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-midnight/80">
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Title Bar with Gradient Overlay */}
                  <div className="relative overflow-hidden border-t border-white/10 bg-midnight/40 backdrop-blur-md">
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="relative px-6 py-5">
                      <h4 className="text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-accent lg:text-lg">
                        {video.title}
                      </h4>
                      <motion.div
                        className="mt-2 h-0.5 w-0 bg-gradient-to-r from-accent to-indigo-500 transition-all duration-500 group-hover:w-16"
                        aria-hidden
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/40 to-background" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,111,255,0.15),transparent_60%)]"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -left-20 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[150px]"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-20 bottom-1/4 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-[180px]"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className={`${container} relative`}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            Contact
          </motion.span>
          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            custom={0.5}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let's{' '}
            <span className="bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent">
              collaborate
            </span>{' '}
            for change
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted"
          >
            {contactContent.message}
          </motion.p>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl lg:p-12">
            {/* Animated Gradient Orbs */}
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.4, 0.6, 0.4],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.3, 0.5, 0.3],
                x: [0, -15, 0],
                y: [0, 15, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />

            <form className="relative space-y-7">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8 text-center"
              >
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Get in Touch
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white lg:text-3xl">
                  Send me a message
                </h3>
                <p className="mt-3 text-muted">
                  Questions or comments? I'll get back to you soon!
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2">
                <motion.label
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                  />
                </motion.label>
                <motion.label
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                    <span className="text-sm font-semibold uppercase tracking-wider text-white">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                    />
                </motion.label>
              </div>
              <motion.label
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                  />
              </motion.label>
              <motion.label
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Share details about your event or collaboration."
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                  />
              </motion.label>
              
              <motion.div
                className="flex justify-center pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-accent to-indigo-500 px-10 py-5 text-lg font-bold text-white shadow-[0_15px_50px_rgba(76,111,255,0.5)] transition-all hover:shadow-[0_25px_70px_rgba(76,111,255,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {/* Shimmer Effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                  />
                  {/* Pulsing Glow */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/20"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <motion.span
                    className="relative z-10 ml-3 text-xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* reCAPTCHA Notice */}
              <motion.p
                className="mt-6 text-center text-xs text-muted/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{' '}
                apply.
              </motion.p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Partners = () => {
  const partners = [
    { name: 'SWINSUN 3D BUILDERS', logo: '/rama/swinsun-logo.jpeg' },
    { name: 'SDR', logo: '/rama/sdr-logo.jpeg' },
  ]

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight/30 to-background" aria-hidden />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(76,111,255,0.06),transparent_50%)]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      
      <div className={container}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            Our Partners
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.5}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl"
          >
            Collaborating for{' '}
            <span className="bg-gradient-to-r from-accent via-accentSoft to-accent bg-clip-text text-transparent">
              global impact
            </span>
          </motion.h2>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-12 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              custom={index * 0.2}
              whileHover={{ y: -12, scale: 1.08 }}
              className="group relative"
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/[0.1] hover:shadow-[0_20px_60px_rgba(76,111,255,0.15)]"
                whileHover={{ 
                  boxShadow: '0 0 0 1px rgba(76, 111, 255, 0.2), 0 25px 70px rgba(76, 111, 255, 0.2)'
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                
                {/* Logo */}
                <div className="relative flex h-24 w-48 items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              {/* Floating Orb on Hover */}
              <motion.div
                className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-accent/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="border-t border-white/5 bg-midnight/80 py-8">
    <div className={`${container} flex flex-col items-center justify-between gap-3 text-sm text-ivory/60 sm:flex-row`}>
      <p>© {new Date().getFullYear()} The Office of Ramatoulaye Diallo N’Diaye. All rights reserved.</p>
      <span>Crafted with purpose and passion.</span>
    </div>
  </footer>
)

const App = () => {
  const nav = useMemo(() => navLinks, [])

  return (
    <div className="min-h-screen bg-midnight text-ivory">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-midnight/80 backdrop-blur">
        <div className={`${container} flex items-center justify-between gap-8 py-5`}>
          <a
            href="#home"
            className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.3em] text-white"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-bold text-white shadow-glow">
              RD
            </span>
            R. ALLONDIAYE
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 text-sm font-medium text-ivory/70">
              {nav.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    data-cursor="interactive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" role="main" className="space-y-24">
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
