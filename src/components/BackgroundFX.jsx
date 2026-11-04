import { useMemo } from 'react'

export default function BackgroundFX() {
  const particles = useMemo(
    () =>
      // 16 lightweight particles instead of 28: each one is a continuously
      // composited layer, so halving the count keeps the drift effect while
      // leaving headroom for the WebGL hero on low-end devices.
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${(index * 61.8) % 100}%`,
        size: index % 6 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
        duration: 18 + ((index * 13) % 26),
        delay: -((index * 7) % 38),
        opacity: 0.25 + ((index * 11) % 40) / 100,
      })),
    [],
  )

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx__grid" />
      <div className="bg-fx__beam" />
      <div className="bg-fx__noise" />
      <div className="bg-fx__scanlines" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="bg-fx__particle"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}
