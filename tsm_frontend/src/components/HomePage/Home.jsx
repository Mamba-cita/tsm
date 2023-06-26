import React from "react";
import "../../App.css";
import RightSidebar from "../Sidebar/RightSidebar/RightSidebar";
import Sidebar from "../Sidebar/LeftSidebar/Sidebar";

import "./Home.css";
import Header from "../Header";

export default function Home() {
  return (
    <div className="home">
      <div className="Main">
        <div className="MainGlass">
          <Header/>
          <h1>Home</h1>
          <Sidebar />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
