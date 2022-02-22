import React, { useState } from "react";

const REACT_APP_GETFORM_API_URL = process.env.REACT_APP_GETFORM_API_URL;

const ContactForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [paraText, setParaText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = new FormData();

    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("phone", formData.phone);
    dataToSend.append("message", formData.message);

    // Send the form data to Getform API
    fetch(REACT_APP_GETFORM_API_URL, {
      method: "POST",
      body: dataToSend,
    })
      .then((response) => {
        if (response.ok) {
          setFormIsValid(true);
          setParaText("Thank you!");
        } else {
          setFormIsValid(true);
          console.log(response)
          setParaText(`There has been an ${response.status} error.`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      method="POST"
      name="contact"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <h3>Contact Us</h3>
      {formIsValid ? (
        <p className="thank-you-para">{paraText}</p>
      ) : (
        <div>
          <fieldset>
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              placeholder="NAME"
              name="name"
              type="text"
              tabindex="1"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              placeholder="EMAIL"
              name="email"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              value={formData.phone}
              placeholder="PHONE NUMBER"
              name="phone"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
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
