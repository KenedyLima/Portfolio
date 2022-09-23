import React from "react";

export default function Contacts() {
  return (
    <section className="contacts-section" id="contacts">
      <div className="section-separator"></div>
      <span className="doc-section-text">Contacts</span>
      <h2>Contacts</h2>
      <div className="send-email-card">
        <div className="email-form">
          <h1>Send me an Email</h1>
          <form action=""></form>
        </div>
      </div>
      <ul className="social-media-container">
        <li className="social-media">
          <a href="https://github.com/KenedyLima" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
            <span className="social-name">Github</span>
          </a>
        </li>
        <li className="social-media">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kenedy-lima-11040520/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
            <span className="social-name">Linkedin</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
