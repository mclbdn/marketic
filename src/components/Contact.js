import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact-section" id="section-3">
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
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
