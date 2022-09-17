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
  // useEffect(() => {
  //   async function getAllRepositories() {
  //     return await fetch(" https://api.github.com/user/repos", {
  //       headers: {
  //         Authorization: "token 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",
  //         Accept: "application/vnd.github+json",
  //       },
  //     })
  //       .then((result) => result.json())
  //       .then((data) => data);
  //   }

  //   async function loadBytesOfCodeOfRepositories() {
  //     const repositories = await getAllRepositories();
  //     const data = [];
  //     for (let i = 0; i < repositories.length; i++) {
  //       const result = await getRepositoryLanguages(repositories[i].name);
  //       data[i] = await result.json();
  //     }
  //     calculateBytesOfCodeByLanguage(data);
  //   }

  //   function calculateBytesOfCodeByLanguage(ln) {
  //     ln.forEach((langObj) => {
  //       const langArr = Object.entries(langObj);
  //       langArr.forEach((lang) => {
  //         if (Object.keys(lang).length !== 0) {
  //           if (!langBytesOfCode.hasOwnProperty(lang[0])) {
  //             langBytesOfCode[lang[0]] = 0;
  //           }

  //           langBytesOfCode[lang[0]] += lang[1];
  //           langBytesOfCode.total += lang[1];
  //         }
  //       });
  //     });
  //   }

  //   async function getRepositoryLanguages(name) {
  //     return fetch(
  //       "https://api.github.com/repos/kenedyLima/" + name + "/languages",
  //       {}
  //     );
  //   }

  //   loadBytesOfCodeOfRepositories();
  // }, []);
  useEffect(() => {
    listenToLanguageSwitcher();
    startHeroSubTitleAnimation();
    listenToProjectSlideButtons();
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
  let nextProjectId = 0;
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const currentProjectId = Number(
        document.querySelector(".current-project").getAttribute("project-id")
      );

      const buttonEle = e.target.closest(".slide-button");
      if (buttonEle.classList.contains("next-button"))
        nextProjectId = currentProjectId + 1;
      else {
        nextProjectId = currentProjectId - 1;
      }
      projects.forEach((project) => {
        project.classList.remove(".current-project");
        if (project.getAttribute("project-id") === nextProjectId)
          project.classList.add(".current-project");
      });
      console.log(nextProjectId);
    });
  });
}
export default App;
