import React from "react";
import "./Sidebar.css";
import { SidebarData } from "../../../Data/SidebarData/Sidebar";
import { Menu } from "antd";
import { UilEstate } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="SideMenu">
        <Menu>
          {SidebarData.map((item, index) => {
            return (
              <div onClick={() => navigate(item.link)}>
                <a href={item.link}>
                  <item.icon />
                  <span>{item.name}</span>
                </a>
              </div>
            );
          })}
          <div className="menuItem">
            <UilEstate />
          </div>
        </Menu>
      </div>
    </>
  );
}
