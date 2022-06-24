import React from "react";
import { GoodCover } from "../good-cover";
import { GoodBuy } from "../good-buy";
import "./good-item.css";

export const GoodItem = ({ good }) => {
  return (
    <div>
      <div className="good-item">
        <GoodCover image={good.image} />
        <div className="good-item__details">
          <span className="good-item__title">{good.title}</span>
          <div className="good-item__buy">
            <GoodBuy good={good} />
          </div>
        </div>
      </div>
    </div>
  );
};
