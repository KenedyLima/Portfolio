import React from "react";
import typingGif from "../images/R.gif";
import myselfPhoto from "../images/me.jpg";

import { LanguageOutline } from "react-ionicons";
function AppContent() {
  return (
    <div className="container">
      <header className="main-header">
        <span className="doc-section-text">Introduction</span>
        <div className="language-box">
          <LanguageOutline width="20px" color="#f0f9ff" />
          <span>Language</span>
        </div>
        <nav className="nav-bar">
          {" "}
          <ul className="nav-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tech">Tech</a>
            </li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">
            &lt;h1&gt;Hello, my name is Kenedy&lt;/h1&gt;
          </h1>
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
          <div className="gif-desc-wrapper">
            <img src={typingGif} className="typing-gif" alt="" />
            <p className="gif-desc">Me googling as a pro</p>
          </div>
        </div>
        <div className="about-img-wrapper">
          {/* <img className="myself-photo" src={myselfPhoto} alt="" ></img> */}
        </div>
      </section>
      <section className="tech-section" id="tech">
        <div className="section-separator"></div>
        <h2>Technologies</h2>
        <p>List of languages and frameworks most used by me right now</p>
        <ul>
          <li>
            <img
              align="center"
              alt="javascript logo"
              height="30"
              width="40"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            ></img>
          </li>
          <li>
            <img
              align="center"
              alt="java logo"
              height="30"
              width="40"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            ></img>
          </li>
          <li>
            <img
              align="center"
              alt="spring logo"
              height="30"
              width="40"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            ></img>
          </li>
          <li>
            <img
              align="center"
              alt="myself logo"
              height="30"
              width="40"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            ></img>
          </li>
          <li>
            {" "}
            <img
              align="center"
              alt="firebase logo"
              height="30"
              width="40"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            ></img>
          </li>
          <li>
            <img
              align="center"
              alt="typescript logo"
              height="30"
              width="40"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
            ></img>
          </li>
          <li>
            <img
              align="center"
              alt="react logo"
              height="30"
              width="40"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            ></img>
          </li>
        </ul>
      </section>
      <div className="bar"></div>
    </div>
  );
}

export default AppContent;
