import React, { useState, useEffect } from "react";
import "./SectionOne.css";
import SectionOneLeft from "./SectionOneLeft";
import SectionOneRight from "./SectionOneRight";

function SectionOne({
  currentWeather,
  dailyWeather,
  lat,
  lon,
  chooseUnits,
  units,
}) {
  return (
    <div className="container">
      <div className="section-one">
        <SectionOneLeft
          currentWeather={currentWeather}
          dailyWeather={dailyWeather}
          chooseUnits={chooseUnits}
          units={units}
        />
        <SectionOneRight lat={lat} lon={lon} currentWeather={currentWeather} />
      </div>
    </div>
  );
}

export default SectionOne;
