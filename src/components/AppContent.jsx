import React from "react";
import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function AppContent({ programmingLanguages }) {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />

      <div className="bar"></div>
    </div>
  );
}

export default AppContent;
