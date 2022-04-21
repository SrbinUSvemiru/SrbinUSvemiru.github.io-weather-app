import React from "react";
import "./SectionTwo.css";

function TileThird({ hour, serial }) {
  const height = `${hour.pop * 100 + 3}px`;

  return <div className="tile-third" style={{ height: height }}></div>;
}

export default TileThird;
