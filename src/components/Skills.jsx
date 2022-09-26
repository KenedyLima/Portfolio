import React from "react";

export default function Skills(params) {
  return (
    <section className="skills-section" id="skills">
      <div className="section-separator"></div>
      <span className="doc-section-text">Skills</span>
      <h2>Skills</h2>
      <div className="skill-type-switcher">
        <ion-icon name="chevron-back-outline"></ion-icon>
        <span>hard</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <div className="skills-container">
        <ul className="soft"></ul>
        <ul className="hard">
          <li className="skill javascript">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="javascript logo"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              ></img>
              <span>Javascript</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
          <li className="skill java">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="java logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              ></img>
              <span>Java</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
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
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
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
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
          <li className="skill" id="firebase">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="firebase logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              ></img>
              <span>Firebase</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
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
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="skill-type-switcher">
        <ion-icon name="chevron-back-outline"></ion-icon>
        <span>hard</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <div className="skills-container">
        <ul className="soft"></ul>
        <ul className="hard">
          <li className="skill javascript">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="javascript logo"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              ></img>
              <span>Javascript</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
          <li className="skill java">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="java logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              ></img>
              <span>Java</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
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
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
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
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
          <li className="skill" id="firebase">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="firebase logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              ></img>
              <span>Firebase</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
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
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
