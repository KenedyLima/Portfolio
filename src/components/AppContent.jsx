import React from "react";
import typingGif from "../images/R.gif";
import myselfPhoto from "../images/me.jpg";

// import { LanguageOutline } from "react-ionicons";
function AppContent({ languages }) {
  console.log(languages);
  return (
    <div className="container">
      <header className="main-header">
        <span className="doc-section-text" id="first-doc-section-text">
          Introduction
        </span>
        <div className="language-box">
          {/* <LanguageOutline width="20px" color="#f0f9ff" /> */}
          <span>Language</span>
        </div>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li href="">
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Olá, me chamo Kenedy</h1>
          <h2 className="hero-subtitle">
            <span className="subtitle-span">Solucionador&nbsp;</span>
            <span className="active-word subtitle-span">Inventor&nbsp;</span>
            de Problemas
          </h2>
        </div>
      </header>
      <section className="about-section" id="about">
        <div className="section-separator"></div>
        <span className="doc-section-text">About</span>
        <div className="about-text-wrapper">
          <h2>About</h2>
          <p className="about-script">
            Wassup! I am Kenedy Lima, Back End Junior Developer, great thinker
            and creative as needed.
          </p>{" "}
          <p className="about-script">
            Currently aiming to improve and aggregate to our society by creating
            problems and giving the necessary solution to it, thus creating
            innovative and efficient alternatives to different kind of issues.
          </p>
          <p className="about-script">
            Different perspectives is the THING to me. Since better results
            comes from different experiences, share and get feedback is a good
            way of improvement.
          </p>
          <p className="about-script">
            I am a excellent seacher (googler), so i am prepared to face and
            accept any challenge.
          </p>
          {/* <div className="gif-desc-wrapper">
            <img src={typingGif} className="typing-gif" alt="" />
            <p className="gif-desc">Me googling as a pro</p>
          </div> */}
        </div>
        <div className="about-img-wrapper">
          {/* <img className="myself-photo" src={myselfPhoto} alt="" ></img> */}
        </div>
      </section>
      <section className="skills-section" id="skills">
        <div className="section-separator"></div>
        <span className="doc-section-text">Skills</span>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="javascript logo"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              ></img>
              <span>Javascript</span>
            </div>
            <div className="skill-bar"></div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="java logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              ></img>
              <span>Java</span>
            </div>
            <div className="skill-bar"></div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="spring logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              ></img>
              <span>Spring</span>
            </div>
            <div className="skill-bar"></div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="myself logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              ></img>
              <span>MySQL</span>
            </div>
            <div className="skill-bar"></div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="firebase logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              ></img>
              <span>Firebase</span>
            </div>
            <div className="skill-bar"></div>
          </li>

          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="typescript logo"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
              ></img>
              <span>TypeScript</span>
            </div>
            <div className="skill-bar"></div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="react logo"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              ></img>
              <span>React</span>
            </div>
            <div className="skill-bar"></div>
          </li>
        </ul>
      </section>
      <section className="projects-section" id="projects">
        <div className="section-separator"></div>
        <span className="doc-section-text">Projects</span>
        <h2>Projects</h2>
      </section>
      <section className="contacts-section" id="contacts">
        <div className="section-separator"></div>
        <span className="doc-section-text">Skills</span>
        <h2>Contacts</h2>
      </section>
      <div className="bar"></div>
    </div>
  );
}

export default AppContent;
