import React from "react";
import { LeadsData } from "../../Data/LeadsData/Leads";
import "./Leads.css";

export default function Leads() {
  return (
    <div className="Leads">
      {LeadsData.map((lead) => {
        return (
          <div className="lead">
            <img src={lead.icon} alt="" />
            <div className="note1">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{lead.name}</span>
                <span>{lead.note1}</span>
              </div>
              <span>{lead.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
