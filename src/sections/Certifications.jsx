import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

function CertCard({ cert, index, inView }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      custom={index * 0.3}
      className={`relative group p-5 border transition-all duration-300 
  aspect-[1.414/1] flex flex-col overflow-hidden ${cert.placeholder
          ? 'border-dashed border-border hover:border-ink-muted cursor-default'
          : 'border-border hover:border-ink hover:shadow-sm cursor-pointer'
        }`}
    >
      {/* Number badge */}
      <span className="absolute top-4 right-4 font-display text-[10px] font-600 tracking-wider text-ink-muted">
        {String(cert.id).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div
        className={`w-9 h-9 flex items-center justify-center border mb-4 mt-1 transition-colors duration-300 flex-shrink-0 ${cert.placeholder
          ? 'border-border text-ink-muted'
          : 'border-border text-ink group-hover:border-ink'
          }`}
      >
        <Award size={16} strokeWidth={1.5} />
      </div>

      {/* Content — grows to fill remaining height */}
      <div className="flex flex-col flex-1 min-h-0">
        <h4
          className={`font-display text-sm font-600 leading-tight mb-1 transition-colors duration-200 ${cert.placeholder ? 'text-ink-muted' : 'text-ink'
            }`}
        >
          {cert.name}
        </h4>

        <p
          className={`font-body text-xs leading-relaxed ${cert.placeholder ? 'text-ink-muted/60' : 'text-ink-secondary'
            }`}
        >
          {cert.issuer}
        </p>

        {/* Year + link didorong ke bawah */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-body text-[11px] font-500 text-ink-muted">{cert.year}</span>

          {!cert.placeholder && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-body font-500 text-ink-secondary hover:text-ink transition-colors duration-200"
            >
              View
              <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>

      {/* Placeholder overlay */}
      {
        cert.placeholder && (
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 bg-surface/40"
          >
            <span className="section-label text-[9px]">Coming soon</span>
          </div>
        )
      }
    </motion.div >
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 border-t border-border"
    >
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
                03
              </motion.span>
              <span className="w-8 h-px bg-border" />
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="section-label"
              >
                Certifications
              </motion.span>
            </div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1}
              className="font-display font-700 text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink"
            >
              Credentials & Learning
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={2}
            className="font-body text-sm text-ink-muted max-w-xs leading-relaxed"
          >
            Formal recognitions from recognized institutions. Slots marked as coming soon will be
            updated as I earn them.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
