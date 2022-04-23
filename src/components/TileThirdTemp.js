import React from "react";
import "./SectionTwo.css";

function TileThirdTemp({ hour, units }) {
  const height = `${hour.temp * 3}px`;
  const heightFarenheit = `${(((hour.temp - 32) * 5) / 9) * 3}px`;

  return (
    <>
      {units === "metric" ? (
        <div className="tile-third-temp" style={{ height: height }}></div>
      ) : (
        <div
          className="tile-third-temp"
          style={{ height: heightFarenheit }}
        ></div>
      )}
    </>
  );
}

export default TileThirdTemp;
