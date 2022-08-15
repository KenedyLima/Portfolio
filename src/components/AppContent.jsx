import React from "react";
import { LanguageOutline } from 'react-ionicons'
function AppContent() {
    return (
        <div className="container">
        <header className="main-header">
          <nav className="nav-bar"> <span className="doc-section-text">Introduction</span><ul className="nav-list"><li><a href="#about">About</a></li><li>Tech</li><li>Projects</li><li>Contacts</li></ul><div className="language-box"><LanguageOutline width="20px" color="#f0f9ff"/><span>Language</span></div></nav>
          <div className="hero-content">
            <h1 className="hero-title">Hello, my name is Kenedy</h1>
          </div>
        </header>
        <section className="about-section" id="about">
          <div className="section-separator"></div>
          <span className="doc-section-text">About</span>
         <div className="about-wrapper">

          <h2>About</h2>

        <p className="about-script">Hi! My name is Jeferson Kenedy and i am a Back End Junior Developer looking to have fun aggregating and improve our society technology, thus creating inovative and efficient alternatives to different kind of problems.</p>
        <p className="about-script">I am a excellent seacher (googler), so i am prepared to face and accept any challenge.</p>
      
        <p></p>
         </div>
         <img  alt="wrong path" />
        </section>
        <div className="bar"></div>
        </div>
      );
}

export default AppContent;