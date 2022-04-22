import React, { useState, useEffect } from "react";
import "./SectionTwo.css";

function Wind({ hourlyWeather, units }) {
  return (
    <div className="wind">
      <div className="wind-speed">
        {hourlyWeather.map((value, index) =>
          index % 3 === 0 ? (
            <p className="wind-kmh">
              {units === "metric"
                ? `${Math.floor((value.wind_speed * 3.6 * 2) / 2)} km/h`
                : `${Math.floor((value.wind_speed * 2) / 2)} mph`}
            </p>
          ) : null
        )}
      </div>
      <div className="wind-direction">
        {hourlyWeather.map((value, index) =>
          index % 3 === 0 ? (
            <div className="wind-img">
              <img
                src="./wind.png"
                style={{
                  transform: `rotate(${value.wind_deg - 45}deg)`,
                }}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Wind;
