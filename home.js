const translations = {
    en: {
        "hero-title": "Welcome to My Portfolio",
        "hero-description": "Crafting digital experiences with creativity and precision.",
        "hero-cta": "Learn More",
        "about-title": "About Me",
        "about-description": "I am a web developer passionate about creating modern, user-friendly websites.",
        "skills-title": "Skills",
        "features-title": "What I Offer",
        "feature-item-rd": "Responsive Design",
        "feature-item-rd-description": "Websites that look great on any device.",
        "feature-item-cs": "Custom Solutions",
        "feature-item-cs-description": "Tailored designs to meet your unique needs.",
        "feature-item-seo": "SEO Optimization",
        "feature-item-seo-description": "Boost your online visibility and reach.",
        "portfolio-title": "My Work",
        "portfolio-item-1-title": "Project 1",
        "portfolio-item-1-description": "A sleek e-commerce platform designed for conversions.",
        "portfolio-item-2-title": "Project 2",
        "portfolio-item-2-description": "A creative portfolio site showcasing unique designs.",
        "contact-title": "Get in Touch",
        "contact-name-label": "Your Name",
        "contact-email-label": "Your Email",
        "contact-message-label": "Your Message",
        "contact-submit": "Send Message",
        "footer": "© 2025 Your Name. All Rights Reserved."
    },
    es: {
        "hero-title": "Bienvenido a Mi Portafolio",
        "hero-description": "Creando experiencias digitales con creatividad y precisión.",
        "hero-cta": "Saber Más",
        "about-title": "Sobre Mí",
        "about-description": "Soy un desarrollador web apasionado por crear sitios web modernos y fáciles de usar.",
        "skills-title": "Habilidades",
        "features-title": "Lo Que Ofrezco",
        "feature-item-rd": "Diseño Responsivo",
        "feature-item-rd-description": "Sitios web que se ven geniales en cualquier dispositivo.",
        "feature-item-cs": "Soluciones Personalizadas",
        "feature-item-cs-description": "Diseños a medida para satisfacer tus necesidades únicas.",
        "feature-item-seo": "Optimización SEO",
        "feature-item-seo-description": "Impulsa tu visibilidad en línea y alcance.",
        "portfolio-title": "Mi Trabajo",
        "portfolio-item-1-title": "Proyecto 1",
        "portfolio-item-1-description": "Una plataforma de comercio electrónico diseñada para conversiones.",
        "portfolio-item-2-title": "Proyecto 2",
        "portfolio-item-2-description": "Un sitio de portafolio creativo que muestra diseños únicos.",
        "contact-title": "Ponte en Contacto",
        "contact-name-label": "Tu Nombre",
        "contact-email-label": "Tu Correo Electrónico",
        "contact-message-label": "Tu Mensaje",
        "contact-submit": "Enviar Mensaje",
        "footer": "© 2025 Tu Nombre. Todos los derechos reservados."
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
    localStorage.setItem("language", lang);
}

// Set onclick handlers for language buttons
document.getElementById("lang-en").onclick = function () {
    setLanguage("en");
};
document.getElementById("lang-es").onclick = function () {
    setLanguage("es");
};

// Load saved language preference
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);
