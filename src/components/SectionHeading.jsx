import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, label, title, subtitle, side }) {
  return (
    <Reveal>
      <div className="section-head">
        <div>
          <span className="eyebrow">
            {index} // {label}
          </span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>
        {side && <div className="section-head__side">{side}</div>}
      </div>
    </Reveal>
  )
}
