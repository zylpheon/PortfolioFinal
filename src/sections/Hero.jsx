import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, MapPin } from 'lucide-react'
import { profile } from '../data/index.js'
import { useMagneticEffect } from '../hooks/useMagneticEffect.js'

// Split string into span elements for staggered animation
function SplitText({ text, className, staggerDelay = 0.04, baseDelay = 0.4, charClassName = '' }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            delay: baseDelay + i * staggerDelay,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`inline-block ${charClassName}`}
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const indicatorY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const { ref: ctaRef, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.4)

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10"
    >
      {/* ── Background grid lines (decorative) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Vertical accent line ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="absolute left-6 md:left-10 top-24 bottom-24 w-px bg-border"
      />

      {/* ── Main content ── */}
      <div className="max-w-7xl w-full mx-auto pt-24 pb-16">

        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex items-center gap-3 mb-8 pl-6 md:pl-0"
        >
          <span className="w-6 h-px bg-ink-muted" />
          <span className="section-label">{profile.role}</span>
        </motion.div>

        {/* ── Display name (parallax) ── */}
        <motion.div style={{ y: nameY }} className="overflow-hidden pl-6 md:pl-0">
          <h1 className="font-display font-800 leading-[0.9] tracking-tight text-ink">
            {/* First name — very large */}
            <div className="overflow-hidden">
              <div className="text-[clamp(4rem,14vw,12rem)] leading-[0.88]">
                <div className="overflow-hidden">
                  <SplitText text="VALENTINO" staggerDelay={0.03} baseDelay={0.4} />
                </div>
              </div>
            </div>

            {/* Last names — slightly smaller, offset right */}
            <div className="overflow-hidden md:pl-4">
              <div
                className="text-[clamp(1.5rem,4.5vw,4.2rem)] font-500 text-ink-secondary mt-1"
              >
                <SplitText
                  text="LOVERADO RINUMPOKO"
                  staggerDelay={0.025}
                  className="tracking-[0.08em]"
                />
              </div>
            </div>
          </h1>
        </motion.div>

        {/* ── Divider + tagline ── */}
        <motion.div
          style={{ y: subtitleY }}
          className="mt-10 md:mt-12 pl-6 md:pl-0 flex flex-col md:flex-row md:items-end gap-6 md:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="hidden md:block w-24 h-px bg-ink"
          />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="font-body text-[clamp(1rem,2vw,1.35rem)] font-300 italic text-ink-secondary max-w-md"
            >
              "{profile.tagline}"
            </motion.p>

            {/* Location + other roles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              <span className="flex items-center gap-1.5 text-sm font-body font-400 text-ink-muted">
                <MapPin size={13} strokeWidth={1.5} />
                {profile.location}
              </span>
              <span className="h-3 w-px bg-border hidden sm:block" />
              {profile.otherRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs font-body font-500 text-ink-muted border border-border
                             px-2.5 py-1 rounded-full"
                >
                  {role}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.7 }}
          className="mt-12 pl-6 md:pl-0 flex items-center gap-6"
        >
          <div
            ref={ctaRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowDownRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="font-body text-sm font-500 text-ink-secondary underline underline-offset-4
                       decoration-border hover:text-ink hover:decoration-ink transition-colors duration-200"
          >
            {profile.email}
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ y: indicatorY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[9px]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-ink-muted"
        />
      </motion.div>
    </section>
  )
}
