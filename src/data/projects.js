export const projects = [
  {
    id: 'nstee',
    title: 'NSTEE — Premium E-commerce',
    shortDesc: 'Full-stack premium T-shirt brand e-commerce platform',
    description:
      'Developed a full-stack e-commerce platform for a premium T-shirt brand. Built scalable backend APIs, integrated frontend components, optimized performance with caching, and implemented a responsive shopping experience with modern UI design.',
    tech: ['Next.js', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Zustand', 'MUI'],
    features: [
      'Full-stack e-commerce store',
      'Scalable REST APIs using Django REST Framework',
      'Zustand-based frontend state management',
      'Performance caching strategies with Redis',
      'Responsive premium shopping experience with MUI',
    ],
    architecture:
      'Decoupled Next.js frontend communicating with a Django API layer. Deployed with PostgreSQL as the relational database and Redis for caching data.',
    challenges:
      'Optimized page loads and inventory updates under high concurrency, using query tuning and strategic Redis caching.',
    links: { demo: 'https://nstee.in/' },
    status: 'Live',
    year: '2025',
  },
  {
    id: 'arinteriors',
    title: 'AR Interiors — Design Portfolio',
    shortDesc: 'Professional interior design showcasing website',
    description:
      'Created a professional interior design portfolio website. Developed responsive layouts, interactive sections, and visually engaging pages to showcase company services, projects, and design work with improved user experience.',
    tech: ['React.js', 'JavaScript', 'Bootstrap', 'SCSS', 'HTML5', 'CSS3'],
    features: [
      'Responsive design with Bootstrap & SCSS',
      'Interactive showcase and project grids',
      'Service offering breakdowns',
      'Optimized graphic assets and layouts',
    ],
    architecture:
      'Single Page React.js Application styled using modular SCSS files and responsive grid systems.',
    challenges:
      'Ensuring large, high-quality images of interior designs loaded quickly without impacting mobile usability.',
    links: { demo: 'https://arinteriorcurrent.vercel.app/' },
    status: 'Live',
    year: '2024',
  },
  {
    id: 'dpthub',
    title: 'DPT Hub — 360° Digital Agency',
    shortDesc: 'Professional portfolio and service site for a digital agency',
    description:
      'Developed a professional 360° digital agency portfolio website. Designed reusable components, responsive interfaces, and engaging UI sections to showcase digital marketing services, creative solutions, and company projects.',
    tech: ['React.js', 'SCSS', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Reusable components for scalable layout creation',
      'Interactive service sliders',
      'Performance-optimized client portfolio displays',
      'Fully responsive UI sections',
    ],
    architecture:
      'React.js components with unified SCSS sheets, relying on modern CSS layout concepts (Flexbox/Grid).',
    challenges:
      'Maintained extremely clean structures and optimized component rendering to ensure a smooth scrolling experience.',
    links: { demo: 'https://dpthub.com/' },
    status: 'Live',
    year: '2025',
  },
  {
    id: 'abbuildcon',
    title: 'ABBuildCon India — Construction',
    shortDesc: 'Dynamic construction & architectural website',
    description:
      'Built a dynamic construction and architectural portfolio website. Integrated Supabase PostgreSQL and Storage for managing projects, images, and website content through API-based architecture with an admin panel for real-time updates.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Swiper', 'Slick Slider', 'JavaScript'],
    features: [
      'Dynamic CMS admin panel for content updates',
      'Supabase storage integration for image handling',
      'Dynamic project carousel displays',
      'API-based content rendering',
    ],
    architecture:
      'Next.js application utilizing Supabase as a Backend-as-a-Service for data storage, auth, and image hosting.',
    challenges:
      'Synchronizing real-time file updates in storage with local application cache, resolved using Next.js revalidation.',
    links: { demo: 'https://www.abbuildconindia.com/' },
    status: 'Live',
    year: '2025',
  },
  {
    id: 'adclan',
    title: 'Adclan — Marketing Agency',
    shortDesc: 'Digital marketing agency website with immersive animations',
    description:
      'Developed a digital marketing agency website. Built responsive UI, smooth animations, PWA features, and optimized performance with Vercel deployment to showcase advertising, branding, SEO, and marketing services.',
    tech: ['Next.js', 'React.js', 'GSAP', 'Lenis', 'Framer Motion', 'Swiper'],
    features: [
      'Smooth kinetic scrolling with Lenis',
      'Advanced timeline animations using GSAP',
      'PWA support for app-like loading and offline access',
      'Responsive layouts and micro-interactions',
    ],
    architecture:
      'Next.js application leveraging performance hooks, static site exports, and progressive asset loading.',
    challenges:
      'Preventing animation lag on low-end mobile devices, achieved by throttling layout calculations and utilizing GPU acceleration.',
    links: { demo: 'https://adclan.in/' },
    status: 'Live',
    year: '2026',
  },
  {
    id: 'elmasgroup',
    title: 'Elmas Group — Real Estate',
    shortDesc: 'Real estate company property showcase portal',
    description:
      'Developed a real estate website. Built responsive layouts, smooth animations, and optimized frontend performance with Nginx deployment on Ubuntu for a seamless property showcase experience.',
    tech: ['Next.js', 'JavaScript', 'GSAP', 'Lenis', 'Swiper', 'Nginx', 'Ubuntu'],
    features: [
      'Interactive property search and filtering layouts',
      'Smooth GSAP UI animations',
      'Production deployment on Linux Ubuntu VPS',
      'Nginx reverse proxy and caching optimization',
    ],
    architecture:
      'Static-site generation with Next.js, deployed on an Ubuntu VPS, served through Nginx for caching and proxying.',
    challenges:
      'Ensuring high-speed asset delivery of real estate properties on self-managed VPS hosting.',
    links: { demo: 'https://elmasgroup.in/' },
    status: 'Live',
    year: '2025',
  },
  {
    id: 'vikrammills',
    title: 'Vikram Mills Ads Platform',
    shortDesc: 'FMCG advertising interface and product catalog',
    description:
      'Developed an FMCG advertising platform as a freelance project with a responsive interface to showcase products and campaigns. Implemented interactive navigation, optimized performance, and a smooth user experience.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Campaign showcase landing layouts',
      'Responsive product navigation interface',
      'Optimized performance for high-traffic campaigns',
    ],
    architecture:
      'Client-side React single-page app built for maximum speed and simplicity.',
    challenges:
      'Creating a layout that appeals directly to consumer brand managers while maintaining rapid navigation speed.',
    links: { demo: 'https://ads.vikrammills.com/' },
    status: 'Live',
    year: '2025',
  },
  {
    id: 'adorereal',
    title: 'Adore Real — Lead Gen Page',
    shortDesc: 'Real estate lead generation ads landing page',
    description:
      'Developed a real estate lead generation ads page with responsive layouts, interactive UI, and optimized design to showcase properties and capture customer inquiries.',
    tech: ['Next.js', 'React.js', 'JavaScript', 'CSS3', 'Tailwind CSS'],
    features: [
      'Friction-free lead capture forms',
      'Optimized performance for landing conversion rates',
      'Responsive mobile layouts',
    ],
    architecture:
      'Serverless Next.js landing page built for rapid deployments and integrated analytics tracking.',
    challenges:
      'Securing high page-speed scores to minimize visitor bounce rates during marketing campaigns.',
    links: { demo: 'https://adore-real.vercel.app/' },
    status: 'Live',
    year: '2025',
  },
  {
    id: 'rudratheme',
    title: 'Rudra Theme — Real Estate Theme',
    shortDesc: 'Modern real estate website theme (In Development)',
    description:
      'Currently developing a modern real estate website theme. Building responsive layouts, reusable components, smooth animations, and optimized performance for showcasing properties and services.',
    tech: ['Next.js', 'React.js', 'GSAP', 'Lenis', 'Swiper', 'Lucide Icons'],
    features: [
      'Highly customizable modular theme components',
      'Smooth scrolling and page transitions',
      'Responsive search grids and property detail views',
    ],
    architecture:
      'Next.js modular architecture using context and custom layout layouts for easy downstream integration.',
    challenges:
      'Developing components that can easily fit different developer APIs without losing animation fidelity.',
    links: { demo: 'https://rudra-theme-first.vercel.app/' },
    status: 'In Development',
    year: '2026',
  },
  {
    id: 'poweronelectrotech',
    title: 'PowerOne Electrotech — MEP Company',
    shortDesc: 'MEP (Mechanical, Electrical, Plumbing) company website',
    description:
      'Developed an MEP company website using React.js and Tailwind CSS. Implemented responsive layouts, service sections, project showcases, and optimized performance.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'MEP service portfolio grids',
      'Project showcase galleries',
      'Responsive design using Tailwind CSS utility classes',
    ],
    architecture:
      'React SPA structured around clean, componentized project highlights, built with Tailwind CSS.',
    challenges:
      'Formulating a complex corporate engineering service list into clean, scan-friendly landing sections.',
    links: { demo: 'https://poweronelectrotech.in/' },
    status: 'Live',
    year: '2024',
  },
  {
    id: 'kiloifoods',
    title: 'Kiloi Foods',
    shortDesc: 'Server migration and domain transfer for a food brand',
    description:
      'Managed DevOps operations including server setup, domain transfer, and website migration for Kiloi Foods. Successfully transferred the domain and migrated the entire WordPress ecosystem without any data loss. Configured an Ubuntu VPS on GoDaddy with an Apache web server and MySQL database.',
    tech: ['Ubuntu', 'Apache', 'GoDaddy VPS', 'MySQL', 'WordPress', 'DevOps'],
    features: [
      '100% data preservation during migration',
      'Seamless domain transfer and DNS configuration without data loss',
      'Production deployment on Ubuntu VPS',
      'Apache web server setup and optimization',
      'MySQL database migration and management',
      'WordPress configuration and optimization',
    ],
    architecture:
      'LAMP stack (Linux, Apache, MySQL, PHP) architecture running WordPress, hosted on a GoDaddy Virtual Private Server.',
    challenges:
      'Ensuring zero downtime during domain transfer and migrating the existing WordPress database smoothly without data loss.',
    links: { demo: 'https://kiloifoods.com/' },
    status: 'Live',
    year: '2026',
  },
];
