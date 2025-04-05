const curriculumContent = {
    en: {
        profile: {
            name: "Jhonjaris Soto",
            title: "Software Developer",
        },
        techSkills: [
            { title: "HTML5", icon: "assets/img/html.png" },
            { title: "CSS3", icon: "assets/img/css.png" },
            { title: "JavaScript", icon: "assets/img/js.png" },
            { title: "PHP7", icon: "assets/img/php.png" },
            { title: "MySQL", icon: "assets/img/mysql.png" },
            { title: "Git", icon: "assets/img/Git.svg" },
            { title: "Laravel", icon: "assets/img/Laravel.svg" },
            { title: "Bootstrap", icon: "assets/img/bootstrap.png" },
            { title: "jQuery", icon: "assets/img/jquery.png" },
            { title: "Tailwind CSS", icon: "assets/img/Tailwind.svg" },
            { title: "Excel", icon: "assets/img/excel-logo-0.png" },
        ],
        extras: [
            { title: "English", icon: "assets/img/acdl.png" },
            { title: "Adobe Ps / Ai / Xd", icon: "assets/img/centu.png" },
            { title: "Public Speaking", icon: "assets/img/vozzit.png" },
            { title: "Linux (Ubuntu)", icon: "assets/img/ubuntu.png" },
            { title: "Adobe Photoshop", icon: "assets/img/adobe-photoshop.png" },
            { title: "Adobe Illustrator", icon: "assets/img/adobe-illustrator.png" },
            { title: "Adobe XD", icon: "assets/img/adobe-xd.png" },
            { title: "Excel", icon: "assets/img/excel-logo-0.png" },
        ],
        education: [
            { title: "Responsive Web Development", icon: "assets/img/FreeCodeCamp_logo.svg.png" },
            { title: "Engineering in Technology and Communications", icon: "assets/img/unibe-logo.png" },
            { title: "Software Development", icon: "assets/img/itla-logo.webp" },
        ],
        experience: [
            { company: "Skillfull Antics", role: "Web Developer", period: "2022-Present" },
            { company: "BancaDom S.R.L.", role: "Technical Support", period: "2019-2021" },
            { company: "MediaSoft S.R.L.", role: "Technical Support", period: "2019-2021" },
            { company: "Edificio de Oficinas Gubernamentales Juan Pablo Duarte", role: "General Services Supervisor", period: "2021-2022" },
        ],
        download: {
            pdf: "assets/files/Curriculum Jhonjaris Soto - F.pdf",
            image: "assets/img/Curriculum Jhonjaris Soto - F.pdf.png",
            english: "assets/img/Copy of Curriculum Jhonjaris Soto - F.pdf.png",
        },
    },
    es: {
        profile: {
            name: "Jhonjaris Soto",
            title: "Desarrollador de Software",
        },
        techSkills: [
            // ...translated content...
        ],
        extras: [
            // ...translated content...
        ],
        education: [
            // ...translated content...
        ],
        experience: [
            // ...translated content...
        ],
        download: {
            pdf: "assets/files/Curriculum Jhonjaris Soto - F.pdf",
            image: "assets/img/Curriculum Jhonjaris Soto - F.pdf.png",
            english: "assets/img/Copy of Curriculum Jhonjaris Soto - F.pdf.png",
        },
    },
};

function loadCurriculumContent(language) {
    const content = curriculumContent[language];

    // Update profile section
    document.querySelector(".profile_image_container h3").textContent = content.profile.name;
    document.querySelector(".profile_image_container h5").textContent = content.profile.title;

    // Update tech skills
    const techContainer = document.getElementById("tech-container");
    techContainer.innerHTML = "";
    content.techSkills.forEach(skill => {
        techContainer.innerHTML += `
            <div class="tech">
                <div class="tech_icon">
                    <img src="${skill.icon}" alt="${skill.title}">
                </div>
                <div class="tech_desc">
                    <h3 class="tech_title">${skill.title}</h3>
                </div>
            </div>
        `;
    });

    // Update extras
    const extrasContainer = document.querySelector(".extras_container");
    extrasContainer.innerHTML = "";
    content.extras.forEach(extra => {
        extrasContainer.innerHTML += `
            <div class="extra">
                <span class="icon">
                    <img src="${extra.icon}" alt="${extra.title}">
                </span>
                <h3>${extra.title}</h3>
            </div>
        `;
    });

    // Update education
    const educationContainer = document.querySelector(".extras:nth-of-type(2) .extras_container");
    educationContainer.innerHTML = "";
    content.education.forEach(edu => {
        educationContainer.innerHTML += `
            <div class="extra">
                <span class="icon">
                    <img src="${edu.icon}" alt="${edu.title}">
                </span>
                <h3>${edu.title}</h3>
            </div>
        `;
    });

    // Update experience
    const timeline = document.querySelector(".timeline");
    timeline.innerHTML = "";
    content.experience.forEach(exp => {
        timeline.innerHTML += `
            <div class="timeline_item">
                <h3>${exp.company}</h3>
                <p>${exp.role}</p>
                <p>${exp.period}</p>
            </div>
        `;
    });

    // Update download links
    document.querySelector(".download_cv a:nth-of-type(1)").href = content.download.pdf;
    document.querySelector(".download_cv a:nth-of-type(2)").href = content.download.image;
    document.querySelector(".download_cv a:nth-of-type(3)").href = content.download.english;
}

const techContainer = document.getElementById('tech-container');
const showMoreLink = document.getElementById('show-more-tech');

showMoreLink.addEventListener('click', function (e) {
    e.preventDefault();
    techContainer.classList.toggle('expanded');
    showMoreLink.textContent = techContainer.classList.contains('expanded') ? 'Ver menos' : 'Ver más';
});