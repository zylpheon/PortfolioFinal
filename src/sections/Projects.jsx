import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/index.js'
import { useMagneticEffect } from '../hooks/useMagneticEffect.js'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ProjectRow({ project, index, inView }) {
  const {
    ref: liveRef,
    handleMouseMove: liveMove,
    handleMouseLeave: liveLeave,
  } = useMagneticEffect(0.4)
  const {
    ref: repoRef,
    handleMouseMove: repoMove,
    handleMouseLeave: repoLeave,
  } = useMagneticEffect(0.4)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      custom={index}
      className="group grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12
                 py-10 border-b border-border items-start"
    >
      {/* Project number + year */}
      <div className="flex lg:flex-col gap-4 lg:gap-2">
        <span className="font-display text-[clamp(2rem,4vw,3.5rem)] font-800 leading-none text-border
                         group-hover:text-ink transition-colors duration-500">
          {project.id}
        </span>
        <span className="font-body text-xs font-500 text-ink-muted self-end lg:self-auto">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div>
        <p className="section-label mb-2">{project.tagline}</p>
        <h3
          className="font-display font-700 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.1]
                     tracking-tight text-ink mb-4 group-hover:translate-x-1 transition-transform duration-300"
        >
          {project.name}
        </h3>
        <p className="font-body text-sm font-400 leading-relaxed text-ink-secondary max-w-xl mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag text-[11px]">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex lg:flex-col items-start gap-3">
        <div ref={liveRef} onMouseMove={liveMove} onMouseLeave={liveLeave}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-ink font-display
                       text-xs font-600 tracking-wider uppercase text-ink bg-transparent
                       hover:bg-ink hover:text-bg transition-all duration-300 whitespace-nowrap"
          >
            Live Demo
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div ref={repoRef} onMouseMove={repoMove} onMouseLeave={repoLeave}>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-border font-display
                       text-xs font-600 tracking-wider uppercase text-ink-secondary
                       hover:border-ink hover:text-ink transition-all duration-300 whitespace-nowrap"
          >
            <Github size={13} />
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 border-t border-border bg-surface"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="section-number"
              >
                04
              </motion.span>
              <span className="w-8 h-px bg-border" />
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="section-label"
              >
                Featured Projects
              </motion.span>
            </div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1}
              className="font-display font-700 text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink"
            >
              Selected work
            </motion.h2>
          </div>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={2}
            href="#"
            className="flex items-center gap-2 font-body text-sm font-500 text-ink-secondary
                       underline underline-offset-4 decoration-border hover:text-ink
                       hover:decoration-ink transition-all duration-200 self-start md:self-auto"
          >
            All projects
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
