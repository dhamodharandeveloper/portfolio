import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    const node = ref.current
    if (!node) return undefined

    let frame = 0
    let x = 0
    let y = 0

    const render = () => {
      frame = 0
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
