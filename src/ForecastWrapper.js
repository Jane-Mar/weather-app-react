import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./ForecastWrapper.css";

export default function ForecastWrapper(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState();

  function hendleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  function getWeather() {
    let lat = props.info.coordinates.lat;
    let lon = props.info.coordinates.lon;
    let apiKey = "fff7fbe34f6b248c3ba3dfbbe41d297f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hendleResponse);
  }

  if (ready) {
    return (
      <div className="ForecastWrapper">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className="col" key="index">
                  <ForecastDay info={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    getWeather();
  }
}
