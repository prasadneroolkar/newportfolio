import React from "react";

const SubSection = ({ title, children }) => {
  return (
    <section className="technical_sec">
      <h3 className="h3 clients-title">{title}</h3>
      {children}
    </section>
  );
};

export default SubSection;
