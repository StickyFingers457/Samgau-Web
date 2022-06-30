import React from "react";
import "./good-cover.css";
export const GoodCover = ({ image = "" }) => {
  return (
    <div className="good-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};
