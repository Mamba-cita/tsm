import React from "react";
import "./Cards.css";
import { CardsData } from "../../Data/CardsData/CardsData";
import Card from "../Card/Card";

export default function Cards() {
  return (
    <div className="Cards">
     
        {CardsData.map((card, id)=>{
            return(
            <div className="parentCard">
                <Card
                   title={card.title}
                   color={card.color}
                   barValue={card.barValue}
                   value={card.value}
                   icon={card.icon}
                   series={card.series}
                />
            </div>
            )
        })}
    </div>
  );
}
