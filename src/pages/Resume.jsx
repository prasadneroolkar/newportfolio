import React from "react";
import PageComp from "../components/common/PageComp";
import Timeline from "../components/common/Timeline";
import { data, educationData } from "../components/common/DataTimeline";

const Resume = ({ pageTitle }) => {
  return (
    <>
      <PageComp Title={pageTitle} />
      <Timeline tlTitle="Where I’ve Worked" data={data} />
      <Timeline tlTitle="Education" data={educationData} />
    </>
  );
};

export default Resume;
