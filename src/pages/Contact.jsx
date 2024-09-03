import React, { useEffect, useState } from "react";
import { useRef } from "react";
import PageComp from "../components/common/PageComp";
import Greeting from "../components/Greeting";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

const Contact = ({ pageTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState({});
  const [popup, setPopup] = useState(false);
  const [errorPop, setErrorPop] = useState(false);

  const form = useRef();

  const handleName = (e) => {
    const namePattern = /^[a-zA-Z\s]*$/;
    if (e.target.value === "" || namePattern.test(e.target.value)) {
      setName(e.target.value.trimStart());
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value.trimStart());
  };
  const handleAdd = (e) => {
    setAddress(e.target.value.trimStart());
  };

  const validateForm = () => {
    // let isValid = true;
    let errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "") {
      errors.name = "Username is required!";
    }

    if (email === "") {
      errors.email = "Email is required!";
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email";
    }
    if (address === "") {
      errors.address = "Message is required!";
    }

    return errors;
  };

  const formEmail = () => {
    emailjs
      .sendForm(
        "service_nn5din8", // Replace with your Service ID
        "template_43q5rni", // Replace with your Template ID
        form.current,
        {
          publicKey: "user_j1bkpNalp2j5qXYblCH2H", // Replace with your User ID
        }
      )
      .then((respodnse) => {
        console.log("Email sent successfully!", response.status, response.text);
        setPopup(true);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setErrorPop(true);
      });
  };
  // const formSend = async (e) => {
  //   const formData = new FormData(e.target);

  //   formData.append("access_key", "328e4b3f-3fbf-47b2-8b0c-f513cd6131f3");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: json,
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //     setPopup(true);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm());
    if (Object.keys(validateForm()).length === 0) {
      formEmail();
      setName("");
      setAddress("");
      setEmail("");
    } else {
      console.log("Form validation failed.");
    }
  };

  const closePopup = () => {
    setErrorPop(false);
    setPopup(false);
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

        <form
          action="#"
          className="form"
          data-form
          onSubmit={handleSubmit}
          method="POST"
          ref={form}
        >
          <div className="input-wrapper">
            <div className="fields">
              <input
                type="text"
                value={name}
                name="from_name"
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
                name="from_email"
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

      {popup && (
        <>
          <Greeting
            msg="Thank You!"
            description={
              <>
                Your message has been successfully sent. <br />
                We will get back to you as soon as possible
              </>
            }
            imgSrc={popup}
            onClose={closePopup}
          />
        </>
      )}

      {errorPop && (
        <Greeting
          msg="Error!"
          description={
            <>
              Error sending email.
              <br />
              Please try again later.
            </>
          }
          imgSrc={false}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default Contact;
