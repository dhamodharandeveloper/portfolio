import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 28 : 60
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
    }))

    const LINK_DIST = 120

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 229, 255, 0.55)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 255, 157, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    if (reduced) {
      draw()
      return
    }

    const interval = setInterval(draw, 40)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', onResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
}