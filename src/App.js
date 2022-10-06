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
  },
};

let langBytesOfCode = {
  total: 0,
};

function App() {
  useEffect(() => {
    console.log(process.env.MY_EMAIL_PASSWORD);
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

function sendEmail() {
  window.Email.send({
    Host: "smtp.gmail.com",
    Username: "test",
    Password: "test.pass",
    To: "test@gmail.com",
    From: "client@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
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
    const sectionTexts = document.querySelectorAll(".doc-section-text");
    const navLinks = document.querySelectorAll(".nav-link");
    const heroTitle = document.querySelector(".hero-title");
    const heroEnglishSubTitle = document.querySelector(
      ".hero-english-subtitle-text"
    );
    const heroPortugueseSubTitle = document.querySelector(
      ".hero-portuguese-subtitle-text"
    );
    const subtitleSpans = document.querySelectorAll(".subtitle-span");

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
      toggleSkillActiveTypeText();
    });
  });
}
// HELPERS

function toggleSkillActiveTypeText() {
  const texts = document.querySelectorAll(".skill-type-text");
  texts.forEach((text) => {
    text.classList.toggle("skill-type-active");
    text.classList.add("previous-skill-text-animation");
  });
  console.log(texts);
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
