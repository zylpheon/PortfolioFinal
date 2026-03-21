import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const SECTIONS = [
    { id: 'hero', label: 'Top' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certs' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
]

export default function ScrollTracker() {
    const { scrollYProgress } = useScroll()

    // Smooth spring for the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        restDelta: 0.001,
    })

    // Active section tracking
    const [activeSection, setActiveSection] = useState('hero')
    const [scrollPct, setScrollPct] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY
            const total = document.documentElement.scrollHeight - window.innerHeight
            const pct = total > 0 ? Math.min(Math.round((scrolled / total) * 100), 100) : 0
            setScrollPct(pct)
            setVisible(scrolled > 80)

            // Determine active section
            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const el = document.getElementById(SECTIONS[i].id)
                if (el) {
                    const top = el.getBoundingClientRect().top
                    if (top <= window.innerHeight * 0.45) {
                        setActiveSection(SECTIONS[i].id)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* ── Top progress bar ── */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[2px] bg-ink z-[9999] origin-left
                   shadow-[0_0_6px_rgba(17,17,17,0.35)]"
            />

            {/* ── Right-side section dots ── */}
            <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-5 top-1/2 -translate-y-1/2 z-50
                   flex flex-col items-end gap-3 pointer-events-none"
            >
                {SECTIONS.map((section) => {
                    const isActive = activeSection === section.id
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            title={section.label}
                            className="pointer-events-auto flex items-center gap-2 group"
                            aria-label={`Scroll to ${section.label}`}
                        >
                            {/* Label — only shows on hover */}
                            <span
                                className="font-display text-[9px] font-600 tracking-widest uppercase
                           text-ink-muted opacity-0 group-hover:opacity-100
                           transition-all duration-200 translate-x-1 group-hover:translate-x-0
                           select-none"
                            >
                                {section.label}
                            </span>

                            {/* Dot */}
                            <span
                                className={`block rounded-full transition-all duration-300
                  ${isActive
                                        ? 'w-[10px] h-[10px] bg-ink'
                                        : 'w-[5px] h-[5px] bg-ink-muted group-hover:bg-ink-secondary'
                                    }`}
                            />
                        </button>
                    )
                })}

                {/* Scroll percentage */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visible ? 1 : 0 }}
                    className="font-display text-[8px] font-600 tracking-wider text-ink-muted mt-1 select-none"
                >
                    {scrollPct}%
                </motion.span>
            </motion.div>
        </>
    )
}