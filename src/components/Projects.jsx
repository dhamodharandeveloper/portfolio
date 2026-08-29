import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/siteData'

function projectPreviewSvg(id, accent) {
  const rows = [
    `rect x='18' y='18' width='${40 + id * 7}' height='7' rx='3.5'`,
    `rect x='18' y='34' width='${30 + id * 9}' height='7' rx='3.5'`,
    `rect x='18' y='50' width='${52 - id * 6}' height='7' rx='3.5'`,
    `rect x='18' y='66' width='${26 + id * 6}' height='7' rx='3.5'`,
  ]
  const blocks = [
    `<rect x='18' y='88' width='54' height='46' rx='6' fill='rgba(0,229,255,0.10)' stroke='rgba(0,229,255,0.35)'/>`,
    `<rect x='84' y='88' width='54' height='46' rx='6' fill='rgba(139,92,246,0.10)' stroke='rgba(139,92,246,0.35)'/>`,
  ]
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'>
    <defs>
      <linearGradient id='g${id}' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#0a1220'/>
        <stop offset='1' stop-color='#070b16'/>
      </linearGradient>
    </defs>
    <rect width='640' height='360' fill='url(#g${id})'/>
    <circle cx='530' cy='70' r='150' fill='rgba(0,255,157,0.05)'/>
    <circle cx='110' cy='300' r='130' fill='rgba(139,92,246,0.06)'/>
    ${rows.map((r) => `<${r} fill='rgba(0,255,157,${0.22 + id * 0.05})'/>`).join('')}
    ${blocks.join('')}
    <circle cx='560' cy='300' r='22' fill='none' stroke='${accent}' stroke-width='2' stroke-dasharray='4 5' opacity='0.7'/>
    <circle cx='38' cy='316' r='8' fill='none' stroke='${accent}' stroke-width='1.5' opacity='0.6'/>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, ' '))}`
}

const accents = ['#00ff9d', '#00e5ff', '#8b5cf6']

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading title="PROJECT_DATABASE" subtitle="opening_project_records // 1 found" />
      <div className="projects-grid row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {projects.map((project, i) => {
          const accent = accents[i % accents.length]
          return (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-card__media">
                <img
                  src={projectPreviewSvg(project.id, accent)}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-card__preview" aria-hidden="true">
                  <span className="project-card__preview-tag">
                    <Eye size={15} /> Preview Interface
                  </span>
                </div>
                <span className="project-card__badge">{project.status}</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__category">{project.category}</div>
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__line" />
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((t, j) => (
                    <span
                      key={t}
                      className={`project-card__tech-tag ${j % 2 ? 'project-card__tech-tag--p' : ''}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a className="btn btn--cyan" href={project.demo} aria-label={`View live demo of ${project.title}`}>
                    <ExternalLink size={14} /> View Project
                  </a>
                  <a
                    className="btn btn--purple"
                    href={project.source}
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}