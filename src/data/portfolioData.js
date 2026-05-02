import profileImage from '../assets/images/profile.jpeg'
import resumePDF from '../assets/Resume.pdf'
import resumeDocx from '../assets/Resume.docx'
import calculatorProjectIMG from '../assets/images/calculatorProjectIMG.png'
import cryptoToolsProjectIMG from '../assets/images/cryptoTools.png'
import portfolioProjectIMG from '../assets/images/portfolioIMG.png'
import eSocietyProjectIMG from '../assets/images/eSocietyProjectIMG.png'
import { Monitor, Code2, Sparkles } from 'lucide-react'

export const profile = {
  name: 'Rohit Thakkar',
  firstName: 'Rohit',
  lastName: 'Thakkar',
  role: 'Fullstack Developer',
  roles: ['Fullstack Developer', 'React Engineer', 'UI/UX Enthusiast', 'Full-Stack Learner'],
  tagline: 'Building clean, modern web experiences.',
  intro:
    'I design responsive, user-friendly products with React, JavaScript, and a growing full-stack toolkit. I care about smooth interactions, thoughtful UI, and reliable code.',
  photo: profileImage,
  email: 'mailto:rohitthakkar25@gmail.com',
  location: 'Ahmedabad, India',
  resumePdf: resumePDF,
  resumeDocx: resumeDocx,
}

export const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '90%', label: 'Frontend Confidence' },
  { value: '2+', label: 'Years Coding' },
]

export const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Tailwind CSS', level: 84 },
  { name: 'Node.js', level: 72 },
  { name: 'Express.js', level: 68 },
  { name: 'MongoDB', level: 66 },
]

export const services = [
  {
    icon: 'Monitor',       
    title: 'Modern UI Development',
    description: 'Landing pages and product interfaces that feel polished across mobile, tablet, and desktop.',
  },
  {
    icon: 'Code2',        
    title: 'Frontend Engineering',
    description: 'Reusable React components, routing, performance improvements, and maintainable code structure.',
  },
  {
    icon: 'Sparkles',    
    title: 'Design-to-Code',
    description: 'Turning ideas into interactive experiences with motion, hierarchy, and attention to detail.',
  },
];

export const experience = [
  {
    company: 'Kaynex Technology',
    companyUrl: 'https://www.kaynex.com/',
    role: 'Fullstack Developer Intern',
    type: 'Internship',
    startDate: 'Feb 2026',
    endDate: null,        
    location: 'Ahmedabad, India',
    description:
      'Working on building dynamic, modern web interfaces using React and Tailwind CSS. Collaborating with the design and backend teams to ship product features with a focus on performance and clean UI.',
    highlights: [
      'Developing responsive React components integrated with REST APIs.',
      'Implementing UI designs with Tailwind CSS and Framer Motion animations.',
      'Contributing to code reviews and frontend architecture decisions.',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
    color: 'from-cyan-400 to-blue-500',
  },
]

export const timeline = [
  {
    period: '2021 – 2024',
    title: 'Bachelor of Computer Applications (BCA)',
    description:
      'Built my coding foundations and developed a strong interest in creating user-facing software.',
  },
  {
    period: '2024 – 2026',
    title: 'Master of Computer Applications (MCA)',
    description:
      'Expanding into advanced frontend work while strengthening backend and project-building skills.',
  },
  {
    period: 'Feb 2026 – Present',
    title: 'MERN Developer Intern @ Kaynex Technology',
    description:
      'Shipping real product features, collaborating with a team, and deepening practical engineering skills.',
  },
]

export const passions = [
  { icon: 'BookOpen', title: 'Reading', description: 'Learning from books, ideas, and personal growth topics.' },
  { icon: 'Gamepad2', title: 'Gaming', description: 'Enjoying strategy, fast decision-making, and problem solving.' },
  { icon: 'Telescope', title: 'Exploring Tech', description: 'Trying new tools, UI patterns, and practical developer workflows.' },
]

export const projects = [
 {
  id: 'mca-project',
  title: 'E-Society Management System',
  category: 'Final Year Project · MERN Stack',
  badge: 'Featured',
  summary:
    'A comprehensive full-stack platform to digitize and streamline residential society operations — covering visitor management, complaint tracking, facility bookings, financial records, and community communication in one unified system.',
  image: eSocietyProjectIMG,
  liveUrl: 'https://your-live-url.com',
  sourceUrl: 'https://github.com/rohitThakkar07/E-Society-Project',
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
  highlights: [
    'Built role-based access for Admins, Residents, and Security Guards with JWT authentication and protected routes.',
    'Implemented visitor management with OTP based digital entry approvals.',
    'Developed complaint tracking, facility booking with availability calendars, and financial management with invoice generation.',
  ],
  gradient: 'from-teal-400 via-cyan-500 to-blue-600',
},
  {
    id: 'cryptotools',
    title: 'CryptoTools',
    category: 'Security Utility',
    badge: 'Featured',
    summary:
      'A crypto utility app to encrypt and decrypt text or files with a cleaner product-focused interface.',
    image: cryptoToolsProjectIMG,
    liveUrl: 'https://crypto-tools.wuaze.com/',
    sourceUrl: 'https://github.com/rohitThakkar07/crypto-tools',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Handled encryption-focused flows without overwhelming the user interface.',
      'Balanced utility features with a more approachable product layout.',
      'Worked across frontend interactions and backend integration.',
    ],
    gradient: 'from-cyan-400 via-teal-500 to-blue-600',
  },
  
  {
    id: 'calculator',
    title: 'Calculator App',
    category: 'Frontend Project',
    badge: null,
    summary:
      'A compact calculator built with a clean layout and responsive interaction states across all screen sizes.',
    image: calculatorProjectIMG,
    liveUrl: 'https://rohitthakkar07.github.io/Calculator/',
    sourceUrl: 'https://github.com/rohitThakkar07/Calculator',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Focused on clarity, spacing, and quick interaction feedback.',
      'Kept the interface lightweight and easy to navigate on smaller screens.',
      'Used the project to strengthen frontend fundamentals.',
    ],
    gradient: 'from-violet-400 via-purple-500 to-indigo-600',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    category: 'Personal Brand',
    badge: 'This Site',
    summary:
      'This portfolio site — built with React, Tailwind CSS, Framer Motion, and GSAP for smooth animations.',
    image: portfolioProjectIMG,
    liveUrl: '/',
    liveInternal: true,
    sourceUrl: 'https://github.com/rohitThakkar07/my-portfolio',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    highlights: [
      'Complete redesign with new color system and GSAP-powered hero animations.',
      'Dark/light theme with localStorage persistence.',
      'Clean folder structure with reusable, composable components.',
    ],
    gradient: 'from-fuchsia-400 via-pink-500 to-rose-600',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rohitThakkar07', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohitthakkar25/', icon: 'linkedin' },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=rohitthakkar2021@gmail.com', icon: 'email' }
]
