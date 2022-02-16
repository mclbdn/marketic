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
      <div className="contact-inputs-container">
        <form action="" id="contact-form">
          <h3>Contact Us</h3>
          <fieldset>
            <input
              placeholder="NAME"
              type="text"
              tabindex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="EMAIL"
              type="email"
              tabindex="2"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="PHONE NUMBER"
              type="tel"
              tabindex="3"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Contact;
