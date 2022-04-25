import React, { useState, useEffect } from "react";
import "./SectionTwo.css";
import WindImg from "./WindImg";

function Wind({ hourlyWeather, units, btnThree }) {
  const [eightHoursWind, setEightHoursWind] = useState();
  const [windIconSize, setWindIconSize] = useState();

  useEffect(() => {
    let newArray = hourlyWeather
      .filter((value, index) => index % 3 === 0)
      .map((value) => value);

    setEightHoursWind(newArray);
  }, [hourlyWeather]);

  const windFormulaOne = (value) => {
    const newValue = Math.round((value * 7.2) / 2);
    return newValue;
  };

  const windFormulaTwo = (value) => {
    const newValue = Math.round((value * 2) / 2);
    return newValue;
  };

  return (
    <div className={`wind ${btnThree ? "visible" : ""}`}>
      {!eightHoursWind ? (
        ""
      ) : (
        <>
          <div className="wind-speed">
            {eightHoursWind.map((value, index) => (
              <p className="wind-kmh">
                {units === "metric"
                  ? `${windFormulaOne(value.wind_speed)} km/h`
                  : `${windFormulaTwo(value.wind_speed)} mph`}
              </p>
            ))}
          </div>
          <div className="wind-direction">
            {eightHoursWind.map((value, index) => (
              <div className="wind-img">
                <WindImg serial={index} index={index} hour={value} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Wind;
