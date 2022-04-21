import React, { useEffect, useState } from "react";

function SectionOneRight({ lat, lon, currentWeather }) {
  const [location, setLocation] = useState();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=0974d184cb2d8d0c23bc45b4780d0025`
    )
      .then((res) => res.json())
      .then((json) => setLocation({ ...json }));
  }, [lat, lon]);

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
  let day = weekday[d.getDay()];

  return (
    <div className="location">
      {!location ? (
        ""
      ) : (
        <>
          {Object.values(location).map((name, index) => (
            <h2 key={index}>{name.name}</h2>
          ))}
        </>
      )}
      <p>{day}</p>
      <p>
        {currentWeather.weather[0].description.charAt(0).toUpperCase() +
          currentWeather.weather[0].description.slice(1)}
      </p>
    </div>
  );
}

export default SectionOneRight;
