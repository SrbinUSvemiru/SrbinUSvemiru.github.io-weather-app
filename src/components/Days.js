import React, { useEffect, useState } from "react";
import "./SectionTwo.css";
import { useParams } from "react-router-dom";

function Days({ dailyWeather }) {
  const [currentWeek, setCurrentWeek] = useState([]);
  const { id } = useParams();
  const [convertedTime, setConvertedTime] = useState({});

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
  }, []);

  const convertUnix = (time) => {
    const date = new Date(time * 1000);
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let added = hours + ":" + minutes;
    return added;
  };

  console.log(dailyWeather);
  console.log(convertUnix(dailyWeather[0].sunset));

  return (
    <div className="container">
      <div className="days">
        {!currentWeek ? (
          ""
        ) : (
          <>
            <div className="row">
              <div className="detailes-img uv">
                <img
                  src={`../icons/uv-index-${Math.round(
                    dailyWeather[id].uvi
                  )}.svg`}
                  alt="UV index"
                />
              </div>
            </div>
            <div className="row">
              <div className="detailes-img">
                <img src={`../icons/sunrise.svg`} />
              </div>
              <div className="detailes-container">
                <p>{convertUnix(dailyWeather[id].sunrise)}</p>
              </div>

              <div className="detailes-img">
                <img src={`../icons/sunset.svg`} />
              </div>
              <div className="detailes-container">
                <p>{convertUnix(dailyWeather[id].sunset)}</p>
              </div>
            </div>
            <div className="row">
              <div className="detailes-img">
                <img src={`../icons/moonrise.svg`} />
              </div>
              <div className="detailes-container">
                <p>{convertUnix(dailyWeather[id].moonrise)}</p>
              </div>

              <div className="detailes-img">
                <img src={`../icons/moonset.svg`} />
              </div>
              <div className="detailes-container">
                <p>{convertUnix(dailyWeather[id].moonset)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Days;
