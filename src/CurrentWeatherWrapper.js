import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faClockRotateLeft, faCalendarCheck, faWind } from '@fortawesome/free-solid-svg-icons'

import "./CurrentWeatherWrapper.css";

export default function CurrentWeatherWrapper() {
  let weatherData = {
    city: "Porto",
    date: "22/07/2022",
    day: "Tue",
    time: "15:40",
    wind: "3",
    description: "clear",
    temp: "19",
    imageURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
    <div className="CurrentWeatherWrapper">
      <h1>
        <FontAwesomeIcon icon={faMapPin} className="icon"/> {weatherData.city}
      </h1>

      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <FontAwesomeIcon icon={faClockRotateLeft} className="icon"/>{" "}
              {weatherData.day}, {weatherData.time}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarCheck} className="icon"/>{" "} {weatherData.date}
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} className="icon"/>{" "} {weatherData.wind} m/s
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img src={weatherData.imageURL} alt={weatherData.description} />
        </div>
        <div className="col-4">
          <div className="today-temp">
            {weatherData.temp}
            <span className="units">
              <a href="/"> °C </a> | <a href="/"> °F </a>
            </span>
          </div>
        </div>
        <div className="description">{weatherData.description}</div>
      </div>
    </div>
  );
}
