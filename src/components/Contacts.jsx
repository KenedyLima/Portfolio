import React from "react";

export default function Contacts() {
  return (
    <section className="contacts-section" id="contacts">
      <div className="section-separator"></div>
      <span className="section-id-title">Contacts</span>
      <h2>Contacts</h2>
      <div className="send-email-card">
        <div className="email-form">
          <h3>Send me an Email</h3>
          <form action="">
            <div className="label-input">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Reason for the contact..."
              />
            </div>
            <div className="label-input">
              <label htmlFor="Message">Message</label>
              <input
                id="Message"
                type="message"
                placeholder="Your message..."
              />
            </div>
            <input type="submit" value="Send" className="send-email-button" />
          </form>
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
