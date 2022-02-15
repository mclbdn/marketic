import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>GET IN TOUCH!</h1>
      <p>Contact us for a quote, help or to join the team.</p>
      <div className="direction-phone-email-container">
        <div className="single-contact-wrapper">
          <FontAwesomeIcon className="icon" icon={faMapPin} />
          <address>
            Av. Galileo Galilei 3843, Arboledas, 45070 Zapopan, Jal.
          </address>
        </div>
        <div className="single-contact-wrapper">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <address>
            <a href="tel:+523336202040">(+52) 33 3620 2040</a>
          </address>
        </div>
        <div className="single-contact-wrapper">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <address>
            <a href="mailto:nope@email.com">nope@email.com</a>
          </address>
        </div>
      </div>
      <form>
        <h1>Contact Form</h1>
        <div className="input-container">
          <label htmlFor="name">Your Name</label>
          <input type="text" required name="name" id="name" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" required name="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone</label>
          <input type="text" required name="phone" id="phone" />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
