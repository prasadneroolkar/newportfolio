import { useState } from "react";
import PageComp from "../components/common/PageComp";
import { tabsData } from "../components/common/DataTimeline";
import { FaRegEye } from "react-icons/fa6";

const Portfolio = ({ pageTitle }) => {
  const [tabs, setTabs] = useState("all");

  const handleTab = (tb) => {
    setTabs(tb);
  };

  const defSelection = () => {
    return (
      <div className="cards">
        <ul>
          {tabsData.map((item, index) =>
            item.content.map((item) => (
              <li key={index}>
                <a href="#">
                  <figure className="project_img">
                    <img src={item.imgSrc} alt={item.type} />
                    <p className="eye">
                      <FaRegEye />
                    </p>
                  </figure>
                  <div>
                    <p className="cardTitle">{item.tile}</p>
                    <span className="description">{item.description}</span>
                    <p className="techDetails">
                      {item.tech.map((elem, index) => (
                        <span key={index}>{elem}</span>
                      ))}
                    </p>
                    <a>{item.type}</a>
                  </div>
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  };

  const renderData = () => {
    if (tabs === "all") {
      return defSelection();
    } else {
      const activeData = tabsData.find((elem) => {
        return elem.id === tabs;
      });
      // console.log(activeData);
      return (
        <div className="cards">
          <ul>
            {activeData.content.map((item, index) => (
              <li key={index}>
                <a href="#">
                  <figure className="project_img">
                    <img src={item.imgSrc} alt={item.type} />
                    <p className="eye">
                      <FaRegEye />
                    </p>
                  </figure>
                  <div>
                    <p className="cardTitle">{item.tile}</p>
                    <span className="description">{item.description}</span>
                    <p className="techDetails">
                      {item.tech.map((elem, index) => (
                        <span key={index}>{elem}</span>
                      ))}
                    </p>
                    <a>{item.type}</a>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
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
