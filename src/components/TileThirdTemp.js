import React, { useState, useEffect } from "react";
import "./SectionTwo.css";

function TileThirdTemp({ hour, units }) {
  const [newUnits, setNewUnits] = useState();

  useEffect(() => {
    const height = `${hour.temp * 3}px`;
    setNewUnits(height);
  }, []);

  return (
    <>
      <div className="tile-third-temp" style={{ height: newUnits }}></div>
    </>
  );
}

export default TileThirdTemp;
