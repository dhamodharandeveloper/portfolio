import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: hover)').matches === false) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!raf) raf = requestAnimationFrame(step)
    }

    const step = () => {
      raf = 0
      x += (targetX - x) * 0.14
      y += (targetY - y) * 0.14
      el.style.transform = `translate(${x - 280}px, ${y - 280}px)`
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(step)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />
}