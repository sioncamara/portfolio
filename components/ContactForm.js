import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      setValidName(false);
      if (email === "") setValidEmail(false);
      if (message === "") setValidMessage(false);
      return;
    }

    if (email === "") {
      setValidEmail(false);
      if (name === "") setValidName(false);
      if (message === "") setValidMessage(false);
      return;
    }
    if (message === "") {
      setValidMessage(false);
      if (email === "") setValidEmail(false);
      if (name === "") setValidName(false);
      return;
    }

    if (!validName || !validEmail || !validMessage) {
      return;
    }

    const templateParams = {
      email: email,
      name: name,
      message: message,
    };

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PROFILE_ID;

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        alert(
          "Your email was sucessfuly sent.\n Thank you for contacting me. I will get back to you as soon as possible.",
        );
      },
      (error) => {
        console.log(error.text);
        alert("Email failed :(");
      },
    );

    // holding off email functionality for now

    makeInputsValid();
    handleReset();
  };

  const makeInputsValid = () => {
    setValidName(true);
    setValidEmail(true);
    setValidMessage(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h2 className="major">Contact</h2>
      <form method="post" action="#" onSubmit={handleSubmit}>
        <div className="field half first">
          <label style={{ color: `${validName ? "" : "red"}` }} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              makeInputsValid();
            }}
          />
        </div>
        <div className="field half">
          <label
            style={{ color: `${validEmail ? "" : "red"}` }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              makeInputsValid();
            }}
          />
        </div>
        <div className="field">
          <label
            style={{ color: `${validMessage ? "" : "red"}` }}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              makeInputsValid();
            }}
          ></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="reset" value="clear" onClick={handleReset} />
          </li>
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
        </ul>
      </form>
      <SocialLinks />
    </>
  );
}
