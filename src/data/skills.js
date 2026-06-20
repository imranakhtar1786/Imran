export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'React.js / Next.js', level: 95, iconName: 'react' },
      { name: 'JavaScript (ES6+) / HTML5 / CSS3', level: 95, iconName: 'javascript' },
      { name: 'Responsive Design / Flexbox / Grid', level: 92, iconName: 'css3' },
      { name: 'Bootstrap / MUI / Tailwind CSS', level: 90, iconName: 'tailwind' },
      { name: 'SCSS / CSS Modules', level: 88, iconName: 'sass' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Python / Django / DRF', level: 92, iconName: 'python' },
      { name: 'Express.js / Node.js', level: 85, iconName: 'nodejs' },
      { name: 'REST API Development & Integration', level: 95, iconName: 'api' },
      { name: 'API & Performance Optimization', level: 90, iconName: 'performance' },
    ],
  },
  {
    id: 'database',
    name: 'Database & Caching',
    icon: 'database',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 90, iconName: 'postgresql' },
      { name: 'SQLite / SQL', level: 92, iconName: 'mysql' },
      { name: 'MongoDB', level: 85, iconName: 'mongodb' },
      { name: 'Redis Caching & DB Optimization', level: 88, iconName: 'redis' },
    ],
  },
  {
    id: 'devops',
    name: 'Deployment & Cloud',
    icon: 'cloud',
    skills: [
      { name: 'Vercel / Netlify', level: 95, iconName: 'vercel' },
      { name: 'DigitalOcean / VPS Hosting', level: 85, iconName: 'digitalocean' },
      { name: 'GoDaddy VPS / Hostinger', level: 90, iconName: 'server' },
      { name: 'CI/CD & Nginx', level: 80, iconName: 'nginx' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & State',
    icon: 'wrench',
    skills: [
      { name: 'Git / GitHub', level: 95, iconName: 'git' },
      { name: 'VS Code / Postman', level: 95, iconName: 'vscode' },
      { name: 'Zustand / Redux', level: 90, iconName: 'redux' },
      { name: 'Clean Code / Problem Solving', level: 92, iconName: 'code' },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

