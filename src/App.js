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
      `Wassup! My names is Kenedy Lima, 17 years old. Currently in High
      School`,
      ` Right now i'm aiming to get my first job as a developer to init my
      professional career. As well as aggregate to our society by
      understanding it's current problems and developing solid, innovative
      and efficient solutions to it
    `,
      `  I'm an individual who likes to think about all aspects of life, and
      discuss about it. Hoping to come up with a better solution or at least
      some answer to that bug
    `,
      `  As a person born in Generation Z, googling probably is the top level
      skill that i have. Leveling up each day as my skills and knowledge
      improve in the IT area
    `,
      `  For that reason, challenges are to me, if conquered, sets of new
      weapons and armors to my character. And for reaching and defeating the
      boss, i'm willing to accept any.
    `,
    ],
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projectsSectionPara:
      "Some projects that i coded to build and improve my skills as a programmer",
    repositoryLinkText: "Repository link",
    contactsTitle: "Contacts",

    contactsPara: "Reach me on my social media",
    contactsOr: "Or",
    contactsForm: {
      header: "Send me an email",
      labels: ["Subject", "Message"],
      inputs: ["The reason for your contact...", "Your message..."],
    },

    emailButton: "Send",
    softSkills: ["Fast Learner", "Challenge addicted", "Group Work"],
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
      `Me chamo Kenedy Lima, tenho 17 anos e atualmente cursando o ensino médio`,
      `No momento estou com o objetivo de conseguir meu primeiro emprego como um desenvolvedor para iniciar minha carreira profissional. E também agregar em nossa sociedade, entendendo seus problemas e desenvolvendo soluções sólidas, eficientes e inovativas para os mesmos`,
      `Sou um indivíduo que gosta de refletir sobre todos os aspectos da vida, e discutir sobre isso. Com o intuito de conseguir a melhor solução possível, ou pelo menos alguma resposta para o motivo da existência desse bug`,
      `Sendo uma pessoa nascida na Geração Z, googlar provavelmente é umas das melhores habilidades que eu tenho. Que melhora a cada dia juntamente com minhas habilidades e conhecimentos na área de TI`,
      `Por esse motivo, desafios, se conquistados, são para mim como novas armas e conjuntos para o meu personagem. E para alcançar e derrotar o chefão, aceitarei quaisquer`,
    ],
    skillsTitle: "Skills",
    projectsTitle: "Projetos",
    projectsSectionPara:
      "Alguns projetos que eu codei para construir e aperfeiçoar minhas habilidades como programador",
    repositoryLinkText: "Link do repositório",
    contactsTitle: "Contatos",
    contactsPara: "Contate-me em minhas redes sociais",
    contactsOr: "Ou",
    contactsForm: {
      header: "Envie-me um email",
      labels: ["Assunto", "Mensagem"],
      inputs: ["A razão para o seu contato...", "Sua mensagem..."],
    },
    emailButton: "Enviar",
    softSkills: [
      "Aprendizagem Rápida",
      "Fascinado por desafios",
      "Trabalho em grupo",
    ],
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
    listenToMobileMenu();
    listenToSendEmailButton();
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
        language.classList.remove("chosen-language");
      });
      e.target.classList.add("chosen-language");
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

    const knowMeScript = document.querySelectorAll(".about-script");

    const projectsTitle = document
      .querySelector(".projects-section")
      .getElementsByTagName("h2")[0];
    const projectsPara = document
      .querySelector(".projects-section")
      .getElementsByTagName("p")[0];
    const repositoryLinkText = document.querySelectorAll(".repository-link");
    const contactsTitle = document
      .querySelector(".contacts-section")
      .getElementsByTagName("h2")[0];

    const contactsPara = document.querySelector(".social-media-p");
    const or = document.querySelector(".or-h3");
    const formHeader = document.querySelector(".form-header");
    const labels = document.getElementsByTagName("label");
    const inputs = document.getElementsByTagName("input");
    const sendEmailButton = document.querySelector(".send-email-button");
    const softSkills = document
      .querySelector(".soft-skills")
      .getElementsByTagName("span");

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
    repositoryLinkText.forEach((link) => {
      link.textContent = languagesText[language].repositoryLinkText;
    });

    contactsTitle.textContent = languagesText[language].contactsTitle;
    knowMeScript.forEach((script, index) => {
      script.textContent = languagesText[language].knowMeScript[index];
    });
    contactsPara.textContent = languagesText[language].contactsPara;
    or.textContent = languagesText[language].contactsOr;
    formHeader.textContent = languagesText[language].contactsForm.header;
    for (let i = 0; i < labels.length; i++) {
      labels[i].textContent = languagesText[language].contactsForm.labels[i];
      inputs[i].placeholder = languagesText[language].contactsForm.inputs[i];
    }
    for (let i = 0; i < softSkills.length; i++) {
      softSkills[i].textContent = languagesText[language].softSkills[i];
    }
    console.log(softSkills);
    sendEmailButton.textContent = languagesText[language].emailButton;
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

function listenToMobileMenu() {
  const menuButton = document.querySelector(".menu-button");
  const navList = document.querySelector(".nav-list");
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("opened");
    rotateMenuIcon();
  });
}

function listenToSendEmailButton() {
  const sendEMailButton = document.querySelector(".send-email-button");
  const event = new Event("click");
  sendEMailButton.addEventListener("click", (e) => {
    const subject = document.querySelector(".subject-field").value;
    const message = document.querySelector(".message-field").value;
    /*    if (subject !== "" && message !== "") {
      sendEMailButton.setAttribute(
        "href",
        `mailto:kenedytorreslima@gmail.com?subject=${subject}&body=${message}`
      );
      sendEMailButton.dispatchEvent(event);
      clearInputFields();
    } else {
      showRequiredText([subject, message]);
      console.log(message);
    }*/
    sendEMailButton.setAttribute(
      "href",
      `mailto:kenedytorreslima@gmail.com?subject=${subject}&body=${message}`
    );
    clearInputFields();
  });
  sendEMailButton.dispatchEvent(event);
}
// HELPERS

function rotateMenuIcon() {
  const iconWrapper = document.querySelector(".icon-wrapper");
  iconWrapper.classList.toggle("menu-icon-rotated");
}

function clearInputFields() {
  const emailForm = document.querySelector(".email-form");
  emailForm.reset();
}

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

function showRequiredText(fields) {
  const requiredTextEle = document.querySelectorAll(".required-p");
  console.log(requiredTextEle);
  requiredTextEle.forEach((ele, index) => {
    if (fields[index] === "") ele.style.display = "inline-block";
    if (fields[index] !== "") ele.style.display = "none";
  });
}
export default App;
