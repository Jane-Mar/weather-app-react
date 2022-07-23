import React from "react";
import WeatherImage from "./WeatherImage";

export default function ForecastDay(props) {
  let tempMax = Math.round(props.info.temp.max);
  let tempMin = Math.round(props.info.temp.min);

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let data = new Date(props.info.dt * 1000);
    return days[data.getDay()];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-image text-center">
        <WeatherImage code={props.info.weather[0].icon} size={50} />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-day">{tempMax}°</span> /{" "}
        <span className="forecast-temp-night opacity-75"> {tempMin}°</span>
      </div>
    </div>
  );
}
