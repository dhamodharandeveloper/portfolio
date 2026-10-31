import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaCss3Alt, FaJava } from 'react-icons/fa'
import { DiVisualstudio, DiPhotoshop } from 'react-icons/di'

export const profile = {
  name: 'Dhamodharan',
  displayName: 'DHAMODHARAN',
  role: 'Full Stack Developer',
  subRole: 'Aspiring Java Full Stack Developer',
  location: 'Villupuram, Tamil Nadu, India',
  address: 'Valavanur, Villupuram, Tamil Nadu',
  email: 'sdhamo10@gmail.com',
  phone: '6382780490',
  phoneHref: '+916382780490',
  github: 'https://github.com/dhamodharandeveloper',
  linkedin: 'https://www.linkedin.com/in/dhamodharandeveloper',
  instagram: 'https://www.instagram.com/its.me.dhamodharan/',
  resumeFile: '/DHAMODHARAN_S_Resume.pdf',
  summary:
    'Motivated and aspiring Full Stack Developer with a foundation in HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap, Java, Spring Boot, and MySQL. Completed academic and practical projects, including a Hostel Management System and an Online Library Management System. Eager to apply technical knowledge, learn new technologies, and contribute to developing responsive, user-friendly web applications as an entry-level developer.',
  shortIntro:
    'Aspiring Full Stack Developer with a foundation in HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap, Java, Spring Boot, and MySQL.',
}

export const skills = [
  {
    id: 'frontend',
    label: 'Frontend Technologies',
    code: 'UI',
    skills: [
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: FaCss3Alt },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'React.js', Icon: SiReact },
    ],
  },
  {
    id: 'css',
    label: 'CSS Frameworks',
    code: 'CSS',
    skills: [
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Bootstrap', Icon: SiBootstrap },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    code: 'LANG',
    skills: [{ name: 'Java', Icon: FaJava }],
  },
  {
    id: 'backend',
    label: 'Backend Framework',
    code: 'API',
    skills: [{ name: 'Spring Boot', Icon: SiSpringboot }],
  },
  {
    id: 'database',
    label: 'Database',
    code: 'DB',
    skills: [{ name: 'MySQL', Icon: SiMysql }],
  },
  {
    id: 'version',
    label: 'Version Control',
    code: 'VCS',
    skills: [
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
    ],
  },
  {
    id: 'tools',
    label: 'Development Tools',
    code: 'IDE',
    skills: [{ name: 'Visual Studio Code', Icon: DiVisualstudio }],
  },
  {
    id: 'design',
    label: 'Design',
    code: 'ART',
    skills: [{ name: 'Adobe Photoshop', Icon: DiPhotoshop }],
  },
]

export const skillCount = skills.reduce((total, group) => total + group.skills.length, 0)

export const projects = [
  {
    id: 'hostel',
    index: '01',
    title: 'Hostel Management System',
    date: 'July 2025',
    description:
      'Developed a web-based application to manage hostel-related activities.',
    highlights: ['Implemented student registration and room booking modules.'],
    modules: ['Student Registration', 'Room Booking', 'Hostel Operations'],
    type: 'Web Application',
    visual: 'hostel',
  },
  {
    id: 'library',
    index: '02',
    title: 'Online Library Management System',
    date: 'March 2024',
    description:
      'Developed a web-based application to manage library operations efficiently.',
    highlights: [
      'Designed user-friendly interfaces for browsing and managing books.',
    ],
    modules: ['Book Browsing', 'Book Management', 'Library Operations'],
    type: 'Web Application',
    visual: 'library',
  },
  {
    id: 'coco-elite',
    index: '03',
    title: 'Coco Elite – E-Commerce Website',
    date: 'August 2026',
    description:
      'Developed a responsive e-commerce website to showcase and sell desiccated coconut products.',
    highlights: [
      'Designed user-friendly interfaces for product browsing and online order management.',
    ],
    modules: ['Product Browsing', 'Online Orders', 'Order Management'],
    type: 'E-Commerce Website',
    visual: 'coco',
    image: '/coco-elite-preview.jpg',
    link: 'https://csfood.in/',
    status: 'Live website',
  },
]

export const education = [
  {
    year: '2026',
    short: 'M.Sc. IT',
    degree: 'Master of Science in Information Technology',
    institution: 'Arignar Anna Govt. Arts and Science College, Villupuram',
    score: '74.6%',
    current: true,
  },
  {
    year: '2024',
    short: 'B.Sc. CS',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Arignar Anna Govt. Arts and Science College, Villupuram',
    score: '79.10%',
  },
  {
    year: '2021',
    short: 'HSC',
    degree: 'Higher Secondary Certificate',
    institution:
      'John Dewey Matriculation Higher Secondary School, Villupuram',
    score: '74%',
  },
  {
    year: '2019',
    short: 'SSLC',
    degree: 'Secondary School Leaving Certificate',
    institution: 'Seventh-day Adventist Matriculation School, Valavanur',
    score: '65%',
  },
]

export const certifications = [
  {
    id: 'tcs-ion',
    date: 'June 2025',
    issuer: 'TCS iON',
    title: 'Web Development Intern',
    training: 'Build an Online Notes App',
    organisation: 'TCS iON, Tata Consultancy Services',
    certificate: 'Certificate of Participation',
  },
]

export const milestones = [
  {
    year: '2026',
    title: 'M.Sc. Information Technology',
    detail: 'Arignar Anna Govt. Arts and Science College, Villupuram - 74.6%',
  },
  {
    year: '2024',
    title: 'B.Sc. Computer Science',
    detail: 'Arignar Anna Govt. Arts and Science College, Villupuram - 79.10%',
  },
  {
    year: '2021',
    title: 'Higher Secondary Certificate',
    detail: 'John Dewey Matriculation Higher Secondary School, Villupuram - 74%',
  },
  {
    year: '2019',
    title: 'Secondary School Leaving Certificate',
    detail: 'Seventh-day Adventist Matriculation School, Valavanur - 65%',
  },
]

export const stats = [
  { value: projects.length, label: 'Projects Built', suffix: '' },
  { value: skillCount, label: 'Technologies', suffix: '' },
  { value: education.length, label: 'Qualifications', suffix: '' },
  { value: certifications.length, label: 'Certification', suffix: '' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
