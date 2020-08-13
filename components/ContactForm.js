import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import emailjs from "emailjs-com";

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

    console.log(name);

    const serviceId = "default_service";
    const templateId = "contactme";
    const userId = process.env.EMAILJS_USER_ID;
    //alert("Your email was sucessfuly sent.\n Thank you for contacting me, I will get back to you as soon as possible.");

    emailjs.send(serviceId, templateId, templateParams, userId)
    .then((result) => {
        console.log(result.text);
        alert("Your email was sucessfuly sent.\n Thank you for contacting me. I will get back to you as soon as possible.")
    }, (error) => {
        console.log(error.text);
        alert("Email failed :(")
    })

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
          <input type="text" name="name" id="name" value={name} onChange={(event) => {
              setName(event.target.value)
              makeInputsValid()
          } } />
        </div>
        <div className="field half">
          <label style={{ color: `${validEmail ? "" : "red"}` }} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              makeInputsValid()
              console.log(event);
            }}
          />
        </div>
        <div className="field">
          <label style={{ color: `${validMessage ? "" : "red"}` }} htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={message}
            onChange={(event) => {
                setMessage(event.target.value)
                makeInputsValid()
            }
            }
          ></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" onClick={handleReset} />
          </li>
        </ul>
      </form>
      <SocialLinks />
    </>
  );
}
