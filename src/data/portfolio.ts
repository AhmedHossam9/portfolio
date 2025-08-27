export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform built with cutting-edge technologies. Features include user authentication, product management, shopping cart, and secure payment processing.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps with location-based services.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'OpenWeather API'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and beautiful design.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '5',
    title: 'Chat Application',
    description: 'Real-time chat application with features like message encryption, file sharing, and group chat functionality.',
    image: '/api/placeholder/600/400',
    technologies: ['Socket.io', 'Express.js', 'React', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '6',
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates stunning visuals based on text descriptions and user preferences.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    liveUrl: '#',
    codeUrl: '#'
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', icon: 'react', category: 'frontend', level: 'expert' },
  { id: '2', name: 'Vue.js', icon: 'vue', category: 'frontend', level: 'advanced' },
  { id: '3', name: 'TypeScript', icon: 'typescript', category: 'frontend', level: 'expert' },
  { id: '4', name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', level: 'expert' },
  { id: '5', name: 'Next.js', icon: 'nextjs', category: 'frontend', level: 'advanced' },
  
  // Backend
  { id: '6', name: 'Node.js', icon: 'nodejs', category: 'backend', level: 'expert' },
  { id: '7', name: 'Python', icon: 'python', category: 'backend', level: 'advanced' },
  { id: '8', name: 'Express.js', icon: 'express', category: 'backend', level: 'expert' },
  { id: '9', name: 'FastAPI', icon: 'fastapi', category: 'backend', level: 'intermediate' },
  
  // Database
  { id: '10', name: 'MongoDB', icon: 'mongodb', category: 'database', level: 'advanced' },
  { id: '11', name: 'PostgreSQL', icon: 'postgresql', category: 'database', level: 'intermediate' },
  { id: '12', name: 'Redis', icon: 'redis', category: 'database', level: 'intermediate' },
  
  // DevOps
  { id: '13', name: 'Docker', icon: 'docker', category: 'devops', level: 'intermediate' },
  { id: '14', name: 'AWS', icon: 'aws', category: 'devops', level: 'intermediate' },
  { id: '15', name: 'Git', icon: 'git', category: 'devops', level: 'expert' },
  
  // Other
  { id: '16', name: 'Figma', icon: 'figma', category: 'other', level: 'intermediate' },
  { id: '17', name: 'Jest', icon: 'jest', category: 'other', level: 'advanced' },
  { id: '18', name: 'Webpack', icon: 'webpack', category: 'other', level: 'intermediate' }
];

export const socialLinks: SocialLink[] = [
  { id: '1', name: 'GitHub', url: '#', icon: 'github' },
  { id: '2', name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { id: '3', name: 'Twitter', url: '#', icon: 'twitter' },
  { id: '4', name: 'Email', url: '#', icon: 'mail' }
];

export const aboutText = `I'm a passionate full-stack developer with over 5 years of experience creating innovative digital solutions. I specialize in building scalable web applications using modern technologies and best practices.

My journey in software development began with a curiosity about how things work on the internet, which evolved into a passion for creating user-friendly applications that solve real-world problems.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.`;

export const heroData = {
  title: "Ahmed Hossam",
  subtitle: "Aspiring AI & Software Engineer | Building Intelligent & Scalable Solutions",
  description: "Computer Science graduate specializing in Artificial Intelligence with experience in financial technology, data science, and full-stack application development. Passionate about creating innovative, user-focused software solutions.",
  ctaPrimary: "View My Projects",
  ctaSecondary: "Get In Touch"
};

export const aboutData = {
  title: "About Me",
  description: "I am a Computer Science graduate from Misr International University with a minor in Artificial Intelligence. My professional journey spans fintech systems administration and data science, complemented by hands-on experience in developing mobile, web, and intelligent agent applications. I thrive on solving complex problems through well-structured, efficient, and user-friendly technology.",
  details: [
    "Currently, I work as an ATM/POS Technical Administrator at E-Finance, where I manage and troubleshoot nationwide banking transaction systems.",
    "Previously, I interned at Banque Misr's Digital Factory, contributing to data-driven decision-making through machine learning and analytics.",
    "I've led and built several end-to-end projects — from public transport mobile apps to AI-powered production line monitoring systems."
  ]
};

export const experienceData = [
  {
    title: "ATM/POS Technical Administrator",
    company: "E-Finance",
    period: "Nov 2024 – Present",
    description: "Configured and maintained ATM and POS systems, ensuring seamless operation across national banking infrastructure.",
    achievements: [
      "Provided first- and second-level technical support for hardware/software faults and transaction failures on ATM/POS terminals.",
      "Performed health checks, UNIX-based log reviews, and SQL scripting for transaction tracing, troubleshooting, and system performance optimization.",
      "Collaborated with cross-functional teams to resolve real-time incidents, reduce system downtime, and support the financial switching network."
    ]
  },
  {
    title: "Data Scientist Intern",
    company: "Banque Misr",
    period: "Aug 2023 – Sep 2023",
    description: "Contributed to data-driven decision-making through machine learning and analytics.",
    achievements: [
      "Conducted data collection, cleaning, and preprocessing for large datasets",
      "Performed exploratory data analysis and visualized trends",
      "Developed machine learning models for predictive analytics (regression, classification, clustering)"
    ]
  }
];

export const projectsData = [
  {
    title: "Metro Digital Application",
    description: "Mobile app for Cairo's metro system with ticket booking, QR-based e-tickets, real-time alerts, and multilingual UI.",
    technologies: ["Flutter", "Firebase", "Dart", "REST API"],
    image: "/projects/metro-app.jpg",
    github: "#",
    live: "https://youtu.be/WhJT8S-PLdo",
    featured: true,
    youtubeId: "WhJT8S-PLdo"
  },
  {
    title: "X-Scanner for Web Vulnerabilities",
    description: "Automated scanner detecting SQLi, XSS, and RCE vulnerabilities with customizable scan programs and real-time reporting.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    image: "/projects/x-scanner.jpg",
    github: "#",
    live: "https://youtu.be/TWUZfKQXz20",
    featured: true,
    youtubeId: "TWUZfKQXz20"
  },
  {
    title: "Intelligent Agent for Monitoring Production Lines",
    description: "Real-time malfunction detection system using CNN-ResNet, LSTM, and reinforcement learning.",
    technologies: ["Python", "Arduino", "Machine Learning", "CNN-ResNet", "LSTM"],
    image: "/projects/ai-monitoring.jpg",
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Rentify",
    description: "Mobile vehicle rental app with secure authentication, real-time chat, and cloud-based notifications.",
    technologies: ["Dart", "Android Studio", "Firebase"],
    image: "/projects/rentify.jpg",
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Fire Service Provider ERP",
    description: "ERP web app for managing client services, scheduling, and reporting for fire protection providers.",
    technologies: ["Laravel", "MVC", "PHP", "MySQL"],
    image: "/projects/fire-erp.jpg",
    github: "#",
    live: "#",
    featured: false
  }
];

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "C++", "Dart", "SQL", "HTML/CSS", "JavaScript"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Flask", "Laravel", "TensorFlow", "Keras", "React", "Flutter"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Visual Studio Code", "Git", "Firebase", "Android Studio", "UNIX"]
    },
    {
      name: "Protocols & Standards",
      skills: ["ISO 8583", "SQL Scripting", "Financial Transaction Switching"]
    }
  ]
};

export const contactData = {
  title: "Let's Connect",
  description: "I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology and AI.",
  location: "📍 Cairo, Egypt",
  email: "officialxik9@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-hossam-16603a241/",
  github: "#",
  message: "Feel free to reach out if you'd like to collaborate on a project, discuss potential opportunities, or simply connect over shared interests in technology and innovation."
};
