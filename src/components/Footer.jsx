import { motion } from 'framer-motion'
import { profile } from '../data/index.js'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Monogram + copyright */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-display text-sm font-700 tracking-widest text-ink uppercase"
          >
            {profile.initials}
          </a>
          <span className="w-px h-4 bg-border" />
          <p className="font-body text-xs text-ink-muted">
            © {year} {profile.name}
          </p>
        </div>

        {/* Footer nav */}
        <nav className="flex flex-wrap items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs font-500 text-ink-muted hover:text-ink
                         transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Back to top */}
        <motion.a
          href="#"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="font-display text-[10px] font-600 tracking-widest uppercase text-ink-muted
                     hover:text-ink transition-colors duration-200 hidden lg:block"
        >
          Back to top ↑
        </motion.a>
      </div>
    </footer>
  )
}
