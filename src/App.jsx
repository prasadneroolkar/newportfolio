import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import SideInfo from "./components/Sidebar/SideInfo";
import SidebarContact from "./components/Sidebar/SidebarContact";
import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Store from "./Store";

function App() {
  // const [show, setShow] = useState(false);

  // const showBtn = () => {
  //   setShow(!show);
  // };
  return (
    <>
      <Store>
        <section id="body">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col mb-lg-0 mb-4 divFixed">
                {/* <Sidebar showStatus={show}>
                  <SideInfo handleShow={showBtn} />
                  <SidebarContact disBtn={show} />
                </Sidebar> */}
                <Sidebar>
                  <SideInfo />
                  <SidebarContact />
                </Sidebar>
              </div>
              <div className="col-lg-9 col-12">
                <div className="main_content">
                  <Header />
                  <div className="pages_content">
                    <Routes>
                      <Route
                        path="/"
                        element={<About pageTitle="About Me" />}
                      />
                      <Route
                        path="/resume"
                        element={<Resume pageTitle="Resume" />}
                      />
                      <Route
                        path="/portfolio"
                        element={<Portfolio pageTitle="Portfolio" />}
                      />
                      <Route
                        path="/Contact"
                        element={<Contact pageTitle="Contact" />}
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Store>
    </>
  );
}

export default App;
