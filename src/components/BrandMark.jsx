import { useId } from 'react'

export default function BrandMark({ size = 38 }) {
  const rawId = useId()
  const id = `brand-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg
      className="brand__mark"
      width={size}
      height={size * 1.1}
      viewBox="0 0 40 44"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="4" y1="2" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="0.55" stopColor="#258BFF" />
          <stop offset="1" stopColor="#1677FF" />
        </linearGradient>
      </defs>
      <path
        d="M20 1.6 37.2 11.4v21.2L20 42.4 2.8 32.6V11.4Z"
        fill="rgba(8,23,43,0.72)"
        stroke={`url(#${id})`}
        strokeWidth="1.3"
      />
      <path
        d="M20 6.4 33 13.9v16.2L20 37.6 7 30.1V13.9Z"
        stroke="#164B83"
        strokeWidth="0.8"
        strokeDasharray="2.5 3"
      />
      <text
        x="20"
        y="26.4"
        textAnchor="middle"
        fontFamily="Orbitron, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        D
      </text>
      <circle cx="20" cy="1.6" r="1.4" fill="#00E5FF" />
    </svg>
  )
}
