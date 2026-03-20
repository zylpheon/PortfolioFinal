import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { blogPosts } from '../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

function BlogCard({ post, index, inView }) {
  return (
    <motion.a
      href={post.link}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      custom={index}
      className="group block border border-border hover:border-ink p-6 transition-all duration-300
                 hover:shadow-sm relative overflow-hidden"
    >
      {/* Hover fill effect */}
      <div
        className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0
                   transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <span className="section-number group-hover:text-bg/50 transition-colors duration-300">
              {post.id}
            </span>
            <span className="font-body text-xs font-500 text-ink-muted group-hover:text-bg/50 transition-colors duration-300">
              {post.date}
            </span>
          </div>
          <div className="flex items-center gap-1 text-ink-muted group-hover:text-bg/50 transition-colors duration-300">
            <Clock size={11} strokeWidth={1.5} />
            <span className="font-body text-xs">{post.readTime}</span>
          </div>
        </div>

        <h3
          className="font-display font-700 text-[clamp(1rem,1.8vw,1.3rem)] leading-[1.2]
                     tracking-tight text-ink group-hover:text-bg mb-3 transition-colors duration-300"
        >
          {post.title}
        </h3>

        <p className="font-body text-sm font-400 leading-relaxed text-ink-secondary group-hover:text-bg/70
                      transition-colors duration-300 mb-5">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-body font-500 px-2 py-0.5 border border-border
                           text-ink-muted group-hover:border-bg/30 group-hover:text-bg/60
                           transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="text-ink-muted group-hover:text-bg transition-colors duration-300
                       group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform transition-transform"
          />
        </div>
      </div>
    </motion.a>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="blog" ref={ref} className="py-28 md:py-36 px-6 md:px-10 border-t border-border">
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
                05
              </motion.span>
              <span className="w-8 h-px bg-border" />
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="section-label"
              >
                Writing
              </motion.span>
            </div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={1}
              className="font-display font-700 text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink"
            >
              Thoughts & articles
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
            All articles
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} inView={inView} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          custom={4}
          className="mt-8 text-center font-body text-xs text-ink-muted/60"
        >
          * Articles above are placeholder content — will be replaced with real posts.
        </motion.p>
      </div>
    </section>
  )
}
