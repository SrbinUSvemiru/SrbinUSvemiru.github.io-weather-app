import React from "react";
import "./SectionThree.css";

function Tile({ day, serial, currentWeek }) {
  const roundNum = (num) => {
    return Math.round(num);
  };

  return (
    <div className="tile">
      <p>{currentWeek[serial]}</p>
      <div className="img-container">
        <img src={`../icons/${day.weather[0].icon}.svg`} />
      </div>
      <div className="max-min-temp">
        <p className="max">{roundNum(day.temp.max)}&#176;</p>
        <p className="min">{roundNum(day.temp.min)}&#176;</p>
      </div>
    </div>
  );
}

export default Tile;
