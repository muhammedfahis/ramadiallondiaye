import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroHighlights, biography, projects, galleryHighlights, contactContent } from './data/content'
import './App.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Rama' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const lineGlowVariants = {
  initial: { width: '0%' },
  animate: {
    width: '100%',
    transition: { duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
  },
}

const pulseVariants = {
  initial: { opacity: 0.3, scale: 0.9 },
  animate: {
    opacity: [0.2, 0.6, 0.2],
    scale: [0.95, 1.02, 0.95],
    transition: { duration: 6, ease: 'easeInOut', repeat: Infinity },
  },
}

const FloatingElement = ({ delay = 0, children, className }) => (
  <motion.div
    className={className}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -12, 0], opacity: 1 }}
    transition={{ delay, duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
)

const HighlightBadge = ({ accent }) => (
  <motion.span className="accent-badge" variants={fadeIn}>
    <motion.span className="badge-glow" variants={pulseVariants} initial="initial" animate="animate" />
    {accent}
  </motion.span>
)

const Hero = () => (
  <section id="home" className="section hero">
    <div className="section-inner">
      <div className="hero-badge">The Office of Ramatoulaye Diallo N’Diaye</div>
      <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
        Championing Culture, Climate Resilience & Inclusive Growth
      </motion.h1>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1}>
        Rama is an international public speaker, former Minister for Culture and Tourism of Mali, and a lifelong
        advocate for communities across Africa.
      </motion.p>
      <AnimatePresence>
        <motion.ul
          className="hero-highlights"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {heroHighlights.map((item, index) => (
            <motion.li key={item.title} className="hero-highlight" variants={fadeIn} custom={index + 1}>
              <HighlightBadge accent={item.accent} />
              <p>{item.title}</p>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
      <div className="hero-cta">
        <motion.a
          href="#contact"
          className="button primary"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Book Rama for a keynote
        </motion.a>
        <motion.a
          href="#projects"
          className="button ghost"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Explore initiatives
        </motion.a>
      </div>
    </div>
    <FloatingElement className="hero-orb orb-1" />
    <FloatingElement className="hero-orb orb-2" delay={1.2} />
    <FloatingElement className="hero-orb orb-3" delay={2.4} />
  </section>
)

const About = () => (
  <section id="about" className="section about">
    <div className="section-inner">
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <span className="section-kicker">About Rama</span>
        <h2>Leading with empathy, experience and vision</h2>
        <motion.div className="underline" variants={lineGlowVariants} initial="initial" animate="animate" />
      </motion.div>
      <div className="about-grid">
        <motion.div
          className="about-intro"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <p>{biography.intro}</p>
          <motion.div className="quote-card" variants={fadeIn} custom={1}>
            <FloatingElement className="quote-orb" />
            <p>{biography.affirmations[0]}</p>
            <span>{biography.affirmations[1]}</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="about-story"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {biography.story.map((paragraph, index) => (
            <motion.p key={index} variants={fadeIn} custom={index / 2 + 1}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="section-inner">
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <span className="section-kicker">Impact Projects</span>
        <h2>Pioneering initiatives across culture & climate</h2>
      </motion.div>
      <motion.div className="projects-grid" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {projects.map((project, index) => (
          <motion.article key={project.name} className="project-card" variants={fadeIn} custom={index + 1}>
            <FloatingElement className="card-glow" delay={index * 0.8} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="arrow">→</span>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

const Gallery = () => (
  <section id="gallery" className="section gallery">
    <div className="section-inner">
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <span className="section-kicker">Gallery & Media</span>
        <h2>Snapshots from global engagements</h2>
      </motion.div>
      <motion.div className="gallery-content" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="gallery-events" variants={fadeIn}>
          <h3>Recent Highlights</h3>
          <ul>
            {galleryHighlights.events.map((event, index) => (
              <motion.li key={event} variants={fadeIn} custom={index / 3 + 1}>
                <span className="bullet" />
                {event}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="gallery-media" variants={fadeIn} custom={2}>
          <h3>Featured Stories & Media</h3>
          <ul>
            {galleryHighlights.media.map((item, index) => (
              <motion.li key={item} variants={fadeIn} custom={index / 4 + 1}>
                <span className="badge">Media</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="section-inner">
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <span className="section-kicker">Contact</span>
        <h2>Let’s collaborate for change</h2>
      </motion.div>
      <motion.div className="contact-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <FloatingElement className="contact-glow" delay={1.5} />
        <h3>{contactContent.heading}</h3>
        <p>{contactContent.message}</p>
        <div className="office">{contactContent.office}</div>
        <a className="button primary" href="mailto:contact@ramadiallondiaye.com">
          contact@ramadiallondiaye.com
        </a>
      </motion.div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} The Office of Ramatoulaye Diallo N’Diaye. All rights reserved.</p>
      <span>Crafted with purpose and passion.</span>
    </div>
  </footer>
)

const App = () => {
  const nav = useMemo(() => navLinks, [])

  return (
    <div className="app">
      <header className="top-nav">
        <div className="nav-inner">
          <a href="#home" className="brand">
            <span className="brand-accent" />
            Rama Diallo N’Diaye
          </a>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
