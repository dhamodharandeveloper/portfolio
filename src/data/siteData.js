import cocoElitePreview from '../assets/coco elite.png'
import profilePreview from '../assets/profile.png'

export const profile = {
  name: 'DHAMODHARAN',
  role: 'Frontend Developer',
  roleAlt: 'Web Designer',
  tagline: 'Creating responsive, user-friendly & professional web experiences.',
  email: 'sdhamo10@gmail.com',
  location: 'Villupuram, Tamil Nadu, India',
  github: 'dhamodharan63',
  status: 'Open to Work • Learning • Building • Growing',
}

export const rotatingRoles = [
  'Frontend Developer',
  'Web Designer',
  'UI Creator',
  'JavaScript Developer',
  'Creative Developer',
]

export const skills = [
  {
    id: 'html',
    name: 'HTML5',
    level: 95,
    status: 'EXPERT',
    code: '<!DOCTYPE html>',
    color: '#ff6b4a',
    logo: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
  },
  {
    id: 'css',
    name: 'CSS3',
    level: 90,
    status: 'EXPERT',
    code: '.cyber { }',
    color: '#38bdf8',
    logo: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    level: 95,
    status: 'EXPERT',
    code: 'col-lg-6',
    color: '#a855f7',
    logo: 'M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z',
  },
  {
    id: 'js',
    name: 'JavaScript',
    level: 85,
    status: 'ADVANCED',
    code: 'console.log()',
    color: '#facc15',
    logo: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
  },
]

export const techStack = [
  { name: 'HTML', short: 'HTML', className: 'h' },
  { name: 'CSS', short: 'CSS', className: 'c' },
  { name: 'JavaScript', short: 'JS', className: 'j' },
  { name: 'Bootstrap', short: 'B', className: 'b' },
]

export const projects = [
  {
    id: 4,
    title: 'COCO ELITE',
    category: 'E-COMMERCE WEBSITE',
    description:
      'A full multi-page e-commerce platform for CS Food — premium desiccated coconut products with catalog, cart, order tracking and shop-ready flows.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    demo: 'https://www.csfood.in/',
    source: '#',
    status: 'ONLINE',
    preview: cocoElitePreview,
  },
  {
    id: 5,
    title: 'MY PROFILE',
    category: 'PORTFOLIO WEBSITE',
    description:
      'A personal portfolio site — fully responsive about, skills, and contact profile, built with pure HTML, CSS, Bootstrap, and JavaScript.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    demo: 'https://dhamodharan63.github.io/My-Profile/',
    source: 'https://github.com/dhamodharan63/My-Profile',
    status: 'ONLINE',
    preview: profilePreview,
  },
]

export const projectPlaceholderAlt =
  'Project preview interface for '

export const services = [
  {
    id: 'web-dev',
    title: 'WEB DEVELOPMENT',
    description:
      'Building responsive and functional websites using modern frontend technologies.',
    icon: 'code',
  },
  {
    id: 'web-design',
    title: 'WEB DESIGN',
    description:
      'Creating clean, professional, and user-friendly website interfaces.',
    icon: 'palette',
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    description:
      'Creating visual content and engaging digital experiences.',
    icon: 'layers',
  },
  {
    id: 'responsive-design',
    title: 'RESPONSIVE DESIGN',
    description:
      'Creating websites that work smoothly across desktop, tablet, and mobile devices.',
    icon: 'monitor',
  },
]

export const goals = [
  { icon: 'rocket', title: 'Strengthen Frontend Development skills', tag: 'SKILLS' },
  { icon: 'code', title: 'Build professional real-world projects', tag: 'PROJECTS' },
  { icon: 'palette', title: 'Improve Web & UI Design skills', tag: 'DESIGN' },
  { icon: 'zap', title: 'Explore modern web technologies', tag: 'TECH' },
  { icon: 'briefcase', title: 'Gain professional development experience', tag: 'EXPERIENCE' },
  { icon: 'trending', title: 'Continuously grow as a developer', tag: 'GROWTH' },
]

export const socials = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/dhamodharan63',
    handle: '@dhamodharan63',
  },
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dhamodharan-s-37b9b1296',
    handle: '/in/dhamodharan-s',
  },
  instagram: {
    label: 'Instagram',
    url: 'https://www.instagram.com/its.me.dhamodharan',
    handle: '@its.me.dhamodharan',
  },
  email: {
    label: 'Email',
    url: 'mailto:sdhamo10@gmail.com',
    handle: 'sdhamo10@gmail.com',
  },
}

export const navLinks = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'services', label: 'SERVICES' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'github', label: 'GITHUB' },
  { id: 'contact', label: 'CONTACT' },
]