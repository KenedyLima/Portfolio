import React from "react";
import mapty from "../images/MaptyProject.png";
export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-separator"></div>
      <span className="doc-section-text">Projects</span>
      <h2>Projects</h2>
      <div className="projects-container">
        <button className="previous-button button"></button>
        <div className="project">
          <h3>Mapty</h3>
          <div className="project-apresentation" id="project-1">
            <img src={mapty} alt="" />
          </div>
        </div>
        <button className="next-button button"></button>
      </div>
    </section>
  );
}
