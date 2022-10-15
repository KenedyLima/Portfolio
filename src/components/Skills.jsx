import React from "react";
import challengeicon from "../icons/challenges.png";
import fastLearnerIcon from "../icons/learning.png";
import groupWorkIcon from "../icons/united.png";

export default function Skills(params) {
  return (
    <section className="skills-section" id="skills">
      <div className="section-separator"></div>
      <span className="section-id-title">Skills</span>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-type-switcher">
          <button className="skill-switcher-button previous-skills-button">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <h4 className="current-skills-type skills-type-text">HARD</h4>
          <h4 className="skills-type-text">SOFT</h4>

          <button className="skill-switcher-button next-skills-button">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        <ul className="hard-skills skills-list">
          <li id="javascript" className="skill">
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
          <li className="skill" id="java">
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
          <li id="spring" className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="spring"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              ></img>
              <span>Spring</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
          <li id="mysql" className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="mysq"
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

          <li id="react" className="skill">
            <div className="skill-desc-wrapper">
              <img
                className="skill-logo"
                alt="react"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              ></img>
              <span>React</span>
            </div>
            <div className="skill-bar">
              <div className="completed"></div>
            </div>
          </li>
        </ul>

        <ul className="soft-skills skills-list skills-list-hidden">
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img src={fastLearnerIcon} />
              <span>Fast learner</span>
            </div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img src={challengeicon} />
              <span>Challenge addicted</span>
            </div>
          </li>
          <li className="skill">
            <div className="skill-desc-wrapper">
              <img src={groupWorkIcon} />
              <span>Group Work</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
