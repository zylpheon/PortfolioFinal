import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Certifications from './sections/Certifications.jsx'
import Projects from './sections/Projects.jsx'
import Blog from './sections/Blog.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  // Smooth scroll polyfill guard
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-bg"
      >
        {/* ── Page load overlay wipe ── */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          style={{ originY: 0 }}
          className="fixed inset-0 z-[9998] bg-ink pointer-events-none"
        />

        <Navbar />

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
