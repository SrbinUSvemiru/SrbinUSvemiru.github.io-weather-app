import "./App.css";

import Header from "./components/Header";

import React, { useState, useEffect } from "react";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const API = "0974d184cb2d8d0c23bc45b4780d0025";

function App() {
  const [bulkWeather, setBulkWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchData(position.coords.latitude, position.coords.longitude, units);
    });
  }, [lat, lon, units]);

  const fetchData = (latitude, longitude, units) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API}`
    )
      .then((res) => res.json())
      .then((json) => {
        setBulkWeather({ ...json });
        setLat(latitude);
        setLon(longitude);

        setIsLoading(false);
      });
  };

  const chooseUnits = (choice) => {
    setUnits(choice);
  };

  console.log(bulkWeather);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <SectionOne
            currentWeather={bulkWeather.current}
            dailyWeather={bulkWeather.daily}
            lat={lat}
            lon={lon}
            chooseUnits={chooseUnits}
          />
          <SectionTwo
            dailyWeather={bulkWeather.daily}
            hourlyWeather={bulkWeather.hourly}
          />
          <SectionThree dailyWeather={bulkWeather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
