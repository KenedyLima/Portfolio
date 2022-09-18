import React from "react";
import mapty from "../images/MaptyProject.png";
import omnifood from "../images/OmnifoodProject.png";
import forkify from "../images/ForkifyProject.png";
export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-separator"></div>
      <span className="doc-section-text">Projects</span>
      <h2>Projects</h2>
      <div className="projects-container">
        <button className="previous-button slide-button">
          <ion-icon
            className="slide-button-icon"
            name="caret-back-outline"
          ></ion-icon>
        </button>
        <div className="project current-project" project-id="1">
          <h3>Mapty</h3>
          <p className="project-description"></p>

          <div className="project-apresentation">
            <img src={mapty} alt="" />
          </div>
        </div>
        <div className="project" project-id="2">
          <h3>Omnifood</h3>
          <div className="project-apresentation">
            <img src={omnifood} alt="" />
          </div>
          <p className="project-description"></p>
        </div>
        <div className="project" project-id="3">
          <h3>Forkify</h3>
          <div className="project-apresentation">
            <img src={forkify} alt="" />
          </div>
          <p className="project-description"></p>
        </div>

        <button className="next-button slide-button">
          <ion-icon
            name="caret-forward-outline"
            className="slide-button-icon"
          ></ion-icon>
        </button>
        <ul className="dots-container">
          <li className="dot active-dot" id="1"></li>
          <li className="dot" id="2"></li>
          <li className="dot" id="3"></li>
        </ul>
      </div>
    </section>
  );
}
