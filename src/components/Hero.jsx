import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, MessageSquare, FolderOpen } from 'lucide-react'
import ParticleField from './ParticleField'
import { profile, rotatingRoles } from '../data/siteData'

const roles = rotatingRoles
const ROLE_DURATION = 2600

function RotatingRole({ roleIndex }) {
  const [text, setText] = useState('')
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const word = roles[roleIndex]
    let char = 0
    setText('')

    const typeTimer = setInterval(() => {
      char += 1
      setText(word.slice(0, char))
      if (char >= word.length) clearInterval(typeTimer)
    }, 70)

    return () => clearInterval(typeTimer)
  }, [roleIndex])

  useEffect(() => {
    const word = roles[roleIndex]
    const holdAt = word.length * 70 + 420
    setCursorOn(true)
    const timer = setTimeout(() => setCursorOn(false), holdAt)
    return () => clearTimeout(timer)
  }, [roleIndex])

  return (
    <div className="hero__role" aria-live="polite">
      {text}
      {cursorOn && <span className="terminal__cursor" aria-hidden="true" />}
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setRoleIndex((i) => (i + 1) % roles.length), ROLE_DURATION)
    return () => clearTimeout(t)
  }, [roleIndex])

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero__cyber-grid" aria-hidden="true" />
      <div className="hero__glow-center" aria-hidden="true" />
      <ParticleField />

      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />
      <div className="hero__hud hero__hud--tl" aria-hidden="true">
        SYS.LINK // ACTIVE
      </div>
      <div className="hero__hud hero__hud--tr" aria-hidden="true">
        NODE: 13.9799°N 79.4870°E
      </div>
      <div className="hero__hud hero__hud--bl" aria-hidden="true">
        ADMIN: DHAMODHARAN
      </div>
      <div className="hero__hud hero__hud--br" aria-hidden="true">
        BUILD v1.0.0 — © 2026
      </div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        <motion.div className="hero__boot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <span className="dot" /> SYSTEM INITIALIZED...
        </motion.div>

        <motion.h1
          className="hero__name glitch"
          data-text="DHAMODHARAN"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
        >
          <span className="n-name">DHAMODHARAN</span>
          <span className="cursor-line" aria-hidden="true" />
        </motion.h1>

        <motion.div
          className="hero__roles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <RotatingRole roleIndex={roleIndex} />
        </motion.div>

        <motion.p className="hero__tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
          Creating <span className="t-green">responsive</span>, <span className="t-cyan">user-friendly</span>
          <br />
          &amp; professional web experiences.
        </motion.p>

        <motion.div
          className="hero__status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="dot" /> {profile.status}
        </motion.div>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6 }}
        >
          <button className="btn" type="button" onClick={() => goTo('projects')}>
            <FolderOpen size={16} /> View Projects
          </button>
          <button className="btn btn--cyan" type="button" onClick={() => goTo('contact')}>
            <MessageSquare size={16} /> Connect With Me
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ cursor: 'pointer' }}
        onClick={() => goTo('about')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && goTo('about')}
      >
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
        <ArrowDown size={14} />
      </motion.div>
    </section>
  )
}