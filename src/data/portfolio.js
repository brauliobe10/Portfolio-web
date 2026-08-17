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
    'Construyo aplicaciones y sitios web de alto rendimiento, escalables y optimizados para la mejor experiencia de usuario. Transformo ideas complejas en soluciones digitales funcionales y modernas.',
  about: [
    '¡Hola! Soy Braulio, estudiante de Ingeniería de Sistemas apasionado por el desarrollo web. Me especializo en construir experiencias digitales modernas y funcionales, desde la maquetación frontend hasta la lógica del backend.',
    'Disfruto aprendiendo nuevas tecnologías cada día y aplicándolas en proyectos reales. Mi objetivo es convertir líneas de código en productos que faciliten la vida de las personas y aporten valor real.',
  ],
  location: 'Perú',
};

export const stats = [
  { value: '+5', label: 'Proyectos desarrollados' },
  { value: '+6', label: 'Tecnologías dominadas' },
  { value: '3+', label: 'Años de estudio y práctica' },
  { value: '100%', label: 'Dedicación y pasión' },
];

export const projects = [
  {
    id: 1,
    title: 'Sistema de gestion POS para Dulce Cafe',
    description:
      'Aplicación web para controlar stock, ventas, entradas y salidas de productos con reportes en tiempo real.',
    technologies: ['PHP', 'Tailwind', 'Boostrap', 'PostgreSQL', 'Supabase'],
    image: '/images/projects/dulcecafe.jpg',
    url: 'https://dulce-cafepro.onrender.com/',
    github: 'https://github.com/brauliobe10/dulce_cafepro',
    year: '2026',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce para tienda de motos',
    description:
      'Tienda online con carrito de compras, pasarela de pagos y panel de administración de productos, usuarios, roles.',
technologies: ['PHP', 'Laravel', 'Livewire', 'Boostrap', 'PostgreSQL'],
    image: '/images/projects/motos-proyecto.jpg',
    url: '#',
    github: 'https://github.com/brauliobe10/project',
    year: '2024',
    featured: true,
  },
  {
    id: 3,
    title: 'Landing page para Sabia Madre Tierra',
    description:
      'Sitio web para mostrar proyectos realizados por grupo universitario.',
    technologies: ['HTML', 'CSS', 'Javascript' , 'Tailwind'],
    image: '/images/projects/sabia-madre.jpg',
    url: 'https://sabia-madre-tierra.vercel.app/',
    github: 'https://github.com/brauliobe10/Sabia-Madre-Tierra',
    year: '2026',
  },
  {
    id: 4,
    title: 'Landing page para Rutas del Norte',
    description:
      'Sitio web para mostrar proyectos realizados por Programa Rutas del Norte.',
    technologies: ['HTML', 'CSS', 'Javascript' , 'Tailwind'],
    image: '/images/projects/rutas.jpg',
    url: 'https://rutasdelnorte.vercel.app/index.html',
    github: 'https://github.com/brauliobe10/web-tv',
    year: '2026',
  },
  {
    id: 5,
    title: 'Aplicacion con consumo de api del clima',
    description:
      'Landing page de consulta de clima segun Paises o Ciudades.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/clima.jpg',
    url: 'https://aplicacion-clima-theta.vercel.app/',
    github: 'https://github.com/brauliobe10/Aplicacion-Clima',
    year: '2026',
  },
];

export const experience = [
  {
    period: '2025 - Actualidad',
    role: 'Desarrollador Web Freelance',
    company: 'Independiente',
    description:
      'Desarrollo de sitios web y aplicaciones para clientes particulares, trabajando con React, Laravel, y bases de datos.',
    skills: ['React', 'Laravel', 'Livewire', 'Boostrap', 'Tailwind', 'Filament', 'Diseño Web', 'Git' , 'Github'],
  },
  {
    period: '2024 - 2025',
    role: 'Soporte Tecnico',
    company: 'Dignita Tech - WorldCoin',
    description:
      'Apoyo en el mantenimiento de la aplicacion, generacion de ticketsde soporte,  corrección de errores y mejora de la experiencia de usuario',
    skills: ['Kotlin', 'CSS', 'Git', 'Metodologías Ágiles'],
  },
  {
    period: '2022 - Actualidad',
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
      { name: 'React', level: 75, color: '#61dafb' },
      { name: 'Boostrap', level: 70, color: '#764abc' },
      { name: 'Tailwind CSS', level: 75, color: '#38bdf8' },
      { name: 'Bootstrap', level: 90, color: '#7952b3' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', level: 90, color: '#68a063' },
      { name: 'PHP', level: 80, color: '#3f3f46' },
      { name: 'Java', level: 65, color: '#3776ab' },
      { name: 'C++', level: 55, color: '#092e20' },
      { name: 'Python', level: 75, color: '#61dafb' },
      { name: 'C#', level: 55, color: '#092e20' },
      { name: 'REST APIs', level: 80, color: '#b3122a' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'SqlServer', level: 75, color: '#47a248' },
      { name: 'MySQL', level: 80, color: '#4479a1' },
      { name: 'PostgreSQL', level: 65, color: '#336791' },
      { name: 'SQLite', level: 70, color: '#ffca28' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git / GitHub', level: 85, color: '#f05033' },
      { name: 'Vite', level: 80, color: '#646cff' },
      { name: 'Figma', level: 70, color: '#a259ff' },
      { name: 'Postman', level: 75, color: '#fcc624' },
    ],
  },
];

export const contact = {
  email: 'braulio.bellodas@example.com',
  phone: '+51 922 306 476',
  social: [
    {
      name: 'GitHub',
      handle: '@brauliobe10',
      url: 'https://github.com/brauliobe10',
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
      handle: '+51 922 306 476',
      url: 'https://wa.me/51922306476',
      icon: 'whatsapp',
    },
    {
      name: 'Correo',
      handle: 'brauliobedeveloper@gmail.com',
      url: 'mailto:brauliobedeveloper@gmail.com',
      icon: 'mail',
    },
  ],
  available: true,
  location: 'Perú',
  formEndpoint: 'https://formsubmit.co/brauliobedeveloper@gmail.com',
};