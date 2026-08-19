import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { profile, stats } from '../data/portfolio';
import './styles/Home.css';

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <ScrollReveal>
              <p className="hero-badge">
                <span className="pulse-dot" />
                Disponible para proyectos
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h1 className="hero-title">
                Hola, soy <span className="text-gradient">{profile.name}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h2 className="hero-role">{profile.subtitle}</h2>
              <p className="hero-subtitle">{profile.tagline}</p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="hero-actions">
                <Link to="/proyectos" className="btn btn-primary">
                  Ver mis proyectos
                </Link>
                <Link to="/contacto" className="btn btn-ghost">
                  Contáctame
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2} className="hero-visual">
            <div className="code-card">
              <div className="code-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="code-title">desarrollador.js</span>
              </div>
              <pre className="code-body">
                <code>{`const desallador = {
  nombre: '${profile.firstName}',
  carrera: 'Ing. de Sistemas',
  stack: ['Laravel', 'PHP', 'Livewire', 'React'],
  objetivo: 'Crear soluciones
             que impacten ',
  siempreAprendiendo: true,
};

console.log(desarrollador);`}</code>
              </pre>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i % 3}>
                <div className="stat-card">
                  <span className="stat-value text-gradient">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sobre mí ---------- */}
      <section className="section about-section">
        <div className="container about-grid">
          <ScrollReveal className="about-side">
            <h2 className="about-title">
              Sobre <span className="text-gradient">mí</span>
            </h2>
            <p className="section-subtitle about-subtitle">
              Un poco de mi historia y lo que me motiva cada día.
            </p>
            <div className="about-quote">
              <p>
                &ldquo;El código es la herramienta con la que transformo ideas en soluciones reales.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className="about-main">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="about-paragraph">
                {paragraph}
              </p>
            ))}
            <div className="about-tags">
              {['PHP', 'Laravel', 'JavaScript', 'Python', 'Bases de Datos', 'C++', 'HTML', 'Redes', 'Diseño Responsivo', 'API REST', ].map(
                (tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ),
              )}
            </div>
            <Link to="/contacto" className="btn btn-primary">
              Trabajemos juntos
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
