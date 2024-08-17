import { useState } from "react";
import PageComp from "../components/common/PageComp";

const Portfolio = ({ pageTitle }) => {
  const [tabs, setTabs] = useState("all");

  const handleTab = (tb) => {
    setTabs(tb);
  };

  const tabsData = [
    {
      id: "all",
      label: "All",
      content: [
        {
          type: "app",
          imgSrc: "/src/assets/images/demo.png",
          description: "App description",
        },
        {
          type: "web",
          imgSrc: "/src/assets/images/demo.png",
          description: "Web description",
        },
        {
          type: "web",
          imgSrc: "/src/assets/images/demo.png",
          description: "Web description",
        },
        {
          type: "web",
          imgSrc: "/src/assets/images/demo.png",
          description: "Web description",
        },
      ],
    },
    {
      id: "app",
      label: "Applications",
      content: [
        {
          type: "app",
          imgSrc: "/src/assets/images/demo.png",
          description: "App description",
        },
      ],
    },
    {
      id: "web",
      label: "Web Development",
      content: [
        {
          type: "web",
          imgSrc: "/src/assets/images/demo.png",
          description: "Web description",
        },
        {
          type: "web",
          imgSrc: "/src/assets/images/demo.png",
          description: "Web description",
        },
        {
          type: "web",
          imgSrc: "/src/assets/images/demo.png",
          description: "Web description",
        },
      ],
    },
  ];

  const renderData = () => {
    const activeData = tabsData.find((elem) => {
      return elem.id === tabs;
    });
    console.log(activeData);
    return (
      <div className="cards">
        <ul>
          {activeData.content.map((item, index) => (
            <li key={index}>
              <img src={item.imgSrc} alt={item.type} />
              <a>{item.type}</a>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <PageComp Title={pageTitle} />
      <div className="tabs">
        <ul>
          <li onClick={() => handleTab("all")}>All</li>
          <li onClick={() => handleTab("app")}>Applications</li>
          <li onClick={() => handleTab("web")}>Web Development</li>
        </ul>
      </div>

      <div className="tab-content">{renderData()}</div>
    </>
  );
};

export default Portfolio;
