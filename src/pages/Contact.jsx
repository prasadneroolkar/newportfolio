import React, { useState, useEffect } from "react";
import PageComp from "../components/common/PageComp";
import { FiSend } from "react-icons/fi";

const Contact = ({ pageTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdd = (e) => {
    setAddress(e.target.value);
  };

  const validateForm = () => {
    // let isValid = true;
    let errors = {};
    const namePattern = /^[a-zA-Z\s]{2,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "") {
      errors.name = "Username is required!";
    } else if (!namePattern.test(name)) {
      errors.name = "Name must be at least 2 characters";
    }
    if (email === "") {
      errors.email = "Email is required!";
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email";
    }
    if (address === "") {
      errors.address = "Address is required!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm());
    if (Object.keys(validateForm()).length === 0) {
      console.log("Form is valid, submitting...");
      setName("");
      setAddress("");
      setEmail("");
      // Proceed with form submission or other actions
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <>
      <PageComp Title={pageTitle} />
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.350249035675!2d73.82917657489206!3d15.51934348508325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc19778534ed7%3A0x8929412cc130005c!2sArman%20Apartments!5e0!3m2!1sen!2sin!4v1724591659070!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowtransparency="true"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        {/* <h3 className="h3 form-title">Contact Form</h3> */}

        <form action="#" className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <div className="fields">
              <input
                type="text"
                value={name}
                name="fullname"
                className="form-input"
                placeholder="Full name"
                data-form-input
                autoComplete="off"
                onChange={handleName}
              />
              {error.name && (
                <span className={error ? "errorMsg" : ""}>{error.name}</span>
              )}
            </div>
            <div className="fields">
              <input
                type="email"
                name="email"
                value={email}
                className="form-input"
                placeholder="Email address"
                autoComplete="off"
                data-form-input
                onChange={handleEmail}
              />
              {error.email && (
                <span className={error ? "errorMsg" : ""}>{error.email}</span>
              )}
            </div>
          </div>
          <div className="fields">
            <textarea
              name="message"
              value={address}
              className="form-input"
              placeholder="Your Message"
              data-form-input
              autoComplete="off"
              onChange={handleAdd}
            ></textarea>
            {error.address && (
              <span className={error ? "errorMsg" : ""}>{error.address}</span>
            )}
          </div>

          <button className="form-btn" type="submit" data-form-btn>
            <FiSend />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
