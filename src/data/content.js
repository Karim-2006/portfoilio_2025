export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'M.KARIM',
  title: 'Senior Frontend Engineer & UI/UX Designer',
  valueProposition: 'Building immersive digital experiences with cutting-edge technologies and pixel-perfect design.',
  about: [
    'With over 8 years of experience in the tech industry, I specialize in building high-performance, scalable web applications using the React ecosystem.',
    'My approach combines technical excellence with a deep understanding of user-centric design, ensuring every product is both functional and beautiful.',
    'I thrive on solving complex problems and am constantly exploring new technologies to push the boundaries of what is possible on the web.'
  ],
  interests: ['Generative Art', 'Mechanical Keyboards', 'Cybersecurity', 'Open Source'],
};

export const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Framer Motion', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'GraphQL', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Figma', level: 85 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Nebula Dashboard',
    description: 'A futuristic analytics dashboard for monitoring cloud infrastructure in real-time.',
    tech: ['React', 'Three.js', 'D3.js', 'Tailwind'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Quantum CMS',
    description: 'Headless CMS with a focus on speed and developer experience.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'tRPC'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Ethereal UI',
    description: 'A glassmorphism component library for React applications.',
    tech: ['React', 'Framer Motion', 'TypeScript', 'Storybook'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
  },
];

export const experience = [
  {
    period: '2021 - Present',
    organization: 'NSTORE COMPANY',
    position: 'Lead Frontend Developer',
    achievements: [
      'Architected and implemented a micro-frontend architecture using React and Module Federation.',
      'Reduced initial load time by 40% through code splitting and asset optimization.',
      'Mentored a team of 12 junior and mid-level developers.',
    ],
  },
  {
    period: '2018 - 2021',
    organization: 'Creative Pulse',
    position: 'Senior UI/UX Designer',
    achievements: [
      'Designed and developed a comprehensive design system used by 5 product teams.',
      'Increased user engagement by 25% through iterative UX improvements and A/B testing.',
      'Led the transition from Sketch to Figma for the entire design department.',
    ],
  },
];
