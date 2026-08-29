import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { profile, socials } from '../data/siteData'

const icons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__motto">
        CODE<span className="sepf"> • </span>DESIGN<span className="sepf"> • </span>
        CREATE<span className="sepf"> • </span>GROW
      </div>

      <div className="footer__name">DHAMODHARAN</div>
      <div className="footer__role">Frontend Developer | Web Designer</div>

      <div className="footer__socials">
        {Object.entries(socials).map(([key, social]) => {
          const Icon = icons[key]
          return (
            <a
              key={key}
              className="footer__social"
              href={social.url}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
            >
              <Icon />
            </a>
          )
        })}
      </div>

      <div className="footer__copy">© {year} DHAMODHARAN</div>
      <div className="footer__sysline">SYS:LINK ACTIVE — {profile.location.toUpperCase()}</div>
    </footer>
  )
}