// ───────────────────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT — single source of truth.
//  Replace images, links, and text here. Everything else updates automatically.
// ───────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Abhayraj Konge',
  roles: ['MCA Student', 'Java Full Stack Developer'],
  tagline:
    'Building scalable, secure and modern web applications using Java, Spring Boot and React.',
  // Replace this URL to swap the profile photo (square, ≥ 400px recommended)
  photo: '/assets/abhay.jpg',
  location: 'Pune, India',
  email: 'abhaykonge26@gmail.com',
  phone: '+91 8855803608',
  resumeUrl: '/assets/resume.pdf', // place a PDF at /public/resume.pdf to replace
  socials: {
    github: 'https://github.com/CodeWithAbhayraj',
    linkedin: 'https://linkedin.com/in/abhayraj-konge-69k',
    // twitter: 'https://twitter.com/your-username',
  },
};

// GitHub username used by the GitHub section (API auto-fetches profile + repos)
export const githubUsername = 'CodeWithAbhayraj';

export const about = {
  paragraphs: [
    'I am a Master of Computer Applications (MCA) student and as software developer focused on backend engineering. I enjoy turning complex problems into clean, maintainable solutions and learning how systems work end-to-end.',
    'My interests span REST API development, database design, and the Spring ecosystem. I care deeply about clean code practices, writing tests, and building features that are both useful and a pleasure to maintain.',
    'When I am not studying or building projects, I contribute to open source, explore system design, and sharpen my problem-solving skills through daily practice.',
  ],
  highlights: [
    'MCA Student',
    'Software Developer',
    'Interested in Backend Development',
    'Problem Solving',
    'REST API Development',
    'Clean Code Practices',
  ],
  stats: [
    { label: 'Projects Completed', value: 5, suffix: '+' },
    { label: 'Technologies Learned', value: 11, suffix: '+' },
    { label: 'Certifications', value: 8, suffix: '+' },
    { label: 'GitHub Repositories', value: 15, suffix: '+' },
  ],
};

export type SkillGroup = {
  title: string;
  icon: string; // lucide-react icon name
  skills: { name: string; level?: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'Python', level: 88 },
    ],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Bootstrap' },
      { name: 'React' },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot' },
      { name: 'Spring MVC' },
      { name: 'Hibernate' },
      { name: 'REST API' },
    ],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: [{ name: 'MySQL' }, { name: 'MongoDB' }],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'IntelliJ IDEA' },
      { name: 'VS Code' },
      { name: 'Swagger' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'HeartHandshake',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Teamwork' },
      { name: 'Communication' },
      { name: 'Quick Learning' },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string; // replaceable
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  category: string; // filter key
};

export const projects: Project[] = [
  {
    title: 'SMS OTP Authentication',
    description:
      'A secure authentication service that sends one-time passwords via SMS and verifies them with time-limited, single-use tokens.',
    image:
      'https://images.pexels.com/photos/8247921/pexels-photo-8247921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
    features: ['Rate limiting', 'Token expiry', 'Retry & cooldown', 'Audit logs'],
    github: 'https://github.com/CodeWithAbhayraj/SmsOTP',
    demo: '#',
    category: 'Backend',
  },
  {
    title: 'HODSM',
    description:
      'A full-stack application to manage students, courses, attendance and results with role-based access for admins and faculty.',
    image:
      'https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    features: ['Role-based access', 'CRUD modules', 'Search & filter', 'Export reports'],
    github: 'https://github.com/your-username/student-management',
    demo: '#',
    category: 'Full Stack',
  },
  {
    title: 'Tailor Portfolio Website',
    description:
      'A modern, responsive portfolio website for a tailor, showcasing services, past work and an enquiry form with a clean UI.',
    image:
      'https://images.pexels.com/photos/2974110/pexels-photo-2974110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    features: ['Responsive design', 'Image gallery', 'Contact form', 'Smooth animations'],
    github: 'https://github.com/CodeWithAbhayraj/Shital-Fashion',
    demo: 'https://shitalfashion.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'E-Commerce Project',
    description:
      'A modular e-commerce platform with product catalog, cart, checkout, and an admin dashboard for inventory and orders.',
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    features: ['Product catalog', 'Cart & checkout', 'Admin dashboard', 'Order tracking'],
    github: 'https://github.com/your-username/ecommerce-project',
    demo: '#',
    category: 'Full Stack',
  },
];

export const projectFilters = ['All', 'Backend', 'Frontend', 'Full Stack'];

export type TimelineItem = {
  title: string;
  org: string;
  duration: string;
  description?: string;
  tags?: string[];
};

export const training: TimelineItem[] = [

  {
    title: 'AI & Employability Skill',
    org: 'Infosys',
    duration: '1 Months',
    description:
      'Certified in AI, Life & Employability Skills by Magic Bus Foundation, demonstrating foundational knowledge of artificial intelligence, workplace readiness, communication, and professional development.',
    tags: ['Adaptability', 'Digital Literacy', 'Communication Skills', 'Prompt Engineering', 'Presentation Skills', 'Employability Skills'],
  },


  {
    title: 'Industrial Visit',
    org: 'BAAP(IT) Pvt. Ltd.',
    duration: '2 Day',
    description:
      'Participated in a two-day industrial visit to gain practical exposure to software development practices, IT industry workflows, Agile methodology, full-stack application development, and career guidance from industry professionals.',
    tags: ['Industry Exposure', 'Agile', 'Career Guidance', 'Real-World Experience',],
  },


  {
    title: 'Java Full Stack Development Training',
    org: 'Capegemini',
    duration: '3 Months',
    description:
      'An intensive, hands-on program covering Java fundamentals through full-stack web development with the Spring ecosystem and modern frontend frameworks.',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'REST API', 'React', 'MySQL'],
  },
  
];

export const education: TimelineItem[] = [
  {
    title: 'Master of Computer Applications (MCA)',
    org: 'SPPU',
    duration: '2025 – 2027',
    description:
      'Advanced study of software engineering, database systems, web technologies and distributed systems.',
    tags: ['Software Engineering', 'Databases', 'Web Technologies'],
  },
  {
    title: 'Bachelor of Computer Science (BCs)',
    org: 'SPPU',
    duration: '2022 – 2025',
    description:
      'Foundations of programming, data structures, operating systems and computer networks.',
    tags: ['Programming', 'Data Structures', 'OS', 'Networks'],
  },
  {
    title: 'Higher Secondary (12th)',
    org: 'MGHS & JC',
    duration: '2020 – 2022',
    description: 'Pre-university education with a focus on Science and Mathematics.',
    tags: ['Science', 'Mathematics'],
  },
  {
    title: 'Secondary School (10th)',
    org: 'MGHS',
    duration: '2019 – 2020',
    description: 'Completed secondary education with distinction.',
    tags: ['Foundation'],
  },
];

export type Certificate = {
  name: string;
  org: string;
  date: string;
  image: string; // replaceable
  link: string;
};

export const certificates: Certificate[] = [
  {
    name: 'Employability Skill',
    org: 'Infosys',
    date: 'Nov 2025',
    image:
      '/assets/Magicbus.png',
    link: '/assets/Magicbus.png',
  },
  {
    name: 'Fundamentals Of AI',
    org: 'VP Sharadchandra Pawar Center of Excellence In AI ',
    date: 'March 2026',
    image:
      '/assets/AI.png',
    link: '/assets/AI.png',
  },

  {
    name: 'Java Full Stack',
    org: 'Capegemini',
    date: 'May 2026',
    image:
      '/assets/Capegemini.png',
    link: '/assets/Capegemini.png',
  },

  {
    name: 'Aavishkar Zonal Level ',
    org: 'SPPU University',
    date: 'Jul 2025',
    image:
      '/assets/Avishkar.png',
    link: '/assets/Avishkar.png',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Training', href: '#training' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
