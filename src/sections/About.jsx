import { memo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/index.js'
import { useCounterAnimation } from '../hooks/useCounterAnimation.js'

const StatCard = memo(function StatCard({ label, value, suffix, inView, delay }) {
  const count = useCounterAnimation(value, 1800, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-border pt-5"
    >
      <div className="font-display font-800 text-[clamp(2.5rem,5vw,4rem)] leading-none text-ink">
        {count}
        <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-ink-muted">{suffix}</span>
      </div>
      <p className="mt-2 font-body text-sm font-500 text-ink-muted tracking-wide">{label}</p>
    </motion.div>
  )
})

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 md:py-36 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={0}
            className="section-number"
          >
            01
          </motion.span>
          <span className="w-8 h-px bg-border" />
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={0.5}
            className="section-label"
          >
            About Me
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1}
              className="font-display font-700 text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight text-ink mb-8"
            >
              Crafting digital <br />
              experiences that <br />
              <span className="italic font-400 text-ink-secondary">live & breathe.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={2}
              className="font-body text-base font-400 leading-relaxed text-ink-secondary max-w-prose"
            >
              {profile.bio}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={2.5}
              className="font-body text-base font-400 leading-relaxed text-ink-muted mt-4 max-w-prose"
            >
              Beyond writing code, I manage networks, design user interfaces, and lead projects from
              concept to deployment. I believe the best solutions come from understanding every layer
              of a system.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={3}
              className="mt-8"
            >
              <a
                href={`mailto:${profile.email}`}
                className="btn-outline inline-flex items-center gap-2"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 content-start">
            {profile.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                {...stat}
                inView={inView}
                delay={1 + i * 0.12}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
