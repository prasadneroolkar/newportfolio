import React from "react";

const SubSection = ({ title, children, className = "technical_sec" }) => {
  return (
    <section className={className}>
      <h3 className="h3 clients-title">{title}</h3>
      {children}
    </section>
  );
};

export default SubSection;
