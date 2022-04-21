import React from "react";
import TileList from "./TileList";
import "./SectionThree.css";

function SectionThree({ dailyWeather }) {
  return (
    <div className="container">
      <div className="section-three">
        <TileList dailyWeather={dailyWeather} />
      </div>
    </div>
  );
}

export default SectionThree;
