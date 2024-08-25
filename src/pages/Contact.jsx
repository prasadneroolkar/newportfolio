import React from "react";
import PageComp from "../components/common/PageComp";

const Contact = ({ pageTitle }) => {
  return (
    <>
      <PageComp Title={pageTitle} />
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.350249035675!2d73.82917657489206!3d15.51934348508325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc19778534ed7%3A0x8929412cc130005c!2sArman%20Apartments!5e0!3m2!1sen!2sin!4v1724591659070!5m2!1sen!2sin"
            width="100%"
            height="380px"
            style={{ border: 0 }}
            loading="lazy"
            allowtransparency="true"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
