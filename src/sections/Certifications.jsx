import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'
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
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      custom={index * 0.3}
      className="relative overflow-hidden border border-border aspect-[1.414/1]"
    >
      {!imgError ? (
        /* ── Certificate image — pure display, no zoom, no overlay ── */
        <img
          src={`/certificates/cert-${cert.id}.webp`}
          alt={cert.placeholder ? `Certificate ${cert.id}` : cert.name}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
          draggable={false}
        />
      ) : (
        /* ── Fallback when image not yet available ── */
        <div className="w-full h-full bg-surface flex flex-col items-center justify-center gap-2">
          <Award size={20} strokeWidth={1.3} className="text-ink-muted/50" />
          <span className="font-display text-[8px] font-600 tracking-widest uppercase text-ink-muted/40">
            {String(cert.id).padStart(2, '0')}
          </span>
        </div>
      )}
    </motion.div>
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
            Formal recognitions from recognized institutions. More slots will be
            filled as new certifications are earned.
          </motion.p>
        </div>

        {/* Grid — pure image tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}