import MenuAppBar from "./components/appBar";
import "./App.css";
import React, { useState } from "react"; 
import "./assets/styles/page_layout.scss";
import "./assets/styles/common.scss";
import { Outlet } from "react-router-dom";
import SlideBard from "./components/drawer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="parent-wrapper">
        <div className="alignment">
          <MenuAppBar menuToggleFunction={() => setIsOpen((prev) => (prev = !prev))} />
          <SlideBard menuToggle={isOpen} menuToggleFunction={() => setIsOpen((prev) => (prev = !prev))} />
          <div className="outlet-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
