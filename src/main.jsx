import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { siteData } from "./siteData.js";
import "./styles.css";

function App() {
  const {
    brand,
    nav,
    hero,
    work,
    projects,
    servicesSection,
    services,
    contact,
    socialLinks,
  } = siteData;

  const [form, setForm] = useState({
    businessName: "",
    businessType: contact.businessTypes[0],
    message: "",
  });

  const requestMessage = useMemo(() => {
    const businessName = form.businessName.trim() || contact.defaultBusinessName;
    const message = form.message.trim() || contact.defaultMessage;

    return `${contact.messageIntro}

${contact.requestLabels.businessName}: ${businessName}
${contact.requestLabels.businessType}: ${form.businessType}
${contact.requestLabels.message}: ${message}`;
  }, [contact, form]);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(requestMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openEmail = () => {
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      contact.emailSubject,
    )}&body=${encodeURIComponent(requestMessage)}`;
  };

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home" aria-label={`${brand.name} home`}>
             <img
            src={siteData.logo}
            alt="QuietBuild Studio logo"
            className="brand-logo"
          />
          <span>{brand.name}</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {nav.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">{brand.cta}</a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">{brand.tagline}</p>
          <h1>{hero.heading}</h1>
          <p className="hero-text">{hero.text}</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#work">{hero.primaryButton}</a>
            <a className="secondary-btn" href="#contact">{hero.secondaryButton}</a>
          </div>
        </div>

        <div className="portfolio-stage" aria-label="Portfolio preview cards">
          <div className="mock-card mock-card-main">
            <div className="mock-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mock-hero">
              <span>{hero.mockup.mainLabel}</span>
              <strong>{hero.mockup.mainTitle}</strong>
            </div>
            <div className="mock-grid">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="mock-card mock-card-side">
            <span>{hero.mockup.sideLabel}</span>
            <div className="mini-bars">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="mock-card mock-card-phone">
            <span>{hero.mockup.phoneLabel}</span>
            <b></b>
            <i></i>
          </div>
        </div>
      </section>

      <section className="section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">{work.eyebrow}</p>
          <h2>{work.title}</h2>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article className="project-card glass-card" key={project.name}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <span>{project.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="section-heading">
          <p className="eyebrow">{servicesSection.eyebrow}</p>
          <h2>{servicesSection.title}</h2>
        </div>
        <div className="pricing-grid">
          {services.map((service) => (
            <article className="pricing-card glass-card" key={service.name}>
              <div>
                <p>{service.name}</p>
                <h3>{service.price}</h3>
              </div>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact">{servicesSection.button}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
        </div>
        <div className="contact-layout">
          <aside className="contact-panel">
            <div>
              <h3>{contact.heading}</h3>
              <p>{contact.text}</p>
            </div>
            <div className="social-stack">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <b>{link.value}</b>
                </a>
              ))}
              <a href={`mailto:${contact.email}`}>
                <span>{contact.emailLabel}</span>
                <b>{contact.email}</b>
              </a>
            </div>
          </aside>

          <form className="request-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              {contact.form.businessNameLabel}
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={updateForm}
                placeholder={contact.form.businessNamePlaceholder}
              />
            </label>
            <label>
              {contact.form.businessTypeLabel}
              <select name="businessType" value={form.businessType} onChange={updateForm}>
                {contact.businessTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              {contact.form.messageLabel}
              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                placeholder={contact.form.messagePlaceholder}
                rows="6"
              />
            </label>
            <div className="form-actions">
              <button type="button" onClick={openWhatsApp}>{contact.form.whatsappButton}</button>
              <button type="button" onClick={openEmail}>{contact.form.emailButton}</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
