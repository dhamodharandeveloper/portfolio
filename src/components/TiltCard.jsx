import { useRef } from 'react'

export default function TiltCard({ children, className = '', max = 6, ...rest }) {
  const ref = useRef(null)
  const rectRef = useRef(null)
  const rectAtRef = useRef(0)
  const frameRef = useRef(0)
  const pointRef = useRef({ x: 0, y: 0 })

  const apply = () => {
    frameRef.current = 0
    const node = ref.current
    if (!node) return

    // Re-measure at most every 250ms so scrolling under a hovered card stays
    // accurate without forcing a layout read on every pointer event.
    const now = performance.now()
    if (!rectRef.current || now - rectAtRef.current > 250) {
      rectRef.current = node.getBoundingClientRect()
      rectAtRef.current = now
    }

    const rect = rectRef.current
    const { x, y } = pointRef.current
    const px = Math.min(1, Math.max(0, (x - rect.left) / rect.width))
    const py = Math.min(1, Math.max(0, (y - rect.top) / rect.height))

    node.style.transform = `perspective(1100px) rotateX(${(0.5 - py) * max}deg) rotateY(${
      (px - 0.5) * max
    }deg) translateY(-2px)`
    node.style.setProperty('--mx', `${px * 100}%`)
    node.style.setProperty('--my', `${py * 100}%`)
  }

  const handleEnter = (event) => {
    if (event.pointerType !== 'mouse') return
    const node = ref.current
    if (!node) return
    rectRef.current = node.getBoundingClientRect()
    rectAtRef.current = performance.now()
    node.classList.add('is-tilting')
  }

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse') return
    pointRef.current = { x: event.clientX, y: event.clientY }
    if (!frameRef.current) frameRef.current = requestAnimationFrame(apply)
  }

  const handleLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
    const node = ref.current
    if (!node) return
    rectRef.current = null
    node.classList.remove('is-tilting')
    node.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerEnter={handleEnter}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {children}
      <span className="tilt__glare" aria-hidden="true" />
    </div>
  )
}
