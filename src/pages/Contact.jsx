import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { profile, contact } from "../data/portfolio";
import "./styles/Contact.css";

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
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function InfoIcon({ type }) {
  const paths = {
    mail: (
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    ),
    phone: (
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
    ),
    pin: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function FieldIcon({ type }) {
  const paths = {
    user: (
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    ),
    mail: (
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    ),
    tag: (
      <path d="M20.6 13.4 12 22l-9-9V4h9l8.6 8.6a1 1 0 0 1 0 1.4ZM7.5 6.5h.01" />
    ),
  };

  return (
    <svg
      className="field-icon"
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

const contactInfo = [
  {
    label: "Correo",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: "mail",
  },
  {
    label: "Teléfono / WhatsApp",
    value: contact.phone,
    href: `https://wa.me/${contact.phone.replace(/[^0-9]/g, "")}`,
    icon: "phone",
  },
  { label: "Ubicación", value: contact.location, href: null, icon: "pin" },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: `[Portafolio] Nuevo mensaje de ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setForm(emptyForm);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  const whatsapp = contact.social.find((s) => s.icon === "whatsapp");

  return (
    <section className="page-hero">
      <div className="container">
        <ScrollReveal>
          <p className="page-kicker">Hablemos</p>
          <h1 className="section-title">
            Contáctame <span className="text-gradient">aquí</span>
          </h1>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Escríbeme,
            respondo lo antes posible.
          </p>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal className="contact-info">
            <div className="contact-profile">
              <span className="contact-avatar">{initials}</span>
              <span className="contact-profile-meta">
                <span className="contact-profile-name">{profile.name}</span>
                <span className="contact-profile-role">{profile.subtitle}</span>
              </span>
              <span className="contact-status">
                <span className="pulse-dot" />
                {contact.available ? "Disponible" : "Ocupado"}
              </span>
            </div>

            <h2 className="contact-info-title">Información de contacto</h2>
            <p className="contact-info-text">
              Estoy abierto a nuevas oportunidades, proyectos freelance y
              colaboraciones. Cuéntame tu idea y construyamos algo juntos.
            </p>

            <div className="contact-list">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <span className="contact-list-icon">
                      <InfoIcon type={item.icon} />
                    </span>
                    <span className="contact-list-meta">
                      <span className="contact-list-label">{item.label}</span>
                      <span className="contact-list-value">{item.value}</span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-list-item"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="contact-list-item">
                    {content}
                  </div>
                );
              })}
            </div>

            <h3 className="contact-social-title">Sígueme</h3>
            <div className="contact-social">
              {contact.social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                  aria-label={item.name}
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
            {status === "sent" ? (
              <div className="contact-success">
                <span className="success-icon">✓</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirme, te responderé muy pronto.</p>
                <button
                  className="btn btn-ghost"
                  onClick={() => setStatus("idle")}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-head">
                  <h3 className="form-title">Envíame un mensaje</h3>
                  <p className="form-note">Respondo en menos de 24 horas.</p>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Nombre</label>
                    <span className="field-wrap">
                      <FieldIcon type="user" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </span>
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Correo</label>
                    <span className="field-wrap">
                      <FieldIcon type="mail" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@correo.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </span>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Asunto</label>
                  <span className="field-wrap">
                    <FieldIcon type="tag" />
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="¿Sobre qué me quieres contactar?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </span>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="form-error" role="alert">
                    No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme
                    por correo o WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>

                {whatsapp && (
                  <a
                    href={whatsapp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="form-whatsapp"
                  >
                    <span>Prefieres respuestas rápidas?</span>
                    <strong>Escríbeme por WhatsApp</strong>
                  </a>
                )}
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
