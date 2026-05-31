const base = import.meta.env.BASE_URL;

export const siteData = {
  brand: {
    name: "QuietBuild Studio",
    logoLetter: "Q",
    tagline: "Clean websites. Real impact.",
    cta: 'DM "SITE"',
  },
  nav: ["Home", "Work", "Services", "Contact"],
  hero: {
    heading: "Clean websites for gyms, coaches, tutors, and small businesses.",
    text:
      "QuietBuild Studio creates mobile-friendly websites that make your business look professional and help customers contact you faster.",
    primaryButton: "View Work",
    secondaryButton: "Request a Website",
    mockup: {
      mainLabel: "Gym Website",
      mainTitle: "Train harder. Book faster.",
      sideLabel: "Coach Website",
      phoneLabel: "Mobile First",
    },
  },
  work: {
    eyebrow: "Selected concepts",
    title: "Recent website and app concepts",
  },
  projects: [
    {
      name: "ForgeFit Coaching Website",
      type: "Fitness Website Demo",
      description:
        "A premium dark website for fitness coaches with programs, booking section, and mobile-first design.",
      image: `${base}images/forgefit-preview.png`,
    },
    {
      name: "Exam Progress Tracker",
      type: "Student Web App",
      description:
        "A clean student dashboard for tracking marks, weak lessons, and subject-wise improvement.",
      image: `${base}images/exam-tracker-preview.png`,
    },
    {
      name: "KEISER Fitness Concept",
      type: "Local Gym Website Preview",
      description:
        "A professional gym website concept with packages, location, WhatsApp contact, and gallery sections.",
      image: `${base}images/ag-fitness-preview.png`,
    },
  ],
  servicesSection: {
    eyebrow: "Website packages",
    title: "Small builds with a clean finish",
    button: "Start request",
  },
  services: [
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
  ],
  contact: {
    eyebrow: "Project request",
    title: "Want a clean website?",
    heading: "Let your next website feel clear, fast, and ready for real customers.",
    text: 'Send the word "SITE" or use the request form with your business details.',
    defaultBusinessName: "My business",
    defaultMessage: "I want a clean website for my business.",
    messageIntro: "Hi QuietBuild Studio, I want to request a website.",
    requestLabels: {
      businessName: "Business name",
      businessType: "Business type",
      message: "Message",
    },
    emailSubject: "Website request",
    emailLabel: "Email",
    whatsappNumber: "94719952251",
    
    businessTypes: ["Gym / fitness coach", "Tutor / class", "Small business", "Other"],
    form: {
      businessNameLabel: "Business name",
      businessNamePlaceholder: "Your business name",
      businessTypeLabel: "Business type",
      messageLabel: "Message",
      messagePlaceholder: "Tell me what you want built...",
      whatsappButton: "Send on WhatsApp",
      emailButton: "Send by Email",
    },
  },
  socialLinks: [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@quietbuild.studio",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61589256973359",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/quietbuild.studio?igsh=MW4zdGZkZ3VjeTdleA%3D%3D&utm_source=qr",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/94719952251",
    },
  ],
};
