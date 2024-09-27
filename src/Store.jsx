import React, { createContext, useState } from "react";

export const contextCreate = createContext(null);

const Store = ({ children }) => {
  const [show, setShow] = useState(false);

  const showBtn = () => {
    setShow(!show);
  };
  return (
    <contextCreate.Provider value={{ show, showBtn }}>
      {children}
    </contextCreate.Provider>
  );
};

export default Store;
