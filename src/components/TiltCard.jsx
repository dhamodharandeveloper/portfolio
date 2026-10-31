import { useRef } from 'react'

export default function TiltCard({ children, className = '', max = 6, ...rest }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse') return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height))

    node.classList.add('is-tilting')
    node.style.transform = `perspective(1100px) rotateX(${(0.5 - py) * max}deg) rotateY(${
      (px - 0.5) * max
    }deg) translateY(-2px)`
    node.style.setProperty('--mx', `${px * 100}%`)
    node.style.setProperty('--my', `${py * 100}%`)
  }

  const handleLeave = () => {
    const node = ref.current
    if (!node) return
    node.classList.remove('is-tilting')
    node.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {children}
      <span className="tilt__glare" aria-hidden="true" />
    </div>
  )
}
