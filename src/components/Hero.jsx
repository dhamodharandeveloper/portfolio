import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, MessageSquare, FolderOpen } from 'lucide-react'
import ParticleField from './ParticleField'
import { profile, rotatingRoles } from '../data/siteData'

const roles = rotatingRoles
const ROLE_DURATION = 2600
const BOOT_TEXT = 'SYSTEM INITIALIZED...'
const NAME_TEXT = 'DHAMODHARAN'
const TYPING_TOTAL = 3000
const CHAR_MS = Math.round(TYPING_TOTAL / (BOOT_TEXT.length + NAME_TEXT.length))
const NAME_DELAY = BOOT_TEXT.length * CHAR_MS

function useTypewriter(text, charMs, startDelay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    let iv = undefined
    const start = setTimeout(() => {
      iv = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(iv)
            return text.length
          }
          return c + 1
        })
      }, charMs)
    }, startDelay)
    return () => {
      clearTimeout(start)
      if (iv) clearInterval(iv)
    }
  }, [text, charMs, startDelay])

  return { typed: text.slice(0, count), done: count >= text.length }
}

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
  const boot = useTypewriter(BOOT_TEXT, CHAR_MS, 0)
  const name = useTypewriter(NAME_TEXT, CHAR_MS, NAME_DELAY)

  useEffect(() => {
    const t = setTimeout(() => setRoleIndex((i) => (i + 1) % roles.length), ROLE_DURATION)
    return () => clearTimeout(t)
  }, [roleIndex])

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero__cyber-grid" aria-hidden="true" />
      <div className="hero__glow-center" aria-hidden="true" />
      <div className="hero__ring" aria-hidden="true" />
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
          <span className="dot" /> {boot.typed}
          {!boot.done && <span className="terminal__cursor" aria-hidden="true" />}
        </motion.div>

        <motion.h1
          className="hero__name glitch"
          data-text={NAME_TEXT}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="n-name">{name.typed}</span>
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