import React from "react";
import WeatherImage from "./WeatherImage";

import "./ForecastWrapper.css";

export default function ForecastWrapper(props) {
  return (
    <div className="ForecastWrapper">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-image text-center">
            <WeatherImage code={props.info.imageCode} size={50} />
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-day">20 °</span> /
            <span className="forecast-temp-night">10°</span>
          </div>
        </div>
        `;
      </div>
    </div>
  );
}
