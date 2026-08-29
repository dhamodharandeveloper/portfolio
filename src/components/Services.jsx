import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Layers, MonitorSmartphone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { services } from '../data/siteData'

const iconMap = {
  code: Code2,
  palette: Palette,
  layers: Layers,
  monitor: MonitorSmartphone,
}

function TiltCard({ children, className }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: 'perspective(900px)' }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <section className="section" id="services">
      <SectionHeading title="WHAT_I_DO" subtitle="services_online // capabilities_4" />
      <div className="services-grid row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 g-lg-4">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Code2
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
            >
              <TiltCard className="service-card h-100">
                <div className="service-card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}