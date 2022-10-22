import React from "react";
import gmailLogo from "../images/gmail-logo.png";
export default function Contacts() {
  return (
    <section className="contacts-section" id="contacts">
      <div className="section-separator"></div>
      <span className="section-id-title">Contacts</span>
      <h2>Contacts</h2>
      <p className="social-media-p">Reach me on my social media</p>
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
      <div className="h3-wrapper">
        <h3 className="or-h3">OR</h3>
      </div>

      <div className="send-email-card">
        <div className="email-form-wrapper">
          <h3 className="form-header">Send me an Email</h3>
          <form className="email-form">
            <div className="label-input">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Reason for the contact..."
                className="subject-field"
                required
              />
              <p className="required-p">
                <span>*</span> Required
              </p>
            </div>
            <div className="label-input">
              <label htmlFor="Message">Message</label>
              <input
                id="Message"
                type="message"
                placeholder="Your message..."
                className="message-field"
                required
              />

              <p className="required-p">
                <span>*</span> Required
              </p>
            </div>

            <a href="" className="send-email-button">
              Send
            </a>
          </form>
        </div>
        <div className="mail-img-card"></div>
      </div>
    </section>
  );
}
