import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react'
import { profile } from '../data/index.js'
import { useMagneticEffect } from '../hooks/useMagneticEffect.js'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  whatsapp: MessageCircle,
}

function SocialLink({ platform, href }) {
  const Icon = socialIcons[platform]
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.45)

  if (!Icon) return null
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 border border-border hover:border-ink
                   text-ink-secondary hover:text-ink transition-all duration-300 capitalize
                   font-display text-xs font-600 tracking-wider uppercase group"
      >
        <Icon size={14} strokeWidth={1.5} />
        {platform}
        <ArrowUpRight
          size={11}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </a>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const { ref: emailRef, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.2)

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 md:py-40 px-6 md:px-10 border-t border-border bg-surface"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="section-number"
          >
            06
          </motion.span>
          <span className="w-8 h-px bg-border" />
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="section-label"
          >
            Contact
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

          {/* Left — headline */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1}
              className="font-display font-800 text-[clamp(2.5rem,6vw,5rem)] leading-[1.0]
                         tracking-tight text-ink mb-8"
            >
              Let's build <br />
              something <br />
              <span className="italic font-400 text-ink-secondary">together.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={2}
              className="font-body text-base font-400 leading-relaxed text-ink-secondary max-w-md"
            >
              Whether you have a project in mind, want to collaborate, or just want to say hello —
              my inbox is always open.
            </motion.p>
          </div>

          {/* Right — email + socials */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1.5}
              className="section-label mb-3"
            >
              Email
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={2}
              ref={emailRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-block"
            >
              <a
                href={`mailto:${profile.email}`}
                className="font-display font-700 text-[clamp(1rem,2.5vw,1.8rem)] text-ink
                           underline underline-offset-4 decoration-border hover:decoration-ink
                           transition-all duration-300 tracking-tight break-all"
              >
                {profile.email}
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={2.5}
              className="my-8 w-full h-px bg-border"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={3}
              className="section-label mb-4"
            >
              Find me on
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={3.5}
              className="flex flex-wrap gap-3"
            >
              {Object.entries(profile.socials).map(([platform, href]) => (
                <SocialLink key={platform} platform={platform} href={href} />
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={4}
              className="mt-6 font-body text-xs text-ink-muted/60 flex items-center gap-1.5"
            >
              <Mail size={11} />
              Based in {profile.location} · Open to remote opportunities
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
