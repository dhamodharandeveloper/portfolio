import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const lastActive = useRef('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            lastActive.current = entry.target.id
          }
        }
        setActive(lastActive.current)
      },
      { rootMargin: '-38% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Primary navigation">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault()
            goTo('home')
          }}
        >
          <span className="navbar__logo-bracket">&gt;_</span> DHAMODHARAN
          <span className="underscore">_</span>
        </a>

        <button
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="primary-menu"
          className={`navbar__links ${open ? 'navbar__links--open' : ''}`}
        >
          {navLinks.map((link, i) => (
            <li key={link.id} style={{ listStyle: 'none' }}>
              <motion.button
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => goTo(link.id)}
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: open ? i * 0.05 : 0, duration: 0.22 }}
              >
                <span className="nav-idx">&gt; </span>
                {link.label}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}