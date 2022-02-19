import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    e.target.reset();
  };

  return (
    <form action="" id="contact-form" onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <fieldset>
        <input placeholder="NAME" type="text" tabindex="1" required />
      </fieldset>
      <fieldset>
        <input placeholder="EMAIL" type="email" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input placeholder="PHONE NUMBER" type="tel" tabindex="3" required />
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
  );
};

export default ContactForm;
