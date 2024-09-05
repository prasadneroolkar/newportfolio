import React, { useState } from "react";
import thanks from "/images/thanks.png";
import error from "/images/error.png";

import { IoMdClose } from "react-icons/io";

const Greeting = ({ msg, description, imgSrc, onClose }) => {
  const [close, setClose] = useState(false);
  // console.log(imgSrc);
  const handleClose = () => {
    setClose(true);
    onClose();
  };
  return (
    <>
      {!close && (
        <div className="greetings-overlay">
          <div className="greetings">
            <span className="closeBtn" onClick={handleClose}>
              <IoMdClose />
            </span>

            <img src={`${imgSrc === true ? thanks : error}`} alt={msg} />
            <p>{msg}</p>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Greeting;
