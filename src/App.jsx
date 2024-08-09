import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import SideInfo from "./components/Sidebar/SideInfo";
import SidebarContact from "./components/Sidebar/SidebarContact";
import Header from "./components/Header";
import About from "./pages/About";

function App() {
  return (
    <>
      <section id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col mb-sm-4">
              <Sidebar>
                <SideInfo />
                <SidebarContact />
              </Sidebar>
            </div>
            <div className="col-lg-9 col-12">
              <div className="main_content">
                <Header />
                <div className="pages_content">
                  <About pageTitle="About Me" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
