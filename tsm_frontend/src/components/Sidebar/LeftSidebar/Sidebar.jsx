import React from "react";
import "./Sidebar.css";
import tsmlogo from "../../assets/tsmlogo.png";
import { SidebarData } from "../../../Data/SidebarData/Sidebar";
import { UilEstate, UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import {motion} from 'framer-motion';

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants ={
    true:{
      left: '0'
    },
    false:{
      left: '-60%'
    }
  }

  return (
    <>
      <div className="bars"  style={expanded?{left: '60%'}:{left:'5%'}}
      onClick={() => setExpanded(!expanded)}
      >
        <UilBars/>
      </div>
    <motion.div className="Sidebar"
    
    variants={sidebarVariants}
    animate={window.innerWidth<860?`${expanded}`:''}
    
    >
      {/* {tsmlogo} */}
      <div className="logo">
        <img src={tsmlogo} alt="" />
        <span>
          T<span>S</span>M
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)} 
            >
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
      </div>
    </motion.div>
    </>
  );
}
