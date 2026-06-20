export const filesystem = {
  type: 'dir',
  name: '/',
  children: [
    {
      type: 'dir',
      name: 'home',
      children: [
        {
          type: 'dir',
          name: 'imran',
          children: [
            {
              type: 'dir',
              name: 'Desktop',
              children: [
                { type: 'file', name: 'About.desktop', app: 'about', content: '[Desktop Entry]\nName=About Me\nType=Application' },
                { type: 'file', name: 'Projects.desktop', app: 'projects', content: '[Desktop Entry]\nName=Projects\nType=Application' },
                { type: 'file', name: 'Resume.pdf', app: 'resume', content: 'Resume document — open Resume app to download.' },
              ],
            },
            {
              type: 'dir',
              name: 'Documents',
              children: [
                { type: 'file', name: 'resume.pdf', app: 'resume', content: 'Imran Akhtar — Full Stack Developer Resume' },
                { type: 'file', name: 'cover-letter.txt', content: 'Dear Hiring Manager,\n\nI am excited to apply for the Full Stack Developer position. With a B.Tech in IT and professional experience at ADCLAN and DPT HUB building web applications with Next.js, React, and Django, I am confident in my ability to deliver high-quality solutions.\n\nBest regards,\nImran Akhtar' },
              ],
            },
            {
              type: 'dir',
              name: 'projects',
              children: [
                { type: 'file', name: 'nstee', app: 'projects', projectId: 'nstee', content: 'NSTEE — Premium T-Shirt E-commerce' },
                { type: 'file', name: 'arinteriors', app: 'projects', projectId: 'arinteriors', content: 'AR Interiors — Interior Design Portfolio' },
                { type: 'file', name: 'dpthub', app: 'projects', projectId: 'dpthub', content: 'DPT Hub — 360° Digital Agency Website' },
                { type: 'file', name: 'abbuildcon', app: 'projects', projectId: 'abbuildcon', content: 'ABBuildCon India — Construction Website' },
                { type: 'file', name: 'adclan', app: 'projects', projectId: 'adclan', content: 'Adclan — Digital Marketing Agency Website' },
                { type: 'file', name: 'elmasgroup', app: 'projects', projectId: 'elmasgroup', content: 'Elmas Group — Real Estate Company Website' },
              ],
            },
            {
              type: 'dir',
              name: 'skills',
              children: [
                { type: 'file', name: 'frontend.txt', content: 'React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), Responsive Design, Flexbox, CSS Grid, SCSS, Bootstrap, MUI' },
                { type: 'file', name: 'backend.txt', content: 'Python, Django, Django REST Framework (DRF), Express.js, REST API Development, API Integration, API Optimization' },
                { type: 'file', name: 'database.txt', content: 'MySQL, PostgreSQL, SQLite, SQL, MongoDB, Redis Caching, DB Optimization' },
                { type: 'file', name: 'deployment.txt', content: 'Vercel, Netlify, DigitalOcean, Hostinger, GoDaddy VPS, Nginx, CI/CD' },
              ],
            },
            {
              type: 'dir',
              name: 'Downloads',
              children: [
                { type: 'file', name: 'portfolio.zip', content: 'Portfolio source code archive' },
              ],
            },
            { type: 'file', name: '.bashrc', content: '# ImranOS bashrc\nexport PS1="\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]$ "' },
            { type: 'file', name: 'README.md', content: '# Welcome to ImranOS\n\nDouble-click desktop icons or type `help` in the terminal.' },
          ],
        },
      ],
    },
    {
      type: 'dir',
      name: 'etc',
      children: [
        { type: 'file', name: 'hostname', content: 'imranos' },
        { type: 'file', name: 'os-release', content: 'NAME="ImranOS"\nVERSION="1.0"\nID=imranos' },
      ],
    },
    {
      type: 'dir',
      name: 'var',
      children: [
        { type: 'dir', name: 'log', children: [{ type: 'file', name: 'syslog', content: 'ImranOS boot successful.' }] },
      ],
    },
    {
      type: 'dir',
      name: 'usr',
      children: [
        {
          type: 'dir',
          name: 'bin',
          children: [
            { type: 'file', name: 'terminal', app: 'terminal', content: 'Terminal emulator' },
            { type: 'file', name: 'explorer', app: 'explorer', content: 'File explorer' },
            { type: 'file', name: 'neofetch', content: 'System information tool' },
          ],
        },
      ],
    },
  ],
};
