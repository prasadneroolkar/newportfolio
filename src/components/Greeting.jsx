import React, { useState } from "react";
import thanks from "../assets/images/thanks.png";
import { IoMdClose } from "react-icons/io";

const Greeting = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };
  return (
    <div className={`greetings-overlay ${close && "hide"}`}>
      <div className="greetings">
        <span className="closeBtn" onClick={handleClose}>
          <IoMdClose />
        </span>

        <img src={thanks} alt="ThankYou" />
        <p>Thank You!</p>
        <p>
          Your message has been successfully sent. <br />
          We will get back to you as soon as possible
        </p>
      </div>
    </div>
  );
};

export default Greeting;
