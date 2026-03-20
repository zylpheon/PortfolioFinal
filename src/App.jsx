import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollTracker from './components/ScrollTracker.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Certifications from './sections/Certifications.jsx'
import Projects from './sections/Projects.jsx'
import Blog from './sections/Blog.jsx'
import Contact from './sections/Contact.jsx'

import { useElasticScroll } from './hooks/useElasticScroll.js'

export default function App() {
  const pageRef = useRef(null)

  // Elastic pull-to-bounce — smoother params
  useElasticScroll(pageRef, { maxPull: 60, strength: 0.10, damping: 0.88, releaseMs: 40 })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])

  return (
    <AnimatePresence>
      {/*
        ── Navbar & ScrollTracker are rendered OUTSIDE the transformed wrapper.
           This is the fix: position:fixed breaks when an ancestor has
           transform/will-change applied. Keeping them outside avoids that.
      ── */}
      <ScrollTracker />
      <Navbar />

      {/* Page load overlay wipe */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        style={{ originY: 0 }}
        className="fixed inset-0 z-[9998] bg-ink pointer-events-none"
      />

      {/*
        ── Only the page body gets elastically pulled.
           No willChange here — the hook sets transform via style directly.
      ── */}
      <motion.div
        ref={pageRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-bg"
      >
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Blog />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}