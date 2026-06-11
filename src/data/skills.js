export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Django / DRF', level: 90 },
      { name: 'Node.js', level: 82 },
      { name: 'Python', level: 92 },
      { name: 'REST APIs', level: 93 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQLite', level: 85 },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'cloud',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS / GCP', level: 78 },
      { name: 'CI/CD', level: 82 },
      { name: 'Linux', level: 90 },
      { name: 'Nginx', level: 80 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'VS Code / Cursor', level: 95 },
      { name: 'Figma', level: 70 },
      { name: 'Jest / Pytest', level: 85 },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));
