import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SideInfo from "./components/SideInfo";
import SidebarContact from "./components/SidebarContact";

function App() {
  return (
    <>
      <Sidebar>
        <SideInfo />
        <SidebarContact />
      </Sidebar>
    </>
  );
}

export default App;
