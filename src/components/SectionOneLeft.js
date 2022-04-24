import React, { useState, useEffect } from "react";
import "./SectionOne.css";

function SectionOneLeft({ currentWeather, dailyWeather, chooseUnits, units }) {
  const [buttonState, setButtonState] = useState(true);

  const buttonClick = (value) => {
    chooseUnits(value);
    setButtonState(!buttonState);
  };

  const roundNum = (num) => {
    return Math.round(num * 2) / 2;
  };

  console.log(dailyWeather[0], "kueac");

  return (
    <div className="left">
      <div className="icon">
        {currentWeather.weather.map((img, index) => (
          <img
            src={`../icons/${img.icon}.svg`}
            key={index}
            alt={img.description}
          />
        ))}
      </div>

      <div className="section-one-temperature">
        <h2>{roundNum(currentWeather.temp)}</h2>
        <div className="degrees-buttons">
          <button
            className="celsius"
            disabled={buttonState}
            onClick={() => buttonClick("metric")}
          >
            &#176;C
          </button>
          <button
            id="farenheit"
            disabled={!buttonState}
            onClick={() => buttonClick("imperial")}
          >
            &#176;F
          </button>
        </div>
      </div>

      <div className="details">
        <p>Percipitation: {Math.round(dailyWeather[0].pop * 100)}% </p>
        <p>Humidity: {currentWeather.humidity}%</p>
        <p>
          Wind: {currentWeather.wind_speed}{" "}
          {units === "metric" ? "km/h" : "mph"}
        </p>
      </div>
    </div>
  );
}

export default SectionOneLeft;
