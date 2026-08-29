import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const bootLines = [
  'INITIALIZING SYSTEM...',
  'LOADING DEVELOPER PROFILE...',
  'LOADING SKILLS...',
  'LOADING PROJECT DATABASE...',
  'ESTABLISHING CONNECTION...',
  'ACCESS GRANTED ✓',
]

export default function Loader({ onDone }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const lineTimers = bootLines.map((_, i) => setTimeout(() => setVisibleLines(i + 1), i * 800))

    const pctTimer = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(pctTimer)
          return 100
        }
        return p + 1
      })
    }, 50)

    const doneTimer = setTimeout(onDone, 5000)

    return () => {
      lineTimers.forEach(clearTimeout)
      clearInterval(pctTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      role="status"
      aria-label="Loading portfolio system"
    >
      <div className="loader-frame">
        <div className="loader-lines">
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={line}
              className={`line ${i === bootLines.length - 1 ? 'granted' : 'done'}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {line}
            </motion.div>
          ))}
        </div>
        <div className="loader-frame__bar">
          <motion.div
            className="loader-frame__bar-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: pct / 100 }}
            transition={{ ease: 'linear', duration: 0.02 }}
          />
        </div>
        <div className="loader-pct" style={{ marginTop: 14 }}>
          {String(Math.min(pct, 100)).padStart(3, '0')}%
        </div>
      </div>
    </motion.div>
  )
}