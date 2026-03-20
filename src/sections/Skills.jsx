import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SkillCategory({ category, items, inView, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      custom={index * 0.5}
      className="py-5 border-b border-border last:border-b-0 group"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        {/* Category name */}
        <div className="sm:w-44 flex-shrink-0">
          <span className="font-display text-xs font-600 tracking-widest uppercase text-ink-muted
                           group-hover:text-ink transition-colors duration-300">
            {category}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.08 + i * 0.04,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-28 md:py-36 px-6 md:px-10 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="section-number"
              >
                02
              </motion.span>
              <span className="w-8 h-px bg-border" />
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="section-label"
              >
                Skills & Stack
              </motion.span>
            </div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1}
              className="font-display font-700 text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink"
            >
              What I work with
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={2}
            className="font-body text-sm text-ink-muted max-w-xs leading-relaxed"
          >
            A curated set of technologies I've used in production — spanning front to back, and
            beyond the browser.
          </motion.p>
        </div>

        {/* Skills list */}
        <div className="border-t border-border">
          {skills.map((skill, i) => (
            <SkillCategory
              key={skill.category}
              {...skill}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
