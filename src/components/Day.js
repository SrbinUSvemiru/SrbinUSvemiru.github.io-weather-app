import React from "react";
import "./SectionTwo.css";

function Day({ dailyWeather }) {
  console.log(dailyWeather);
  return (
    <div className="container">
      <div className="day"></div>
    </div>
  );
}

export default Day;
