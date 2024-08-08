import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import SideInfo from "./components/Sidebar/SideInfo";
import SidebarContact from "./components/Sidebar/SidebarContact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col">
              <Sidebar>
                <SideInfo />
                <SidebarContact />
              </Sidebar>
            </div>
            <div className="col-lg-9 col-12">
              <div className="main_content">
                <Header />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam aperiam commodi quisquam aliquid sequi dolore
                  eveniet itaque ullam praesentium id culpa soluta vitae, quod
                  accusamus iure labore corrupti fugit libero!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
