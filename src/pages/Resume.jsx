import React from "react";
import PageComp from "../components/common/PageComp";
import Timeline from "../components/common/Timeline";

const Resume = ({ pageTitle }) => {
  return (
    <>
      <PageComp Title={pageTitle} />
      <Timeline tlTitle="Education" />
      <Timeline />
    </>
  );
};

export default Resume;
