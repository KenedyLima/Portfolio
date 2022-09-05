import React from "react";

export default function Hero() {
  return (
    <header className="main-header">
      <span className="doc-section-text" id="first-doc-section-text">
        Introduction
      </span>
      <div className="nav-header">
        <img
          className="coffee-icon"
          src={require("../images/coffee-break.png")}
          alt=""
        />
        <nav>
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="languages-container">
          <span className="language">EN</span>
          <span className="language chosen-language">PT</span>
        </div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Olá, me chamo Kenedy</h1>
        <h2 className="hero-subtitle">
          <p className="hero-english-subtitle-text">problem&nbsp;</p>
          <span className="subtitle-span">Solucionador</span>
          <span className="active-word subtitle-span">Inventor</span>
          <p className="hero-portuguese-subtitle-text">&nbsp;de problemas</p>
        </h2>
      </div>
    </header>
  );
}
