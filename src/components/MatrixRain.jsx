import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = canvas.getContext('2d')
    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/{}[]$#@&;:=+*'

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    const fontSize = 15
    let columns = Math.floor(width / fontSize)
    let drops = Array.from({ length: columns }, () => Math.random() * -50)

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 7, 13, 0.12)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillStyle = Math.random() > 0.975 ? '#00e5ff' : '#00ff9d'
        ctx.fillText(char, x, y)
        if (y > height && Math.random() > 0.965) drops[i] = 0
        drops[i] += 0.55
      }
    }

    let interval = setInterval(draw, 60)

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * -50)
    }

    window.addEventListener('resize', onResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="matrix-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="matrix-canvas" />
    </div>
  )
}