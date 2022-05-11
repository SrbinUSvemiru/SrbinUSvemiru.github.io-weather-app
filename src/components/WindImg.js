import React, { useState, useEffect } from "react";
import "./SectionTwo.css";

function WindImg({ serial, hour }) {
  const [imgSize, setImgSize] = useState();

  useEffect(() => {
    const newValue = size(Math.round((hour.wind_speed * 7.2) / 2));
    setImgSize(newValue);
  }, [imgSize]);

  const size = (element) => {
    if (element <= 5) {
      element = 5;
    } else if (element <= 10) {
      element = 8;
    } else if (element <= 15) {
      element = 11;
    } else {
      element = 14;
    }
    return element;
  };

  return (
    <div className="wind-img">
      {!imgSize ? (
        ""
      ) : (
        <img
          src="./wind.png"
          style={{
            transform: `rotate(${hour.wind_deg - 45}deg)`,
            width: `${imgSize * 4}px`,
          }}
        />
      )}
    </div>
  );
}

export default WindImg;
