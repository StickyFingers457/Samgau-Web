import React from "react";

import { GoodCover } from "../good-cover";
import { GoodBuy } from "../good-buy";
//import { setCurrentGame } from "../../redux/games/reducer";
import "./good-item.css";

export const GoodItem = ({ good }) => {


  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"      
       >
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
    </div>
  );
};
