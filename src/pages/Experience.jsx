import ScrollReveal from '../components/ScrollReveal';
import { experience } from '../data/portfolio';
import './styles/Experience.css';

export default function Experience() {
  return (
    <section className="page-hero">
      <div className="container">
        <ScrollReveal>
          <p className="page-kicker">Trayectoria</p>
          <h1 className="section-title">
            Experiencia <span className="text-gradient">profesional</span>
          </h1>
          <p className="section-subtitle">
            Mi recorrido en el mundo del desarrollo web y la tecnología.
          </p>
        </ScrollReveal>

        <div className="timeline">
          {experience.map((item, i) => (
            <ScrollReveal key={item.role} delay={i % 2} className="timeline-item">
              <div className="timeline-dot">
                <span />
              </div>
              <div className="timeline-card">
                <div className="timeline-head">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-role">{item.role}</span>
                </div>
                <h3 className="timeline-company">{item.company}</h3>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-skills">
                  {item.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
