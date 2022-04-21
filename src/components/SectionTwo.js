import React, { useState } from "react";
import HoursList from "./HoursList";
import Percipitation from "./Percipitation";
import "./SectionTwo.css";

function SectionTwo({ dailyWeather, hourlyWeather }) {
  const [clicked, setClicked] = useState(true);

  const moveContainer = () => {
    setClicked(!clicked);
  };

  return (
    <div className="container">
      <div className="section-two">
        <button
          className="arrow-left"
          disabled={clicked}
          onClick={() => moveContainer()}
        >
          <img src="../left.png" />
        </button>
        <button
          className="arrow-right"
          disabled={!clicked}
          onClick={() => moveContainer()}
        >
          <img src="../right.png" />
        </button>
        <div className={`section-two-container ${!clicked ? "moved" : ""}`}>
          <Percipitation hourlyWeather={hourlyWeather} />
          <HoursList />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
