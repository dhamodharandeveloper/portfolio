import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import BrandMark from './BrandMark.jsx'
import { navLinks, profile } from '../data/resume.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-x">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="brand" aria-label="Dhamodharan — back to home">
              <BrandMark size={34} />
              <span className="brand__text">
                <span className="brand__name">DHAMODHARAN</span>
                <span className="brand__role">Full Stack Developer</span>
              </span>
            </a>
            <p>
              Aspiring Java Full Stack Developer based in Villupuram, Tamil Nadu. Building
              responsive, user-friendly web applications with Java, Spring Boot, React.js and MySQL.
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__col">
              <h4>Navigate</h4>
              {navLinks.slice(0, 4).map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer__col">
              <h4>Explore</h4>
              {navLinks.slice(4).map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
              <a href={profile.resumeFile} download="DHAMODHARAN_S_Resume.pdf">
                Resume PDF
              </a>
            </div>

            <div className="footer__col">
              <h4>Connect</h4>
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            </div>
          </div>
        </div>

        <div className="footer__big" aria-hidden="true">
          DHAMODHARAN
        </div>

        <div className="footer__bottom">
          <span>
            © {year} Dhamodharan. <strong>All rights reserved.</strong>
          </span>
          <span>Built with React, Three.js &amp; Framer Motion.</span>
          <div className="footer__bottom-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram profile"
            >
              <FiInstagram />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email">
              <FiMail />
            </a>
            <a href="#home" className="footer__top-btn">
              Back to top <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
