// ============================================================
//  DATOS CENTRALES DEL PORTAFOLIO
//  Edita aquí todos los contenidos: perfil, proyectos,
//  experiencia, tecnologías y contacto.
// ============================================================

export const profile = {
  name: 'Braulio Bellodas Estrella',
  firstName: 'Braulio',
  role: 'Estudiante de Ingeniería de Sistemas',
  subtitle: 'Desarrollador Web',
  tagline:
    'Creo aplicaciones y sitios web modernos, rápidos y responsivos. En constante aprendizaje para transformar ideas en soluciones digitales.',
  about: [
    '¡Hola! Soy Braulio, estudiante de Ingeniería de Sistemas apasionado por el desarrollo web. Me especializo en construir experiencias digitales modernas y funcionales, desde la maquetación frontend hasta la lógica del backend.',
    'Disfruto aprendiendo nuevas tecnologías cada día y aplicándolas en proyectos reales. Mi objetivo es convertir líneas de código en productos que faciliten la vida de las personas y aporten valor real.',
  ],
  location: 'Perú',
};

export const stats = [
  { value: '+15', label: 'Proyectos desarrollados' },
  { value: '+10', label: 'Tecnologías dominadas' },
  { value: '3+', label: 'Años de estudio y práctica' },
  { value: '100%', label: 'Dedicación y pasión' },
];

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Inventario',
    description:
      'Aplicación web para controlar stock, entradas y salidas de productos con reportes en tiempo real.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'inventario',
    url: '#',
    github: '#',
    year: '2025',
  },
  {
    id: 2,
    title: 'E-Commerce Moderno',
    description:
      'Tienda online con carrito de compras, pasarela de pagos y panel de administración de productos.',
    technologies: ['React', 'Redux', 'Node.js', 'Stripe', 'MongoDB'],
    image: 'ecommerce',
    url: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 3,
    title: 'TaskFlow - Gestor de Tareas',
    description:
      'Aplicación de productividad con autenticación, listas colaborativas y sincronización en la nube.',
    technologies: ['React', 'Firebase', 'CSS'],
    image: 'taskflow',
    url: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 4,
    title: 'Sistema de Reservas para Restaurante',
    description:
      'Sitio con reservas online, gestión de mesas y notificaciones por correo para el establecimiento.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: 'reservas',
    url: '#',
    github: '#',
    year: '2023',
  },
  {
    id: 5,
    title: 'Landing Page Clínica Dental',
    description:
      'Página institucional con agendamiento de citas, galería de servicios y diseño totalmente responsivo.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'clinica',
    url: '#',
    github: '#',
    year: '2023',
  },
  {
    id: 6,
    title: 'Dashboard de Ventas con API',
    description:
      'Panel de analytics que consume una API REST y visualiza métricas de ventas con gráficos interactivos.',
    technologies: ['React', 'Chart.js', 'REST API'],
    image: 'dashboard',
    url: '#',
    github: '#',
    year: '2024',
  },
];

export const experience = [
  {
    period: '2025 - Actualidad',
    role: 'Desarrollador Web Freelance',
    company: 'Independiente',
    description:
      'Desarrollo de sitios web y aplicaciones para clientes particulares, trabajando con React, Node.js y bases de datos.',
    skills: ['React', 'Node.js', 'MongoDB', 'Diseño Web'],
  },
  {
    period: '2024 - 2025',
    role: 'Practicante de Desarrollo Web',
    company: 'Startup de Tecnología',
    description:
      'Apoyo en el desarrollo y mantenimiento de aplicaciones web, corrección de errores y mejora de la experiencia de usuario.',
    skills: ['JavaScript', 'CSS', 'Git', 'Metodologías Ágiles'],
  },
  {
    period: '2023 - 2024',
    role: 'Soporte Técnico y Desarrollo Web',
    company: 'Universidad / Proyecto Académico',
    description:
      'Participación en proyectos universitarios: sistemas de información para la gestión académica y mantenimiento de sitios institucionales.',
    skills: ['HTML', 'CSS', 'MySQL', 'PHP'],
  },
  {
    period: '2022 - 2023',
    role: 'Proyectos Personales y Formación',
    company: 'Autodidacta',
    description:
      'Inicio en el mundo del desarrollo web: retos, sitios personales y primeros pasos en frontend con buenas prácticas.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
];

export const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', level: 90, color: '#e34f26' },
      { name: 'CSS3', level: 85, color: '#1572b6' },
      { name: 'JavaScript', level: 85, color: '#f7df1e' },
      { name: 'React', level: 80, color: '#61dafb' },
      { name: 'Redux', level: 70, color: '#764abc' },
      { name: 'Tailwind CSS', level: 75, color: '#38bdf8' },
      { name: 'Bootstrap', level: 80, color: '#7952b3' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 75, color: '#68a063' },
      { name: 'Express', level: 75, color: '#3f3f46' },
      { name: 'Python', level: 65, color: '#3776ab' },
      { name: 'Django', level: 55, color: '#092e20' },
      { name: 'REST APIs', level: 80, color: '#b3122a' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'MongoDB', level: 75, color: '#47a248' },
      { name: 'MySQL', level: 80, color: '#4479a1' },
      { name: 'PostgreSQL', level: 65, color: '#336791' },
      { name: 'Firebase', level: 70, color: '#ffca28' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git / GitHub', level: 85, color: '#f05033' },
      { name: 'Vite', level: 80, color: '#646cff' },
      { name: 'Docker', level: 55, color: '#2496ed' },
      { name: 'Figma', level: 70, color: '#a259ff' },
      { name: 'Linux', level: 65, color: '#fcc624' },
    ],
  },
];

export const contact = {
  email: 'braulio.bellodas@example.com',
  phone: '+51 999 999 999',
  social: [
    {
      name: 'GitHub',
      handle: '@braulio-bellodas',
      url: 'https://github.com/',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      handle: '/in/braulio-bellodas',
      url: 'https://linkedin.com/',
      icon: 'linkedin',
    },
    {
      name: 'WhatsApp',
      handle: '+51 999 999 999',
      url: 'https://wa.me/51999999999',
      icon: 'whatsapp',
    },
    {
      name: 'Correo',
      handle: 'braulio.bellodas@example.com',
      url: 'mailto:braulio.bellodas@example.com',
      icon: 'mail',
    },
  ],
  available: true,
};