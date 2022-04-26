import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "./SectionThree.css";
import { NavLink } from "react-router-dom";

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

    const newArray = [];

    const d = new Date();
    let currentDay = d.getDay();

    const one = weekday.slice(currentDay);
    const two = weekday.slice(0, currentDay);
    const three = weekday[currentDay];

    one.map((value) => newArray.push(value));
    two.map((value) => newArray.push(value));
    newArray.push(three);

    setCurrentWeek(newArray);
  }, [currentWeek]);

  return (
    <div className="tile-list">
      {!currentWeek ? (
        ""
      ) : (
        <>
          {dailyWeather.map((day, index) => (
            <NavLink to={`/${currentWeek[index]}`} activeClassName="selected">
              <Tile
                day={day}
                key={index}
                serial={index}
                currentWeek={currentWeek}
              />
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
}

export default TileList;
