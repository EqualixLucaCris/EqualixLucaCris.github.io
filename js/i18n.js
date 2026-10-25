// Traduzioni: ogni lingua usa le stesse chiavi.
const translations = {
  en: {
    hero_eyebrow: "Strong roots in Industrial Automation · Evolving towards Cloud & DevOps Engineering",
    hero_title_first: "Automation with purpose.",
    hero_title_second: "Better workflows by design.",
    hero_description: "I'm Luca V.B. Cristallini. I explore how cloud platforms, data and DevOps automation turn ideas into useful solutions.",
    hero_projects: "Explore my projects",
    hero_github: "View GitHub",
    hero_note: "Continuous learning. Formal study. Practical experience.",
    nav_about: "About",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact"
  },

  nl: {
    hero_eyebrow: "Een stevige basis in industriële automatisering · Op weg naar cloud- en DevOps-engineering",
    hero_title_first: "Automatisering met een doel.",
    hero_title_second: "Betere workflows, doordacht ontworpen.",
    hero_description: "Ik ben Luca V.B. Cristallini. Ik onderzoek hoe cloudplatformen, data en DevOps-automatisering ideeën omzetten in bruikbare oplossingen.",
    hero_projects: "Ontdek mijn projecten",
    hero_github: "Bekijk mijn GitHub",
    hero_note: "Continu leren. Formele opleiding. Praktijkervaring.",
    nav_about: "Over mij",
    nav_education: "Opleiding",
    nav_skills: "Vaardigheden",
    nav_projects: "Projecten",
    nav_certifications: "Certificeringen",
    nav_contact: "Contact"
  },

  fr: {
    hero_eyebrow: "Une solide expérience en automatisation industrielle · Une évolution vers le cloud et l’ingénierie DevOps",
    hero_title_first: "Une automatisation qui a du sens.",
    hero_title_second: "Des workflows mieux conçus.",
    hero_description: "Je suis Luca V.B. Cristallini. J’explore comment les plateformes cloud, les données et l’automatisation DevOps transforment les idées en solutions utiles.",
    hero_projects: "Découvrir mes projets",
    hero_github: "Voir mon GitHub",
    hero_note: "Apprentissage continu. Formation académique. Expérience pratique.",
    nav_about: "À propos",
    nav_education: "Formation",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_certifications: "Certifications",
    nav_contact: "Contact"
  }
};

const languageSelector = document.getElementById("language-selector");

function changeLanguage(language) {
  // Aggiorna la lingua dichiarata nella pagina.
  document.documentElement.lang = language;

  // Cerca tutti gli elementi contrassegnati per la traduzione.
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translation = translations[language]?.[key];

    // Sostituisce il testo solo se la traduzione esiste.
    if (translation !== undefined) {
      element.textContent = translation;
    }
  });
}

// Reagisce alla scelta nel selettore.
languageSelector.addEventListener("change", () => {
  changeLanguage(languageSelector.value);
});

// Applica la lingua selezionata al caricamento.
changeLanguage(languageSelector.value);

