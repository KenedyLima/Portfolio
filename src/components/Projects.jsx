import React from "react";
import mapty from "../images/MaptyProject.png";
import omnifood from "../images/OmnifoodProject.png";
import forkify from "../images/ForkifyProject.png";
import portfolio from "../images/Portfolio.png";
export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-separator"></div>
      <span className="section-id-title">Projects</span>
      <h2>Projects</h2>
      <p>Some projects that i coded to build and improve my skills</p>
      <div className="projects-container">
        <button className="previous-button slide-button">
          <ion-icon
            className="slide-button-icon"
            name="caret-back-outline"
          ></ion-icon>
        </button>
        <div className="project" project-id="0">
          <h3>Mapty</h3>

          <a
            className="repository-link"
            href="https://github.com/KenedyLima/Mapty"
            target="_blank"
          >
            Repository Link
          </a>
          <div className="project-apresentation">
            <img src={mapty} alt="" />
          </div>
        </div>
        <div className="project current-project" project-id="1">
          <h3>Omnifood</h3>

          <a
            className="repository-link"
            href="https://github.com/KenedyLima/Omnifood-LP"
            target="_blank"
          >
            Repository Link
          </a>
          <div className="project-apresentation">
            <img src={omnifood} alt="" />
          </div>
        </div>
        <div className="project" project-id="2">
          <h3>Forkify</h3>

          <a
            className="repository-link"
            href="https://github.com/KenedyLima/Forkify"
            target="_blank"
          >
            Repository Link
          </a>
          <div className="project-apresentation">
            <img src={forkify} alt="" />
          </div>
        </div>
        <div className="project" project-id="3">
          <h3>This</h3>

          <a
            className="repository-link"
            href="https://github.com/KenedyLima/Portfolio"
            target="_blank"
          >
            Repository Link
          </a>
          <div className="project-apresentation">
            <img src={portfolio} alt="" />
          </div>
        </div>

        <button className="next-button slide-button">
          <ion-icon
            name="caret-forward-outline"
            className="slide-button-icon"
          ></ion-icon>
        </button>
        <ul className="dots-container">
          <li className="dot" id="0"></li>
          <li className="dot active-dot" id="1"></li>
          <li className="dot" id="2"></li>
          <li className="dot" id="3"></li>
        </ul>
      </div>
    </section>
  );
}
