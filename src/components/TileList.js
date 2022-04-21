import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "./SectionThree.css";

const newArray = [];

function TileList({ dailyWeather }) {
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    let currentDay = d.getDay();

    const one = weekday.slice(currentDay);
    const two = weekday.slice(0, currentDay);
    const three = weekday[currentDay];

    one.map((value) => newArray.push(value));
    two.map((value) => newArray.push(value));
    newArray.push(three);

    setCurrentWeek(newArray);
  }, [newArray]);

  return (
    <div className="tile-list">
      {!currentWeek ? (
        ""
      ) : (
        <>
          {dailyWeather.map((day, index) => (
            <Tile
              day={day}
              key={index}
              serial={index}
              currentWeek={currentWeek}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default TileList;
