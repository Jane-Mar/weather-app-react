import React, { useState } from "react";
import WeatherImage from "./WeatherImage";
import axios from "axios";

import "./ForecastWrapper.css";

export default function ForecastWrapper(props) {
  const [ready, setReady] = useState(false);

  function hendleResponse() {
    setReady(true);
  }

  function getWeather() {
    let lat = props.info.coordinates.lat;
    let lon = props.info.coordinates.lon;
    let apiKey = "fff7fbe34f6b248c3ba3dfbbe41d297f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(hendleResponse);
  }

  if (ready) {
    return (
      <div className="ForecastWrapper">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Thu</div>
            <div className="forecast-image text-center">
              <WeatherImage code={props.info.imageCode} size={50} />
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-day"> °</span> /{" "}
              <span className="forecast-temp-night opacity-75"> 10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    getWeather();
  }
}
