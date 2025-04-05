const translations = {
    en: {
        "hero-title": "Welcome to My Portfolio",
        "hero-description": "Full Stack Developer & Systems Analyst | Focused on agile web solutions and intuitive UX",
        "hero-cta": "View CV",
        "about-title": "About Me",
        "about-description": "Developer with 2+ years of experience in corporate and freelance environments. I blend technical skills (PHP, C#, Laravel, WordPress) with a user-centric approach to build scalable solutions. Passionate about turning ideas into functional products, from landing pages to complex systems. Currently, while pursuing my Computer Engineering degree, I work as a Systems Analyst, bridging users and technology.",
        "skills-title": "Skills",
        "features-title": "What I Offer",
        "feature-item-rd": "Responsive Design",
        "feature-item-rd-description": "Websites that look great on any device.",
        "feature-item-cs": "Custom Solutions",
        "feature-item-cs-description": "Tailored designs to meet your unique needs.",
        "feature-item-seo": "SEO Optimization",
        "feature-item-seo-description": "Boost your online visibility and reach.",
        "portfolio-title": "My Work",
        "portfolio-item-1-title": "Online Product Catalog (PHP/Laravel)",
        "portfolio-item-1-description": "Virtual store with cart and authentication. (In development)",
        "portfolio-item-2-title": "Loan Management System (C#/.NET)",
        "portfolio-item-2-description": "Loan management system with admin dashboard. (In development)",
        "portfolio-item-3-title": "Brick Game & Color Picker (JavaScript)",
        "portfolio-item-3-description": "Interactive games with DOM manipulation.",
        "contact-title": "Get in Touch",
        "contact-name-label": "Your Name",
        "contact-email-label": "Your Email",
        "contact-message-label": "Your Message",
        "contact-submit": "Send Message",
        "footer": "© 2025 Your Name. All Rights Reserved."
    },
    es: {
        "hero-title": "Bienvenido a Mi Portafolio",
        "hero-description": "Desarrollador Full Stack y Analista de Sistemas | Especializado en soluciones web ágiles y UX intuitivo",
        "hero-cta": "Ver CV",
        "about-title": "Sobre Mí",
        "about-description": "Desarrollador con 2+ años de experiencia en entornos corporativos y freelancing. Combino habilidades técnicas (PHP, C#, Laravel, WordPress) con un enfoque centrado en el usuario para crear soluciones escalables. Me apasiona transformar ideas en productos funcionales, desde landing pages hasta sistemas complejos. Actualmente, mientras avanzo en mi ingeniería en Computación, trabajo como Analista de Sistemas, puente entre usuarios y tecnología.",
        "skills-title": "Habilidades",
        "features-title": "Lo Que Ofrezco",
        "feature-item-rd": "Diseño Responsivo",
        "feature-item-rd-description": "Sitios web que se ven geniales en cualquier dispositivo.",
        "feature-item-cs": "Soluciones Personalizadas",
        "feature-item-cs-description": "Diseños a medida para satisfacer tus necesidades únicas.",
        "feature-item-seo": "Optimización SEO",
        "feature-item-seo-description": "Impulsa tu visibilidad en línea y alcance.",
        "portfolio-title": "Mi Trabajo",
        "portfolio-item-1-title": "Catálogo de Productos Online (PHP/Laravel)",
        "portfolio-item-1-description": "Tienda virtual con carrito y autenticación. (En desarrollo)",
        "portfolio-item-2-title": "Sistema de Préstamos (C#/.NET)",
        "portfolio-item-2-description": "Gestión de préstamos con dashboard administrativo. (En desarrollo)",
        "portfolio-item-3-title": "Brick Game & Color Picker (JavaScript)",
        "portfolio-item-3-description": "Juegos interactivos con manipulación del DOM.",
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
