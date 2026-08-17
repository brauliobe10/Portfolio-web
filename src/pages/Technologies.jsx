import ScrollReveal from '../components/ScrollReveal';
import { technologies } from '../data/portfolio';
import './styles/Technologies.css';

export default function Technologies() {
  return (
    <section className="page-hero">
      <div className="container">
        <ScrollReveal>
          <p className="page-kicker">Mi stack</p>
          <h1 className="section-title">
            Tecnologías <span className="text-gradient">web</span>
          </h1>
          <p className="section-subtitle">
            Las herramientas y tecnologías que utilizo para construir aplicaciones modernas de
            principio a fin.
          </p>
        </ScrollReveal>

        <div className="tech-groups">
          {technologies.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi % 2} className="tech-group">
              <h2 className="tech-category">
                <span className="tech-category-bar" />
                {group.category}
              </h2>

              <div className="tech-grid">
                {group.items.map((tech) => (
                  <div key={tech.name} className="tech-card" style={{ '--tech-color': tech.color }}>
                    <div className="tech-info">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-level">{tech.level}%</span>
                    </div>
                    <div className="tech-track">
                      <div className="tech-fill" style={{ width: `${tech.level}%` }} />
                    </div>
                    <div className="tech-flare" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
