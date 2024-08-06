import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SideInfo from "./components/SideInfo";
import SidebarContact from "./components/SidebarContact";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <Sidebar>
              <SideInfo />
              <SidebarContact />
            </Sidebar>
          </div>
          <div className="col-lg-8 col-12">
            <div className="main_content">
              <header>
                <nav>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Resume</a>
                    </li>
                    <li>
                      <a href="">Portfolio</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </nav>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam aperiam commodi quisquam aliquid sequi dolore eveniet
                itaque ullam praesentium id culpa soluta vitae, quod accusamus
                iure labore corrupti fugit libero!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
