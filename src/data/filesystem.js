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
                { type: 'file', name: 'cover-letter.txt', content: 'Dear Hiring Manager,\n\nI am excited to apply...' },
              ],
            },
            {
              type: 'dir',
              name: 'projects',
              children: [
                { type: 'file', name: 'imranos', app: 'projects', projectId: 'imranos', content: 'ImranOS — Linux desktop portfolio' },
                { type: 'file', name: 'shopflow', app: 'projects', projectId: 'ecommerce', content: 'ShopFlow E-Commerce Platform' },
                { type: 'file', name: 'taskforge', app: 'projects', projectId: 'taskmanager', content: 'TaskForge — Project Management' },
                { type: 'file', name: 'devblog', app: 'projects', projectId: 'blogcms', content: 'DevBlog CMS' },
                { type: 'file', name: 'weatherpulse', app: 'projects', projectId: 'weather', content: 'WeatherPulse Dashboard' },
                { type: 'file', name: 'chatstream', app: 'projects', projectId: 'chatapp', content: 'ChatStream Messaging' },
              ],
            },
            {
              type: 'dir',
              name: 'skills',
              children: [
                { type: 'file', name: 'frontend.txt', content: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion' },
                { type: 'file', name: 'backend.txt', content: 'Django, Node.js, Python, REST APIs, GraphQL' },
                { type: 'file', name: 'database.txt', content: 'PostgreSQL, MongoDB, Redis, SQLite' },
                { type: 'file', name: 'devops.txt', content: 'Docker, AWS, CI/CD, Linux, Nginx' },
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
