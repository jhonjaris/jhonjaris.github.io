const translations = {
    en: {
        "profile-name": "Jhonjaris Soto",
        "profile-title": "Software Developer",
        "tech-title-html": "HTML5",
        "tech-title-css": "CSS3",
        "tech-title-js": "JavaScript",
        "tech-title-php": "PHP7",
        "tech-title-mysql": "MySQL",
        "tech-title-git": "Git",
        "tech-title-laravel": "Laravel",
        "tech-title-bootstrap": "Bootstrap",
        "tech-title-jquery": "jQuery",
        "tech-title-tailwind": "Tailwind CSS",
        "tech-title-excel": "Excel",
        "extras-title": "Extras",
        "extra-english": "English",
        "extra-adobe": "Adobe Ps / Ai / Xd",
        "extra-public-speaking": "Public Speaking",
        "extra-linux": "Linux (Ubuntu)",
        "extra-photoshop": "Adobe Photoshop",
        "extra-illustrator": "Adobe Illustrator",
        "extra-xd": "Adobe XD",
        "extra-excel": "Excel",
        "education-title": "Education",
        "education-item-1": "Responsive Web Development",
        "education-item-2": "Computer Science Engineering",
        "education-item-3": "Software Development",
        "experience-title": "Work Experience",
        "experience-item-1-company": "Autoridad Portuaria Dominicana",
        "experience-item-1-role": "Information Systems Analyst",
        "experience-item-1-period": "Present",
        // "experience-item-1-detail-1": "Migration of legacy systems to C# (.NET)",
        "experience-item-1-detail-2": "Mediation between technical teams and end users",
        "experience-item-2-company": "Skillful Antics",
        "experience-item-2-role": "Freelance Web Developer",
        "experience-item-2-period": "2022-2023",
        "experience-item-2-detail-1": "Development of 15+ landing pages in WordPress (WP Bakery, AJAX, jQuery)",
        "experience-item-2-detail-2": "Performance optimization (CSS/JS) for 3 clients",
        "experience-item-3-company": "Applaudo Studios",
        "experience-item-3-role": "Web Developer",
        "experience-item-3-period": "2022 (3 months)",
        "experience-item-3-detail-1": "Contribution to projects with Laravel, Blade, and Bootstrap",
        "experience-item-4-company": "BancaDom S.R.L.",
        "experience-item-4-role": "Technical Support",
        "experience-item-4-period": "2019-2021",
        "experience-item-5-company": "MediaSoft S.R.L.",
        "experience-item-5-role": "Software Developer",
        "experience-item-5-period": "2019-2021",
        "download-pdf": "Download PDF",
        "download-image": "View Image",
        "download-english": "Download (ENGLISH)",
        "footer": "© 2025 Jhonjaris Soto. All rights reserved.",
        "footer-contact": "Website",
        "footer-email": "imjhon.dev@gmail.com",
        "buttons-show-more": "Show More",
        "buttons-show-less": "Show Less"
    },
    es: {
        "profile-name": "Jhonjaris Soto",
        "profile-title": "Desarrollador de Software",
        "tech-title-html": "HTML5",
        "tech-title-css": "CSS3",
        "tech-title-js": "JavaScript",
        "tech-title-php": "PHP7",
        "tech-title-mysql": "MySQL",
        "tech-title-git": "Git",
        "tech-title-laravel": "Laravel",
        "tech-title-bootstrap": "Bootstrap",
        "tech-title-jquery": "jQuery",
        "tech-title-tailwind": "Tailwind CSS",
        "tech-title-excel": "Excel",
        "extras-title": "Extras",
        "extra-english": "Inglés",
        "extra-adobe": "Adobe Ps / Ai / Xd",
        "extra-public-speaking": "Oratoria",
        "extra-linux": "Linux (Ubuntu)",
        "extra-photoshop": "Adobe Photoshop",
        "extra-illustrator": "Adobe Illustrator",
        "extra-xd": "Adobe XD",
        "extra-excel": "Excel",
        "education-title": "Educación",
        "education-item-1": "Desarrollo Web Responsive",
        "education-item-2": "Ingeniería en Tecnología y Comunicaciones",
        "education-item-3": "Desarrollo de Software",
        "experience-title": "Experiencia Laboral",
        "experience-item-1-company": "Autoridad Portuaria Dominicana",
        "experience-item-1-role": "Analista de Sistemas de Información",
        "experience-item-1-period": "Actualidad",
        // "experience-item-1-detail-1": "Migración de sistemas legacy a C# (.NET)",
        "experience-item-1-detail-2": "Mediación entre equipos técnicos y usuarios finales",
        "experience-item-2-company": "Skillful Antics",
        "experience-item-2-role": "Desarrollador Web Freelance",
        "experience-item-2-period": "2022-2023",
        "experience-item-2-detail-1": "Desarrollo de 15+ landing pages en WordPress (WP Bakery, AJAX, jQuery)",
        "experience-item-2-detail-2": "Optimización de performance (CSS/JS) en 3 clientes",
        "experience-item-3-company": "Applaudo Studios",
        "experience-item-3-role": "Desarrollador Web",
        "experience-item-3-period": "2022 (3 meses)",
        "experience-item-3-detail-1": "Contribución a proyectos con Laravel, Blade, y Bootstrap",
        "experience-item-4-company": "BancaDom S.R.L.",
        "experience-item-4-role": "Soporte Técnico",
        "experience-item-4-period": "2019-2021",
        "experience-item-5-company": "MediaSoft S.R.L.",
        "experience-item-5-role": "Desarrollador de Software",
        "experience-item-5-period": "2019-2021",
        "download-pdf": "Descargar PDF",
        "download-image": "Ver Imagen",
        "download-english": "Descargar (INGLÉS)",
        "footer": "© 2025 Jhonjaris Soto. Todos los derechos reservados.",
        "footer-contact": "Página Web",
        "footer-email": "imjhon.dev@gmail.com",
        "buttons-show-more": "Ver más",
        "buttons-show-less": "Ver menos"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });

    // Update active language button
    document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active-lang"));
    document.getElementById(`switch-to-${lang}`).classList.add("active-lang");

    localStorage.setItem("language", lang);
}

// Set onclick handlers for language buttons
document.getElementById("switch-to-en").onclick = function () {
    setLanguage("en");
};
document.getElementById("switch-to-es").onclick = function () {
    setLanguage("es");
};

// Load saved language preference
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

const techContainer = document.getElementById("tech-container");
const showMoreLink = document.getElementById("show-more-tech");

if (showMoreLink) {
    showMoreLink.addEventListener("click", function (e) {
        e.preventDefault();
        techContainer.classList.toggle("expanded");
        const language = localStorage.getItem("language") || "en";
        showMoreLink.textContent = techContainer.classList.contains("expanded")
            ? translations[language]["buttons-show-less"] || "Show Less"
            : translations[language]["buttons-show-more"] || "Show More";
    });
}