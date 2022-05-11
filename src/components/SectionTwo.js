import React, { useState } from "react";
import HoursList from "./HoursList";
import Percipitation from "./Percipitation";
import Wind from "./Wind";
import { Route } from "react-router-dom";
import "./SectionTwo.css";
import Temperature from "./Temperature";

function SectionTwo({ dailyWeather, hourlyWeather, units }) {
  const [clicked, setClicked] = useState(true);
  const [btnOne, setBtnOne] = useState(true);
  const [btnTwo, setBtnTwo] = useState(false);
  const [btnThree, setBtnThree] = useState(false);

  const handleClickOne = () => {
    setBtnOne(true);
    setBtnTwo(false);
    setBtnThree(false);
  };

  const handleClickTwo = () => {
    setBtnOne(false);
    setBtnTwo(true);
    setBtnThree(false);
  };

  const handleClickThree = () => {
    setBtnOne(false);
    setBtnTwo(false);
    setBtnThree(true);
  };

  const moveContainer = () => {
    setClicked(!clicked);
  };

  return (
    <div className="container">
      <div className="section-two">
        <button
          className="arrow-left"
          disabled={clicked}
          onClick={() => moveContainer()}
        >
          <img src="./left.png" />
        </button>
        <button
          className="arrow-right"
          disabled={!clicked}
          onClick={() => moveContainer()}
        >
          <img src="./right.png" />
        </button>
        <div className="navigators">
          <button onClick={() => handleClickOne()} disabled={btnOne}>
            Temperature
          </button>
          <button
            onClick={() => handleClickTwo()}
            disabled={btnTwo}
            id="percipitation-button"
          >
            Percipitation
          </button>
          <button onClick={() => handleClickThree()} disabled={btnThree}>
            Wind
          </button>
        </div>
        <div className={`section-two-container ${!clicked ? "moved" : ""}`}>
          <Temperature
            btnOne={btnOne}
            hourlyWeather={hourlyWeather}
            units={units}
          />
          <Percipitation hourlyWeather={hourlyWeather} btnTwo={btnTwo} />
          <Wind
            hourlyWeather={hourlyWeather}
            btnThree={btnThree}
            units={units}
          />
          <HoursList />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
