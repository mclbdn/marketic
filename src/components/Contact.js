import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact-section">
      <p>Ready to get started?</p>
      <h1>GET IN TOUCH WITH US</h1>
      <div className="direction-phone-email-container">
        <div className="single-contact-wrapper">
          <FontAwesomeIcon icon={faMapPin} />
        </div>
        <div className="single-contact-wrapper">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="single-contact-wrapper">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      <form></form>
    </section>
  );
};

export default Contact;
