import { useRef, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './hooks/useTheme.jsx'   // ← tambah ini

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollTracker from './components/ScrollTracker.jsx'
import Hero from './sections/Hero.jsx'

import { useElasticScroll } from './hooks/useElasticScroll.js'

const About = lazy(() => import('./sections/About.jsx'))
const Skills = lazy(() => import('./sections/Skills.jsx'))
const Certifications = lazy(() => import('./sections/Certifications.jsx'))
const Projects = lazy(() => import('./sections/Projects.jsx'))
const Blog = lazy(() => import('./sections/Blog.jsx'))
const Contact = lazy(() => import('./sections/Contact.jsx'))

export default function App() {
  const pageRef = useRef(null)
  useElasticScroll(pageRef, { maxPull: 60, strength: 0.10, damping: 0.88, releaseMs: 40 })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])

  return (
    <ThemeProvider>  {/* ← tambah wrapper ini */}
      <AnimatePresence>
        <ScrollTracker />
        <Navbar />

        <div className="fixed bottom-0 left-0 right-0 z-[1] flex items-center justify-center pb-10 pointer-events-none select-none">
          <p
            className="font-display text-[10px] font-600 tracking-widest uppercase"
            style={{ color: '#8A8783' }}
          >
            /// You have reached the end of this page ///
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          style={{ originY: 0 }}
          className="fixed inset-0 z-[9998] bg-ink pointer-events-none"
        />

        <motion.div
          ref={pageRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 min-h-screen bg-bg"
        >
          <main>
            <Hero />
            <Suspense fallback={null}>
              <About />
              <Skills />
              <Certifications />
              <Projects />
              <Blog />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}