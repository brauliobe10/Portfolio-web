import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/portfolio';
import './styles/Projects.css';

const gradientMap = {
  inventario: 'linear-gradient(135deg, #38bdf8, #0284c7)',
  ecommerce: 'linear-gradient(135deg, #0ea5e9, #075985)',
  taskflow: 'linear-gradient(135deg, #7dd3fc, #0284c7)',
  reservas: 'linear-gradient(135deg, #0284c7, #0a4260)',
  clinica: 'linear-gradient(135deg, #38bdf8, #0a4a66)',
  dashboard: 'linear-gradient(135deg, #0ea5e9, #0b3d53)',
};

const iconMap = {
  inventario: '📦',
  ecommerce: '🛒',
  taskflow: '✅',
  reservas: '🍽️',
  clinica: '🦷',
  dashboard: '📊',
};

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function getImageSrc(image) {
  if (!image) return '';
  if (image.startsWith('/') || image.startsWith('http')) return image;
  if (image.includes('.')) return `/images/projects/${image}`;
  return `/images/projects/${image}.jpg`;
}

function ProjectThumb({ project }) {
  const src = getImageSrc(project.image);
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className="project-thumb"
        style={{ background: gradientMap[project.image] || gradientMap.inventario }}
      >
        <span className="project-year">{project.year}</span>
        <span className="project-icon">{iconMap[project.image] || '💻'}</span>
      </div>
    );
  }

  const hasDemo = project.url && project.url !== '#';

  const thumb = (
    <>
      <img
        src={src}
        alt={`Captura del proyecto ${project.title}`}
        className="project-img"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <span className="project-shine" aria-hidden="true" />
      <span className="project-year">{project.year}</span>
      {hasDemo && (
        <span className="project-view">
          <ExternalIcon />
          Ver demo
        </span>
      )}
    </>
  );

  return hasDemo ? (
    <a
      className="project-thumb project-thumb-link"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ver el proyecto ${project.title}`}
    >
      {thumb}
    </a>
  ) : (
    <div className="project-thumb">{thumb}</div>
  );
}

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
              <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
                {project.featured && (
                  <span className="project-ribbon">Destacado</span>
                )}

                <ProjectThumb project={project} />

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
                    {project.url && project.url !== '#' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-link--demo"
                        aria-label={`Ver el proyecto ${project.title}`}
                      >
                        <span>Demo</span>
                        <ExternalIcon />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-link--gh"
                        aria-label={`Repositorio en GitHub de ${project.title}`}
                      >
                        <GitHubIcon />
                        <span>Repositorio</span>
                      </a>
                    )}
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