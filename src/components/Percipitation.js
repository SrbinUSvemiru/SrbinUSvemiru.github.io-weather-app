import React, { useState, useEffect } from "react";

import TileThird from "./TileThird";
import "./SectionTwo.css";

function Percipitation({ hourlyWeather }) {
  const [threeHoursSum, setThreeHoursSum] = useState();
  useEffect(() => {
    setThreeHoursSum(() => {
      let newArray = [];
      let start = 0;
      let end = 3;

      for (let i = 0; i <= 15; i++) {
        let sum = hourlyWeather.slice(start, end);

        let newSum = Math.floor(
          ((sum[0].pop + sum[1].pop + sum[2].pop) / 3) * 100
        );

        newArray.push(newSum);
        start = start + 3;
        end = end + 3;
      }
      return [newArray];
    });
  }, []);

  console.log(hourlyWeather, "hourly");
  console.log(threeHoursSum);

  return (
    <div className="percipitation">
      <div className="percipitation-percents">
        {!threeHoursSum
          ? ""
          : threeHoursSum[0].map((value, index) =>
              index <= 15 ? <p className="percent-container">{value}%</p> : null
            )}
      </div>
      <div className="third-list">
        {hourlyWeather.map((value, index) => (
          <TileThird hour={value} key={index} serial={index} />
        ))}
      </div>
    </div>
  );
}

export default Percipitation;
