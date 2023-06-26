import React from "react";
import Sidebar from "../Sidebar/LeftSidebar/Sidebar";
import RightSidebar from "../Sidebar/RightSidebar/RightSidebar";

export default function Analytics() {
  return (
    <div className="home">
      <div className="Main">
        <div className="MainGlass">
          <h1>Analytics</h1>
          <Sidebar />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
