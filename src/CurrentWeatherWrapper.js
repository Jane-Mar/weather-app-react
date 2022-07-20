import React from "react";

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
        <i className="fa-solid fa-map-pin"></i> {weatherData.city}
      </h1>

      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <i className="fa-solid fa-clock-rotate-left"></i>{" "}
              {weatherData.day}, {weatherData.time}
            </li>
            <li>
              <i className="fa-solid fa-calendar-check"></i> {weatherData.date}
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> {weatherData.wind} m/s
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
