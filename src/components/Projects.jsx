import React from "react";
import mapty from "../images/MaptyProject.png";
import omnifood from "../images/OmnifoodProject.png";
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

          <div className="project-apresentation" id="project-1">
            <img src={mapty} alt="" />
          </div>
        </div>
        <div className="project" project-id="1">
          <h3>Omnifood</h3>
          <div className="project-apresentation" id="project-1">
            <img src={omnifood} alt="" />
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
          <li className="dot active-dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
      </div>
    </section>
  );
}
