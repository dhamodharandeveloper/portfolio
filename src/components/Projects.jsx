import { FiCalendar, FiCode, FiExternalLink } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Projects"
          title="Real builds, engineered end to end"
          subtitle="Resume-listed web builds focused on real operational workflows — hostel administration, library management, and an e-commerce storefront."
          side={
            <>
              <strong>03 projects</strong>
              2024 — 2026
            </>
          }
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <TiltCard className="project-card glass frame" max={4}>
                <div className="project-card__visual">
                  <ProjectVisual variant={project.visual} image={project.image} />
                </div>

                <div className="project-card__body">
                  <div className="project-meta">
                    <span>Project {project.index}</span>
                    <span className="date">
                      <FiCalendar /> {project.date}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <ul className="project-points">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="project-tags" aria-label="Project modules">
                    {project.modules.map((module) => (
                      <span className="tag" key={module}>
                        {module}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FiExternalLink /> Visit live site
                    </a>
                  )}

                  <div className="project-foot">
                    <span className="project-type">
                      <FiCode /> {project.type}
                    </span>
                    <span className="project-status">
                      <span className="status-dot" />{' '}
                      {project.status ?? 'Academic project'}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
