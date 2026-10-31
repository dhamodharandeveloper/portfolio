import { FiAward, FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { certifications } from '../data/resume.js'

export default function Certifications() {
  const certification = certifications[0]

  return (
    <section id="certifications" className="section certifications">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Verified training record"
          subtitle="Industry training completed through TCS iON, documented with a certificate of participation."
          side={
            <>
              <strong>01 credential</strong>
              JUNE 2025
            </>
          }
        />

        <Reveal>
          <article className="cert-card glass frame">
            <div className="cert-card__pattern" aria-hidden="true" />
            <div className="cert-card__glow" aria-hidden="true" />
            <div className="cert-card__shine" aria-hidden="true" />

            <div className="cert-seal">
              <span className="cert-seal__orbit" aria-hidden="true" />
              <div className="cert-seal__hex" aria-hidden="true">
                <div className="cert-seal__hex-inner">
                  <FiAward />
                  <span>TCS iON</span>
                </div>
              </div>
              <span className="cert-seal__caption">Training credential</span>
            </div>

            <div className="cert-body">
              <div className="cert-meta">
                <span>Credential // 01</span>
                <span>{certification.date}</span>
              </div>

              <h3 className="cert-title">{certification.title}</h3>
              <p className="cert-org">{certification.organisation}</p>

              <div className="cert-training">
                <span>Project / Training</span>
                <strong>{certification.training}</strong>
              </div>

              <div className="cert-foot">
                <span className="cert-badge">
                  <FiCheckCircle /> {certification.certificate}
                </span>
                <span className="cert-id">Issued 06 / 2025</span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
