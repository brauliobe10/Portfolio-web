import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { contact } from '../data/portfolio';
import './styles/Contact.css';

function SocialIcon({ name }) {
  const paths = {
    github: (
      <>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </>
    ),
    linkedin: (
      <>
        <path d="M6.94 8.5v11.1H3.5V8.5h3.44ZM5.22 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM20.5 12.8v6.8h-3.44v-6.6c0-1.66-.6-2.79-2.07-2.79-1.13 0-1.8.76-2.1 1.5-.1.27-.13.64-.13 1v6.89H9.31V8.5h3.45v1.52a3.44 3.44 0 0 1 3.12-1.72c2.28 0 3.62 1.5 3.62 4.5Z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M12 2a10 10 0 0 0-8.66 15.02L2 22l5.13-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.53 0-3-.42-4.28-1.2l-.3-.18-3.05.78.82-2.98-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.54-6.13c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.94c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.3-.23.26-.88.87-.88 2.11 0 1.24.9 2.43 1.03 2.6.13.17 1.78 2.72 4.32 3.82.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.3Z" />
      </>
    ),
    mail: (
      <>
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="page-hero">
      <div className="container">
        <ScrollReveal>
          <p className="page-kicker">Hablemos</p>
          <h1 className="section-title">
            Contáctame <span className="text-gradient">aquí</span>
          </h1>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Escríbeme, respondo lo antes
            posible.
          </p>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal className="contact-info">
            <h2 className="contact-info-title">Información de contacto</h2>
            <p className="contact-info-text">
              Estoy abierto a nuevas oportunidades, proyectos freelance y colaboraciones.
            </p>

            <div className="contact-status">
              <span className="pulse-dot" />
              {contact.available ? 'Disponible para proyectos' : 'Ocupado en este momento'}
            </div>

            <div className="contact-social">
              {contact.social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <span className="social-icon">
                    <SocialIcon name={item.icon} />
                  </span>
                  <span className="social-meta">
                    <span className="social-name">{item.name}</span>
                    <span className="social-handle">{item.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span className="success-icon">✓</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirme, te responderé muy pronto.</p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" type="text" placeholder="Tu nombre" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Correo</label>
                    <input id="email" type="email" placeholder="tu@correo.com" required />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Asunto</label>
                  <input id="subject" type="text" placeholder="¿Sobre qué me quieres contactar?" required />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Enviar mensaje
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
