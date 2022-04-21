import React, { useState, useEffect } from "react";
import "./SectionTwo.css";

function HoursList() {
  const [currentHours, setCurrentHours] = useState();
  useEffect(() => {
    setCurrentHours(() => {
      const d = new Date();
      let hour = d.getHours();
      const timeArray = [];

      for (let i = 0; i < 16; i++) {
        if (hour > 48) {
          const newValue = hour - 48;
          timeArray.push(newValue);
        } else if (hour > 23) {
          const newValue = hour - 24;
          timeArray.push(newValue);
        } else {
          timeArray.push(hour);
        }
        hour = hour + 3;
      }
      return [timeArray];
    });
  }, []);

  console.log(currentHours);
  return (
    <div className="hours-list">
      {!currentHours ? (
        ""
      ) : (
        <>
          {currentHours[0].map((currentHour, index) => (
            <p key={index} className="hours-container">
              {currentHour < 10 ? `0${currentHour}` : currentHour}:00
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default HoursList;
