import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import BrandMark from './BrandMark.jsx'
import { navLinks, profile } from '../data/resume.js'

const SECTION_IDS = navLinks.map((link) => link.id)

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const frame = useRef(0)

  useEffect(() => {
    const update = () => {
      frame.current = 0
      const scrollY = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (scrollY / max) * 100) : 0)
      setScrolled(scrollY > 24)

      let current = 'home'
      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop - 150 <= scrollY) current = id
      })
      if (max > 0 && scrollY >= max - 80) current = 'contact'
      setActive(current)
    }

    const onScroll = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container-x nav__inner">
          <a href="#home" className="brand" aria-label="Dhamodharan — back to home">
            <BrandMark />
            <span className="brand__text">
              <span className="brand__name">DHAMODHARAN</span>
              <span className="brand__role">Full Stack Developer</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? 'is-active' : ''}`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-ghost btn-sm nav__cta">
            Let&apos;s Talk <FiArrowUpRight />
          </a>

          <button
            type="button"
            className="nav__burger"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="nav__progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mobile-menu__label">Navigation // 07 modules</div>
            <nav className="mobile-menu__links" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`mobile-menu__link ${active === link.id ? 'is-active' : ''}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.045, duration: 0.3 }}
                >
                  <span>0{index + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu__foot">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
              <div className="mobile-menu__socials">
                <a
                  className="social-btn"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                >
                  <FiGithub />
                </a>
                <a
                  className="social-btn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin />
                </a>
                <a
                  className="social-btn"
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram profile"
                >
                  <FiInstagram />
                </a>
                <a
                  className="social-btn"
                  href={`mailto:${profile.email}`}
                  aria-label="Send an email"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
