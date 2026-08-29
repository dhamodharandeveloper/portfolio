import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      className="section-head"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <h2 className="section-title">
        <span className="prompt">&gt;</span> {title}
        <span className="title-tail">_</span>
      </h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
      <div className="section-title-line" />
    </motion.div>
  )
}