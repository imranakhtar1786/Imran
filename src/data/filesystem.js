// export const filesystem = {
//   type: 'dir',
//   name: '/',
//   children: [
//     {
//       type: 'dir',
//       name: 'home',
//       children: [
//         {
//           type: 'dir',
//           name: 'imran',
//           children: [
//             {
//               type: 'dir',
//               name: 'Desktop',
//               children: [
//                 { type: 'file', name: 'About.desktop', app: 'about', content: '[Desktop Entry]\nName=About Me\nType=Application' },
//                 { type: 'file', name: 'Projects.desktop', app: 'projects', content: '[Desktop Entry]\nName=Projects\nType=Application' },
//                 { type: 'file', name: 'Resume.pdf', app: 'resume', content: 'Resume document — open Resume app to download.' },
//               ],
//             },
//             {
//               type: 'dir',
//               name: 'Documents',
//               children: [
//                 { type: 'file', name: 'resume.pdf', app: 'resume', content: 'Imran Akhtar — Full Stack Developer Resume' },
//                 // { type: 'file', name: 'cover-letter.txt', content: 'Dear Hiring Manager,\n\nI am excited to apply for the Full Stack Developer position. With a B.Tech in IT and professional experience at ADCLAN and DPT HUB building web applications with Next.js, React, and Django, I am confident in my ability to deliver high-quality solutions.\n\nBest regards,\nImran Akhtar' },
//               ],
//             },
//             {
//               type: 'dir',
//               name: 'projects',
//               children: [
//                 { type: 'file', name: 'nstee', app: 'projects', projectId: 'nstee', content: 'NSTEE — Premium T-Shirt E-commerce' },
//                 { type: 'file', name: 'arinteriors', app: 'projects', projectId: 'arinteriors', content: 'AR Interiors — Interior Design Portfolio' },
//                 { type: 'file', name: 'dpthub', app: 'projects', projectId: 'dpthub', content: 'DPT Hub — 360° Digital Agency Website' },
//                 { type: 'file', name: 'abbuildcon', app: 'projects', projectId: 'abbuildcon', content: 'ABBuildCon India — Construction Website' },
//                 { type: 'file', name: 'adclan', app: 'projects', projectId: 'adclan', content: 'Adclan — Digital Marketing Agency Website' },
//                 { type: 'file', name: 'elmasgroup', app: 'projects', projectId: 'elmasgroup', content: 'Elmas Group — Real Estate Company Website' },
//               ],
//             },
//             {
//               type: 'dir',
//               name: 'skills',
//               children: [
//                 { type: 'file', name: 'frontend.txt', content: 'React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), Responsive Design, Flexbox, CSS Grid, SCSS, Bootstrap, MUI' },
//                 { type: 'file', name: 'backend.txt', content: 'Python, Django, Django REST Framework (DRF), Express.js, REST API Development, API Integration, API Optimization' },
//                 { type: 'file', name: 'database.txt', content: 'MySQL, PostgreSQL, SQLite, SQL, MongoDB, Redis Caching, DB Optimization' },
//                 { type: 'file', name: 'deployment.txt', content: 'Vercel, Netlify, DigitalOcean, Hostinger, GoDaddy VPS, Nginx, CI/CD' },
//               ],
//             },
//             {
//               type: 'dir',
//               name: 'Downloads',
//               children: [
//                 { type: 'file', name: 'portfolio.zip', content: 'Portfolio source code archive' },
//               ],
//             },
//             { type: 'file', name: '.bashrc', content: '# ImranOS bashrc\nexport PS1="\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]$ "' },
//             { type: 'file', name: 'README.md', content: '# Welcome to ImranOS\n\nDouble-click desktop icons or type `help` in the terminal.' },
//           ],
//         },
//       ],
//     },
//     {
//       type: 'dir',
//       name: 'etc',
//       children: [
//         { type: 'file', name: 'hostname', content: 'imranos' },
//         { type: 'file', name: 'os-release', content: 'NAME="ImranOS"\nVERSION="1.0"\nID=imranos' },
//       ],
//     },
//     {
//       type: 'dir',
//       name: 'var',
//       children: [
//         { type: 'dir', name: 'log', children: [{ type: 'file', name: 'syslog', content: 'ImranOS boot successful.' }] },
//       ],
//     },
//     {
//       type: 'dir',
//       name: 'usr',
//       children: [
//         {
//           type: 'dir',
//           name: 'bin',
//           children: [
//             { type: 'file', name: 'terminal', app: 'terminal', content: 'Terminal emulator' },
//             { type: 'file', name: 'explorer', app: 'explorer', content: 'File explorer' },
//             { type: 'file', name: 'neofetch', content: 'System information tool' },
//           ],
//         },
//       ],
//     },
//   ],
// };




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
                {
                  type: 'file',
                  name: 'About.desktop',
                  app: 'about',
                  content: `[Desktop Entry]
Name=About Me
Type=Application

Name: Imran Akhtar
Role: Full Stack Developer
Email: Imranakhtar1786@gmail.com
Phone: 9155161786`
                },

                {
                  type: 'file',
                  name: 'Projects.desktop',
                  app: 'projects',
                  content: '[Desktop Entry]\nName=Projects\nType=Application'
                },

                {
                  type: 'file',
                  name: 'Resume.pdf',
                  app: 'resume',
                  content: 'Imran Akhtar — Full Stack Developer Resume'
                }
              ]
            },


            {
              type: 'dir',
              name: 'Documents',
              children: [

                {
                  type: 'file',
                  name: 'resume.pdf',
                  app: 'resume',
                  content: 'Imran Akhtar — Full Stack Developer Resume'
                },


                {
                  type: 'file',
                  name: 'qualification.txt',
                  app: 'texteditor',
                  content: `
B.Tech in Information Technology (2021 - 2024)

Greater Noida Institute of Technology, Greater Noida UP


Diploma in Mechanical Engineering (2018 - 2021)

State Board of Technical Education Bihar
`
                },


                {
                  type: 'file',
                  name: 'experience.txt',
                  app: 'texteditor',
                  content: `
Web Development Executive

ADCLAN MEDIA SERVICE PVT LTD
Dec 2025 - Jun 2026


Developing modern web applications using React.js, Next.js,
Python and Django.

Building responsive UI, REST APIs,
database management, API integration and performance optimization.



Full Stack Developer

DPT HUB PVT LIMITED
Sep 2024 - Dec 2025


Building full-stack applications using Python,
React.js and Next.js.

Responsible for API development,
frontend integration and performance optimization.
`
                },


                {
                  type: 'file',
                  name: 'certificates.txt',
                  app: 'texteditor',
                  content: `
RIMUS Technologies — Java Training Certificate

ICT Academy — Data Analytics Training Certificate

OctaNet — Python Development Internship Certificate

Java Programming Certificate

Python Certificate from HackerRank

OOPs in Java Certificate

Introduction to MySQL Certificate

MongoDB Certificate

HTML CSS JavaScript Certificate
`
                }

              ]
            },



            {
              type: 'dir',
              name: 'projects',
              children: [

                {
                  type: 'file',
                  name: 'nstee',
                  app: 'projects',
                  projectId: 'nstee'
                },

                {
                  type: 'file',
                  name: 'arinteriors',
                  app: 'projects',
                  projectId: 'arinteriors'
                },

                {
                  type: 'file',
                  name: 'dpthub',
                  app: 'projects',
                  projectId: 'dpthub'
                },

                {
                  type: 'file',
                  name: 'abbuildcon',
                  app: 'projects',
                  projectId: 'abbuildcon'
                },

                {
                  type: 'file',
                  name: 'adclan',
                  app: 'projects',
                  projectId: 'adclan'
                },

                {
                  type: 'file',
                  name: 'elmasgroup',
                  app: 'projects',
                  projectId: 'elmasgroup'
                },

                {
                  type: 'file',
                  name: 'vikrammills',
                  app: 'projects',
                  projectId: 'vikrammills'
                },

                {
                  type: 'file',
                  name: 'adorereal',
                  app: 'projects',
                  projectId: 'adorereal'
                },

                {
                  type: 'file',
                  name: 'rudratheme',
                  app: 'projects',
                  projectId: 'rudratheme'
                },

                {
                  type: 'file',
                  name: 'poweronelectrotech',
                  app: 'projects',
                  projectId: 'poweronelectrotech'
                },

                {
                  type: 'file',
                  name: 'kiloifoods',
                  app: 'projects',
                  projectId: 'kiloifoods'
                }

              ]
            },



            {
              type: 'dir',
              name: 'skills',
              children: [

                {
                  type: 'file',
                  name: 'frontend.txt',
                  app: 'texteditor',
                  content: 'HTML5, CSS3, JavaScript ES6+, React.js, Next.js, Responsive Design, Flexbox, CSS Grid, SCSS, Bootstrap, MUI'
                },


                {
                  type: 'file',
                  name: 'backend.txt',
                  app: 'texteditor',
                  content: 'Python, Django, Django REST Framework, Express.js, REST API Development, API Integration, API Optimization'
                },


                {
                  type: 'file',
                  name: 'database.txt',
                  app: 'texteditor',
                  content: 'MySQL, PostgreSQL, SQLite, SQL, Redis Caching, Database Optimization'
                },


                {
                  type: 'file',
                  name: 'tools.txt',
                  app: 'texteditor',
                  content: 'Git, GitHub, VS Code, Postman, Clean Code, Debugging, Problem Solving'
                },


                {
                  type: 'file',
                  name: 'deployment.txt',
                  app: 'texteditor',
                  content: 'Vercel, Netlify, DigitalOcean, Hostinger, GoDaddy VPS, Nginx, CI/CD'
                }

              ]
            },



            {
              type: 'dir',
              name: 'Downloads',
              children: [

                {
                  type: 'file',
                  name: 'portfolio.zip',
                  app: 'texteditor',
                  content: 'Full Stack Developer Portfolio Source Code'
                }

              ]
            },


            {
              type: 'file',
              name: '.bashrc',
              app: 'texteditor',
              content: '# ImranOS bashrc'
            },


            {
              type: 'file',
              name: 'README.md',
              app: 'texteditor',
              content:
                `# Welcome to ImranOS

Full Stack Developer Portfolio OS.

Skills:
React.js
Next.js
Django
REST API
PostgreSQL
Redis`
            }

          ]
        }
      ]
    },


    {
      type: 'dir',
      name: 'etc',
      children: [

        {
          type: 'file',
          name: 'hostname',
          app: 'texteditor',
          content: 'imranos'
        },

        {
          type: 'file',
          name: 'os-release',
          app: 'texteditor',
          content: 'NAME="ImranOS"\nVERSION="1.0"\nID=imranos'
        }

      ]
    },



    {
      type: 'dir',
      name: 'var',
      children: [

        {
          type: 'dir',
          name: 'log',
          children: [

            {
              type: 'file',
              name: 'syslog',
              app: 'texteditor',
              content: 'ImranOS boot successful.'
            }

          ]
        }

      ]
    },



    {
      type: 'dir',
      name: 'usr',
      children: [

        {
          type: 'dir',
          name: 'bin',
          children: [

            {
              type: 'file',
              name: 'terminal',
              app: 'terminal'
            },

            {
              type: 'file',
              name: 'explorer',
              app: 'explorer'
            },

            {
              type: 'file',
              name: 'neofetch',
              app: 'texteditor',
              content: 'System information tool'
            }

          ]
        }

      ]
    }

  ]
};