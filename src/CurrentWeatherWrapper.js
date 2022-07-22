import React, { useState } from "react";

import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import ForecastWrapper from "./ForecastWrapper";
import "./SearchWrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Rings } from "react-loader-spinner";

export default function CurrentWeatherWrapper(props) {
  const [weather, setWeather] = useState();
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function hendleResponse(response) {
    setReady(true);
    setWeather({
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temp: Math.round(response.data.main.temp),
      imageCode: response.data.weather[0].icon,
    });
  }

  function getWeather() {
    let apiKey = "fff7fbe34f6b248c3ba3dfbbe41d297f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hendleResponse);
  }

  let findCity = (event) => {
    event.preventDefault();
    getWeather();
  };

  let getCity = (event) => setCity(event.target.value);

  // function currentLocation(event) {
  //   setCity(event)
  // }

  if (ready) {
    return (
      <div className="CurrentWeatherWrapper">
        <div className="SearchWrapper">
          <form onSubmit={findCity}>
            <input
              type="search"
              className="form-control shadow-sm"
              placeholder="input city"
              autoComplete="off"
              onChange={getCity}
            />
            <button className="location-btn" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
            </button>
            <button className="location-btn" type="submit">
              <FontAwesomeIcon icon={faLocation} />
            </button>
          </form>
        </div>
        <WeatherDisplay info={weather} />
        <ForecastWrapper info={weather} />
      </div>
    );
  } else {
    getWeather();
    return <Rings height="50" width="50" color="#1297bd" ariaLabel="loading" />;
  }
}
