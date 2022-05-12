import React, { useEffect, useState } from "react";
import "./SectionTwo.css";
import { useParams, Link } from "react-router-dom";

function Days({ dailyWeather, units }) {
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

  const windFormulaOne = (value) => {
    const newValue = Math.round((value * 7.2) / 2);
    return newValue;
  };

  const windFormulaTwo = (value) => {
    const newValue = Math.round((value * 2) / 2);
    return newValue;
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
            <div className="column">
              <ul>
                <li className="first-li">
                  <Link to="/">
                    <img src="../left.png" className="go-back" />
                  </Link>
                </li>
                <li className="first-li">
                  <div className="detailes">
                    <img src="../icons/thermometer.svg" />
                    <p>Feels Like</p>
                  </div>
                  <p>
                    {Math.round(dailyWeather[id].feels_like.day)}&#176;/
                    {Math.round(dailyWeather[id].feels_like.night)}&#176;
                  </p>
                </li>
                <li>
                  <div className="detailes">
                    <img src="../icons/humidity.svg" />
                    <p>Humidity</p>
                  </div>
                  <p>{dailyWeather[id].humidity}%</p>
                </li>
                <li>
                  <div className="detailes">
                    <img src="../icons/barometer.svg" />
                    <p>Pressure</p>
                  </div>
                  <p>{dailyWeather[id].pressure} mb</p>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li className="first-li">
                  <div className="detailes">
                    <img src="../icons/wind.svg" />
                    <p>Wind</p>
                  </div>
                  <p>
                    {units === "metric"
                      ? `${windFormulaOne(dailyWeather[id].wind_speed)} km/h`
                      : `${windFormulaTwo(dailyWeather[id].wind_speed)} mph`}
                  </p>
                </li>
                <li>
                  <div className="detailes">
                    <img src="../icons/thermometer-raindrop.svg" />
                    <p>Dew Point</p>
                  </div>
                  <p>{dailyWeather[id].dew_point}&#176;</p>
                </li>

                <li>
                  <div className="detailes">
                    <img
                      src={`../icons/uv-index-${Math.floor(
                        dailyWeather[id].uvi
                      )}.svg`}
                    />
                    <p>UV Index</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li className="first-li">
                  <div className="detailes">
                    <img src="../icons/sunrise.svg" />
                    <p>{convertUnix(dailyWeather[id].sunrise)}</p>
                  </div>
                  <div className="detailes">
                    <img src="../icons/sunset.svg" />
                    <p>{convertUnix(dailyWeather[id].sunset)}</p>
                  </div>
                </li>
                <li>
                  <div className="detailes">
                    <img src="../icons/moonrise.svg" />
                    <p>{convertUnix(dailyWeather[id].moonrise)}</p>
                  </div>
                  <div className="detailes">
                    <img src="../icons/moonset.svg" />
                    <p>{convertUnix(dailyWeather[id].moonset)}</p>
                  </div>
                </li>
                <li>
                  <div className="detailes">
                    <img
                      src={`../icons/${dailyWeather[id].weather[0].icon}.svg`}
                    />
                  </div>
                  <p>
                    {dailyWeather[id].weather[0].description
                      .charAt(0)
                      .toUpperCase() +
                      dailyWeather[id].weather[0].description.slice(1)}
                  </p>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Days;
