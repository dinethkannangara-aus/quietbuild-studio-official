import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    name: "ForgeFit Coaching Website",
    type: "Fitness Website Demo",
    description:
      "A premium dark website for fitness coaches with programs, booking section, and mobile-first design.",
  },
  {
    name: "Exam Progress Tracker",
    type: "Student Web App",
    description:
      "A clean student dashboard for tracking marks, weak lessons, and subject-wise improvement.",
  },
  {
    name: "AG Fitness Concept",
    type: "Local Gym Website Preview",
    description:
      "A professional gym website concept with packages, location, WhatsApp contact, and gallery sections.",
  },
];

const services = [
  {
    name: "Landing Page",
    price: "From $20",
    features: ["Mobile-friendly", "Contact button", "Social links", "Fast delivery"],
  },
  {
    name: "Business Website",
    price: "From $50",
    features: ["Home + services", "Gallery", "WhatsApp/contact", "Basic SEO structure"],
  },
  {
    name: "Simple Web App",
    price: "From $80",
    features: ["Dashboard UI", "Simple data", "Responsive layout", "GitHub Pages deploy"],
  },
];

const businessTypes = [
  "Gym / fitness coach",
  "Tutor / class",
  "Small business",
  "Other",
];

const contactLinks = [
  { label: "TikTok", value: "@quietbuild.studio", href: "https://www.tiktok.com/@quietbuild.studio" },
  { label: "Facebook", value: "PASTE_FACEBOOK_LINK", href: "PASTE_FACEBOOK_LINK" },
  { label: "Instagram", value: "PASTE_INSTAGRAM_LINK", href: "PASTE_INSTAGRAM_LINK" },
  { label: "WhatsApp", value: "94XXXXXXXXX", href: "https://wa.me/94XXXXXXXXX" },
];

function App() {
  const [form, setForm] = useState({
    businessName: "",
    businessType: businessTypes[0],
    message: "",
  });

  const requestMessage = useMemo(() => {
    const businessName = form.businessName.trim() || "My business";
    const message = form.message.trim() || "I want a clean website for my business.";

    return `Hi QuietBuild Studio, I want to request a website.

Business name: ${businessName}
Business type: ${form.businessType}
Message: ${message}`;
  }, [form]);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/94XXXXXXXXX?text=${encodeURIComponent(requestMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openEmail = () => {
    window.location.href = `mailto:quietbuildstudio@example.com?subject=${encodeURIComponent(
      "Website request",
    )}&body=${encodeURIComponent(requestMessage)}`;
  };

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home" aria-label="QuietBuild Studio home">
          <span className="logo-mark">Q</span>
          <span>QuietBuild Studio</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">DM "SITE"</a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Clean websites. Real impact.</p>
          <h1>Clean websites for gyms, coaches, tutors, and small businesses.</h1>
          <p className="hero-text">
            QuietBuild Studio creates mobile-friendly websites that make your business look professional
            and help customers contact you faster.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#work">View Work</a>
            <a className="secondary-btn" href="#contact">Request a Website</a>
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
              <span>Gym Website</span>
              <strong>Train harder. Book faster.</strong>
            </div>
            <div className="mock-grid">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="mock-card mock-card-side">
            <span>Coach Website</span>
            <div className="mini-bars">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="mock-card mock-card-phone">
            <span>Mobile First</span>
            <b></b>
            <i></i>
          </div>
        </div>
      </section>

      <section className="section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected concepts</p>
          <h2>Recent website and app concepts</h2>
        </div>
        <div className="card-grid">
          {projects.map((project, index) => (
            <article className="project-card glass-card" key={project.name}>
              <div className="project-preview">
                <div className={`preview-screen preview-${index + 1}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
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
          <p className="eyebrow">Website packages</p>
          <h2>Small builds with a clean finish</h2>
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
              <a href="#contact">Start request</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Project request</p>
          <h2>Want a clean website?</h2>
        </div>
        <div className="contact-layout">
          <aside className="contact-panel">
            <div>
              <h3>Let your next website feel clear, fast, and ready for real customers.</h3>
              <p>Send the word "SITE" or use the request form with your business details.</p>
            </div>
            <div className="social-stack">
              {contactLinks.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <b>{link.value}</b>
                </a>
              ))}
              <a href="mailto:quietbuildstudio@example.com">
                <span>Email</span>
                <b>quietbuildstudio@example.com</b>
              </a>
            </div>
          </aside>

          <form className="request-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Business name
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={updateForm}
                placeholder="Your business name"
              />
            </label>
            <label>
              Business type
              <select name="businessType" value={form.businessType} onChange={updateForm}>
                {businessTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                placeholder="Tell me what you want built..."
                rows="6"
              />
            </label>
            <div className="form-actions">
              <button type="button" onClick={openWhatsApp}>Send on WhatsApp</button>
              <button type="button" onClick={openEmail}>Send by Email</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
