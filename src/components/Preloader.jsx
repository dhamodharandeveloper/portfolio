import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const BOOT_LINES = [
  { text: 'INITIALIZING DHAMODHARAN SYSTEM...', at: 0, status: 'OK' },
  { text: 'LOADING DEVELOPER PROFILE...', at: 18, status: 'OK' },
  { text: 'CONNECTING NEURAL NETWORK...', at: 36, status: 'OK' },
  { text: 'LOADING SKILLS...', at: 55, status: 'OK' },
  { text: 'COMPILING PROJECT DATABASE...', at: 73, status: 'OK' },
  { text: 'SYSTEM ONLINE.', at: 91, status: 'READY' },
]

const DURATION = 5000

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const finished = useRef(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const start = performance.now()
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - start
      const next = Math.min(100, Math.round((elapsed / DURATION) * 100))
      setProgress(next)

      if (elapsed >= DURATION && !finished.current) {
        finished.current = true
        window.clearInterval(timer)
        setProgress(100)
        onComplete?.()
      }
    }, 50)

    return () => window.clearInterval(timer)
  }, [onComplete])

  const visibleLines = BOOT_LINES.filter((line) => progress >= line.at)

  return (
    <motion.div
      className="boot"
      role="status"
      aria-label="Initializing Dhamodharan system"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      exit={{
        clipPath: 'inset(0% 49.9% 0% 49.9%)',
        opacity: 0,
        transition: {
          clipPath: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
          opacity: { delay: 0.58, duration: 0.34, ease: 'easeOut' },
        },
      }}
    >
      <div className="boot__grid" aria-hidden="true" />
      <div className="boot__scan" aria-hidden="true" />
      {!reduceMotion && <div className="boot__sweep" aria-hidden="true" />}

      <div className="boot__inner">
        <div className="boot__topbar">
          <span>D // BOOT_SEQUENCE</span>
          <span>SECURE KERNEL v2.0.26</span>
        </div>

        <div className="boot__core">
          <div className="boot__orb" aria-hidden="true">
            <span className="boot__ring boot__ring--1" />
            <span className="boot__ring boot__ring--2" />
            <span className="boot__ring boot__ring--3" />
            <span className="boot__monogram">D</span>
          </div>
          <div className="boot__name">DHAMODHARAN</div>
          <div className="boot__sub">FULL STACK DEVELOPER // SYSTEM INITIALIZATION</div>
        </div>

        <div className="boot__terminal" aria-hidden="true">
          {visibleLines.map((line, index) => (
            <motion.div
              key={line.text}
              className={`boot__line ${index === visibleLines.length - 1 ? 'is-last' : ''}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <span className="prompt">›</span>
              <span>{line.text}</span>
              <span className="ok">[{line.status}]</span>
            </motion.div>
          ))}
          <span className="boot__cursor" />
        </div>

        <div className="boot__progress">
          <div className="boot__progress-head">
            <span>Loading core modules</span>
            <span>{String(progress).padStart(3, '0')}%</span>
          </div>
          <div
            className="boot__track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div className="boot__fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="boot__foot">
          <span>Secure channel // established</span>
          <span>Villupuram, IN</span>
        </div>
      </div>
    </motion.div>
  )
}
