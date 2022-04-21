import React, { useState, useEffect } from "react";

function SectionOneLeft({ currentWeather, dailyWeather, chooseUnits }) {
  const [buttonState, setButtonState] = useState(true);

  const buttonClick = (value) => {
    chooseUnits(value);
    setButtonState(!buttonState);
  };

  const roundNum = (num) => {
    return Math.round(num * 2) / 2;
  };

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

      <div className="temperature">
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
            className="farenheit"
            disabled={!buttonState}
            onClick={() => buttonClick("imperial")}
          >
            &#176;F
          </button>
        </div>
      </div>

      <div className="details">
        <p>Percipitation: {dailyWeather[0].pop * 100}% </p>
        <p>Humidity: {currentWeather.humidity}%</p>
        <p>Wind: {currentWeather.wind_speed} km/h</p>
      </div>
    </div>
  );
}

export default SectionOneLeft;
