import React, { useState, useEffect } from "react";
import "./SectionTwo.css";
import TileThirdTemp from "./TileThirdTemp";

function Temperature({ btnOne, hourlyWeather, units }) {
  const [threeHoursSum, setThreeHoursSum] = useState();
  useEffect(() => {
    setThreeHoursSum(() => {
      let newArray = [];
      let start = 0;
      let end = 3;

      for (let i = 0; i <= 15; i++) {
        let sum = hourlyWeather.slice(start, end);

        let newSum = Math.floor((sum[0].temp + sum[1].temp + sum[2].temp) / 3);

        newArray.push(newSum);
        start = start + 3;
        end = end + 3;
      }
      return [newArray];
    });
  }, [hourlyWeather]);
  return (
    <div className={`temperature ${btnOne ? "visible" : ""}`}>
      <div className="temperature-value">
        {!threeHoursSum
          ? ""
          : threeHoursSum[0].map((value, index) =>
              index <= 15 ? (
                <p className="temp-percent-container">{value}</p>
              ) : null
            )}
      </div>
      <div className="temp-third-list">
        {hourlyWeather.map((value, index) => (
          <TileThirdTemp
            hour={value}
            key={index}
            serial={index}
            units={units}
          />
        ))}
      </div>
    </div>
  );
}

export default Temperature;
