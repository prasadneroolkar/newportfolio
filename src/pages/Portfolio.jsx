import { useState } from "react";
import PageComp from "../components/common/PageComp";
import { tabsData } from "../components/common/DataTimeline";

const Portfolio = ({ pageTitle }) => {
  const [tabs, setTabs] = useState("all");

  const handleTab = (tb) => {
    setTabs(tb);
  };

  const renderData = () => {
    const activeData = tabsData.find((elem) => {
      return elem.id === tabs;
    });
    // console.log(activeData);
    return (
      <div className="cards">
        <ul>
          {activeData.content.map((item, index) => (
            <li key={index}>
              <img src={item.imgSrc} alt={item.type} />
              <span>{item.description}</span>
              <a>{item.type}</a>
              <span>{item.tile}</span>
              <p>
                {item.tech.map((elem, index) => (
                  <span key={index}>{elem}</span>
                ))}
              </p>
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
          <li
            onClick={() => handleTab("all")}
            className={tabs === "all" ? "active" : ""}
          >
            All
          </li>
          <li
            onClick={() => handleTab("app")}
            className={tabs === "app" ? "active" : ""}
          >
            Applications
          </li>
          <li
            onClick={() => handleTab("web")}
            className={tabs === "web" ? "active" : ""}
          >
            Web Development
          </li>
        </ul>
      </div>

      <div className="tab-content">{renderData()}</div>
    </>
  );
};

export default Portfolio;
