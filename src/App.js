import "./css/App.css";
import "./css/General.css";
import React, { useEffect, useState } from "react";
import AppContent from "./components/AppContent";

const languagesText = {
  english: {
    sectionTexts: ["Introduction", "Know me", "Skills", "Projects", "Contacts"],
    nav: ["about", "skills", "projects", "contacts"],
    heroTitle: "Hello, my name is Kenedy",
    heroSubTitle: {
      animationWords: ["Solver", "Creator"],
      text: "problem",
    },
    knowMeTitle: "Know me",
    knowMeScript: [
      `Wassup! I am Kenedy Lima, Back End Junior Developer, great thinker and
    creative as needed.`,
      ` Currently aiming to improve and aggregate to our society by creating
    problems and giving the necessary solution to it, thus creating
    innovative and efficient alternatives to different kind of issues.`,
      `Different perspectives is the THING to me. Since better results comes
    from different experiences, share and get feedback is a good way of
    improvement.`,
      `I am a excellent seacher (googler), so i am prepared to face and
    accept any challenge.`,
      `Different perspectives is the THING to me. Since better results comes
    from different experiences, share and get feedback is a good way of
    improvement.`,
      `I am a excellent seacher (googler), so i am prepared to face and
    accept any challenge.`,
    ],
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projectsSectionPara:
      "Some projects that i coded to build and improve my skills as a programmer",
    repositoryLinkText: "Repository link",
    contactsTitle: "Contacts",
  },
  portuguese: {
    sectionTexts: [
      "Introdução",
      "Me conheça",
      "Skills",
      "Projetos",
      "Contatos",
    ],
    nav: ["Me conheça", "Skills", "Projetos", "Contatos"],
    heroTitle: "Olá, me chamo Kenedy",
    heroSubTitle: {
      animationWords: ["Solucionador", "Inventor"],
      text: "de problems",
    },
    knowMeTitle: "Me Conheça",
    knowMeScript: [
      `Wassup! I am Kenedy Lima, Back End Junior Developer, great thinker and
    creative as needed.`,
      ` Currently aiming to improve and aggregate to our society by creating
    problems and giving the necessary solution to it, thus creating
    innovative and efficient alternatives to different kind of issues.`,
      `Different perspectives is the THING to me. Since better results comes
    from different experiences, share and get feedback is a good way of
    improvement.`,
      `I am a excellent seacher (googler), so i am prepared to face and
    accept any challenge.`,
      `Different perspectives is the THING to me. Since better results comes
    from different experiences, share and get feedback is a good way of
    improvement.`,
      `I am a excellent seacher (googler), so i am prepared to face and
    accept any challenge.`,
    ],
    skillsTitle: "Skills",
    projectsTitle: "Projetos",
    projectsSectionPara:
      "Alguns projetos que eu codei para construir e aperfeiçoar minhas habilidades como programador",
    repositoryLinkText: "Link do repositório",
    contactsTitle: "Contatos",
  },
};

let langBytesOfCode = {
  total: 0,
};

function App() {
  useEffect(() => {
    listenToLanguageSwitcher();
    startHeroSubTitleAnimation();
    listenToProjectSlideButtons();
    listenToProjectsDots();
    (function () {
      let cpr = document.getElementById("copyright");
      cpr.innerHTML =
        "&copy; 2022 - " + new Date().getFullYear() + " www.kenedylima.com";
    })();
    listenToSkillTypeSwitcher();
  }, []);
  return <AppContent programmingLanguages={langBytesOfCode} />;
}
function startHeroSubTitleAnimation() {
  const spans = document.querySelectorAll(".subtitle-span");

  setInterval(() => {
    spans.forEach((span) => {
      span.classList.toggle("active-word");
    });
  }, 2000);
}
// EVENT LISTENERS

function listenToLanguageSwitcher() {
  const languagesContainer = document.querySelector(".languages-container");
  const languages = document.querySelectorAll(".language");
  languagesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("language")) {
      languages.forEach((language) => {
        language.classList.toggle("chosen-language");
      });
      if (e.target.textContent === "EN") loadLanguageContent("english");
      else loadLanguageContent("portuguese");
    }
  });

  function loadLanguageContent(language) {
    const sectionTexts = document.querySelectorAll(".section-id-title");
    const navLinks = document.querySelectorAll(".nav-link");
    const heroTitle = document.querySelector(".hero-title");
    const heroEnglishSubTitle = document.querySelector(
      ".hero-english-subtitle-text"
    );
    const heroPortugueseSubTitle = document.querySelector(
      ".hero-portuguese-subtitle-text"
    );
    const subtitleSpans = document.querySelectorAll(".subtitle-span");

    const knowMeTitle = document
      .querySelector(".text-card")
      .getElementsByTagName("h2")[0];
    const projectsTitle = document
      .querySelector(".projects-section")
      .getElementsByTagName("h2")[0];
    const projectsPara = document
      .querySelector(".projects-section")
      .getElementsByTagName("p")[0];
    const repositoryLinkText = document.querySelector(".repository-link");
    const contactsTitle = document
      .querySelector(".contacts-section")
      .getElementsByTagName("h2")[0];
    for (let i = 0; i < navLinks.length; i++)
      navLinks[i].textContent = languagesText[language].nav[i];

    for (let i = 0; i < sectionTexts.length; i++) {
      sectionTexts[i].textContent = languagesText[language].sectionTexts[i];
    }
    heroTitle.textContent = languagesText[language].heroTitle;

    if (language === "english") {
      heroPortugueseSubTitle.style.display = "none";
      heroEnglishSubTitle.style.display = "inline-block";
    } else {
      heroEnglishSubTitle.style.display = "none";
      heroPortugueseSubTitle.style.display = "inline-block";
    }
    subtitleSpans.forEach((span, index) => {
      span.textContent =
        languagesText[language].heroSubTitle.animationWords[index];
    });

    knowMeTitle.textContent = languagesText[language].knowMeTitle;

    projectsTitle.textContent = languagesText[language].projectsTitle;
    projectsPara.textContent = languagesText[language].projectsSectionPara;
    repositoryLinkText.textContent = languagesText[language].repositoryLinkText;
    contactsTitle.textContent = languagesText[language].contactsTitle;
  }
}

function listenToProjectSlideButtons() {
  const buttons = document.querySelectorAll(".slide-button");
  const projects = document.querySelectorAll(".project");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonElement = e.target.closest(".slide-button");
      const currentProjectId = Number(
        document.querySelector(".current-project").getAttribute("project-id")
      );
      let newCurrentProjectId;
      if (buttonElement.classList.contains("next-button")) {
        newCurrentProjectId =
          currentProjectId >= projects.length - 1 ? 0 : currentProjectId + 1;
      } else {
        newCurrentProjectId =
          currentProjectId === 0 ? projects.length - 1 : currentProjectId - 1;
      }
      getSlide(newCurrentProjectId);
    });
  });
}

function listenToProjectsDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const newDotId = Number(e.target.getAttribute("id"));
      getSlide(newDotId);
      updateActiveDot(newDotId);
    });
  });
}

function listenToSkillTypeSwitcher() {
  const buttons = document.querySelectorAll(".skill-switcher-button");
  const skillsList = document.querySelectorAll(".skills-list");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target;
      const button = target.closest(".skill-switcher-button");
      skillsList.forEach((list) => {
        list.classList.toggle("skills-list-hidden");
      });
      button.classList.contains("previous-skills-button")
        ? toggleCurrentSkillsTypeText("previous-skills-text-animation")
        : toggleCurrentSkillsTypeText("next-skills-text-animation");
    });
  });
}
// HELPERS

function toggleCurrentSkillsTypeText(animation) {
  const texts = document.querySelectorAll(".skills-type-text");
  const classesAnimation = [
    "previous-skills-text-animation",
    "next-skills-text-animation",
  ];
  texts.forEach((text) => {
    classesAnimation.forEach((classA) => {
      text.classList.remove(classA);
    });
    text.classList.add(animation);
    text.classList.toggle("current-skills-type");
  });
}

function getSlide(newCurrentProjectId) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.classList.remove("current-project");
    project.classList.remove("next-slide");
  });
  projects[newCurrentProjectId].classList.add("slide-animation");
  projects[newCurrentProjectId].classList.add("current-project");
  updateActiveDot(newCurrentProjectId);
}

function updateActiveDot(id) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
    if (Number(dot.getAttribute("id")) === id) dot.classList.add("active-dot");
  });
}

export default App;
