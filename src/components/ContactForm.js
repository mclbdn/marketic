import React, { useState } from "react";

const ContactForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const handleSubmit = (e) => {
    if (e.target.checkValidity()) {
      setFormIsValid(true);
    }
    e.preventDefault();
  };

  return (
    <form
      method="post"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <h3>Contact Us</h3>
      {formIsValid ? (
        <p className="thank-you-para">Thank you!</p>
      ) : (
        <div>
          <fieldset>
            <input
              placeholder="NAME"
              name="name"
              type="text"
              tabindex="1"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="EMAIL"
              name="email"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="PHONE NUMBER"
              name="phone"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabindex="5"
              required
              name="message"
            ></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit">
              Submit
            </button>
          </fieldset>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
