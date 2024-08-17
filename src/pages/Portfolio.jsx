import { useState } from "react";
import PageComp from "../components/common/PageComp";

const Portfolio = ({ pageTitle }) => {
  const [tabs, setTabs] = useState("all");

  const handleTab = (tb) => {
    setTabs(tb);
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

      <div className="tab-content">
        {tabs === "all" ? (
          <>
            <div className="cards">
              <ul>
                <li>
                  <img src="/src/assets/images/demo.png" />
                  <p> App</p>
                  <span>app desc</span>
                </li>
                <li>
                  <img src="/src/assets/images/demo.png" />
                  <p> web</p>
                  <span>web desc</span>
                </li>
                <li>
                  <img src="/src/assets/images/demo.png" />
                  <p> web</p>
                  <span>web desc</span>
                </li>
                <li>
                  <img src="/src/assets/images/demo.png" />
                  <p> web</p>
                  <span>web desc</span>
                </li>
              </ul>
            </div>
            <div>
              <p>app</p>
            </div>
            <div>
              <p>web</p>
            </div>
          </>
        ) : tabs === "app" ? (
          <div>
            <p>app</p>
          </div>
        ) : tabs === "web" ? (
          <div>
            <p>web</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Portfolio;
