// ─────────────────────────────────────────────────────────
//  Site Content — Edit this file to update all content
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Valentino Loverado Rinumpoko',
  shortName: 'Valentino',
  initials: 'VLR',
  tagline: 'I live a life I will remember.',
  role: 'Full-Stack Developer',
  otherRoles: ['IoT Developer', 'DevOps Engineer', 'Network Engineer'],
  location: 'Sleman, Yogyakarta',
  email: 'lrv94451@gmail.com',

  // ── Fill in your actual links ──
  socials: {
    github: 'https://github.com/zylpheon',
    linkedin: 'https://www.linkedin.com/in/valentinolr/',
    instagram: 'https://www.instagram.com/valenttino200/',
    whatsapp: 'https://wa.me/6281918734049',
  },

  bio: `I'm a full-stack developer who thrives at the intersection of design and engineering. 
        From crafting pixel-perfect interfaces to architecting scalable back-ends and wiring up 
        IoT systems — I build things that work beautifully and hold up in the real world.`,

  stats: [
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Completed Projects', value: 20, suffix: '+' },
    { label: 'Technologies', value: 15, suffix: '+' },
    { label: 'Certifications', value: 10, suffix: '+' },
  ],
}

// ─── Skills ───────────────────────────────────────────────
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Laravel', 'Express.js', 'Python', 'REST API', 'GraphQL'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM'],
  },
  {
    category: 'UI / UX Design',
    items: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping', 'User Research'],
  },
  {
    category: 'IoT',
    items: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Sensor Integration'],
  },
  {
    category: 'Network & Linux',
    items: ['Cisco', 'pfSense', 'Ubuntu Server', 'Nginx', 'SSH / Shell'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git & GitHub', 'CI / CD', 'AWS', 'Linux Administration'],
  },
  {
    category: 'Project Management',
    items: ['Agile', 'Scrum', 'Jira', 'Technical Documentation', 'Team Leadership'],
  },
]

// ─── Languages ────────────────────────────────────────────
// Ordered from most to least proficient — percent drives the bar width
export const languages = [
  { name: 'Indonesian', level: 'Native', percent: 100 },
  { name: 'English', level: 'Expert', percent: 90 },
  { name: 'Javanese', level: 'Intermediate', percent: 60 },
  { name: 'Japanese', level: 'Beginner', percent: 30 },
]

// ─── Certifications (15 slots) ────────────────────────────
// Set placeholder: false and fill in the fields when you have real certs
export const certifications = [
  { id: 1, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 2, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 3, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 4, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 5, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 6, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 7, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 8, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 9, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 10, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 11, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 12, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 13, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 14, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
  { id: 15, name: 'Certification Name', issuer: 'Issuer Organization', year: '20XX', link: '#', placeholder: true },
]

// ─── Featured Projects (3) ────────────────────────────────
export const projects = [
  {
    id: '01',
    name: 'Project Alpha',
    tagline: 'Full-stack web application',
    description:
      'A comprehensive full-stack web application featuring real-time data processing, role-based authentication, and an intuitive analytics dashboard for operational monitoring.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    link: '#',
    repo: '#',
    year: '2024',
  },
  {
    id: '02',
    name: 'Project Beta',
    tagline: 'IoT monitoring system',
    description:
      'An IoT-powered smart monitoring system that bridges physical sensors with a real-time web dashboard, enabling remote device management and alerting over MQTT.',
    tech: ['Vue.js', 'Express.js', 'MQTT', 'Arduino', 'ESP32'],
    link: '#',
    repo: '#',
    year: '2024',
  },
  {
    id: '03',
    name: 'Project Gamma',
    tagline: 'Design system & component library',
    description:
      'A comprehensive design system and component library built with Storybook to ensure visual consistency and developer scalability across multiple digital products.',
    tech: ['Figma', 'React', 'TypeScript', 'Storybook'],
    link: '#',
    repo: '#',
    year: '2023',
  },
]

// ─── Blog / Writing Posts ──────────────────────────────
export const blogPosts = [
  {
    id: '01',
    title: 'MTCNA Module 9: Tools & Monitoring',
    excerpt:
      "Complete your MTCNA journey with MikroTik's diagnostic toolkit — master Ping, Traceroute, Torch, Traffic Monitor, Netwatch, Graphing, SNMP, and Logging to troubleshoot and maintain your network like a pro.",
    date: 'Jun 27, 2026',
    readTime: '14 min read',
    tags: ['Network', 'Tutorial'],
    link: 'https://blog.valen.icu/blog/mtcna-module-9-tools',
  },
  {
    id: '02',
    title: 'MTCNA Module 8: Tunnels',
    excerpt:
      'Build secure virtual links over untrusted networks — learn the PPP framework, set up PPPoE for ISP-style deployments, manage IP Pools, and configure PPTP and SSTP VPN servers on MikroTik RouterOS.',
    date: 'Jun 24, 2026',
    readTime: '13 min read',
    tags: ['Network', 'Tutorial'],
    link: 'https://blog.valen.icu/blog/mtcna-module-8-tunnels',
  },
  {
    id: '03',
    title: 'MTCNA Module 7: QoS (Quality of Service)',
    excerpt:
      'Take control of your bandwidth — learn how to limit, guarantee, and fairly share network throughput on MikroTik using Simple Queues, MIR/CIR, Bursting, and the dynamic PCQ (Per Connection Queue) system.',
    date: 'Jun 21, 2026',
    readTime: '12 min read',
    tags: ['Network', 'Tutorial'],
    link: 'https://blog.valen.icu/blog/mtcna-module-7-qos',
  },
]
