import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/portfolio';
import './styles/Projects.css';

const gradientMap = {
  inventario: 'linear-gradient(135deg, #00ff9d, #00b86a)',
  ecommerce: 'linear-gradient(135deg, #00e676, #00704a)',
  taskflow: 'linear-gradient(135deg, #33ffb8, #00b86a)',
  reservas: 'linear-gradient(135deg, #00b86a, #0d4a35)',
  clinica: 'linear-gradient(135deg, #00ff9d, #0a5c40)',
  dashboard: 'linear-gradient(135deg, #00e676, #0b3d2e)',
};

export default function Projects() {
  return (
    <section className="page-hero">
      <div className="container">
        <ScrollReveal>
          <p className="page-kicker">Mi trabajo</p>
          <h1 className="section-title">
            Proyectos <span className="text-gradient">realizados</span>
          </h1>
          <p className="section-subtitle">
            Una selección de los proyectos que he desarrollado combinando diseño moderno y
            funcionalidad real.
          </p>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i + 1) % 3}>
              <article className="project-card">
                <div
                  className="project-thumb"
                  style={{ background: gradientMap[project.image] || gradientMap.inventario }}
                >
                  <span className="project-year">{project.year}</span>
                  <span className="project-icon">
                    {project.image === 'inventario' && '📦'}
                    {project.image === 'ecommerce' && '🛒'}
                    {project.image === 'taskflow' && '✅'}
                    {project.image === 'reservas' && '🍽️'}
                    {project.image === 'clinica' && '🦷'}
                    {project.image === 'dashboard' && '📊'}
                  </span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.url} className="project-link" aria-label={`Ver proyecto ${project.title}`}>
                      <span>Ver proyecto</span> ↗
                    </a>
                    <a href={project.github} className="project-link" aria-label={`Código en GitHub de ${project.title}`}>
                      <span>GitHub</span> ⌥
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
