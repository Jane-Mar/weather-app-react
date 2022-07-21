import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faClockRotateLeft, faCalendarCheck, faWind } from '@fortawesome/free-solid-svg-icons'

import "./CurrentWeatherWrapper.css";

export default function WeatherDisplay(props) {
<div className="WeatherDisplay">
<h1>
  <FontAwesomeIcon icon={faMapPin} className="icon"/> {props.city}
</h1>

<div className="row">
  <div className="col-4">
    <ul>
      <li>
        <FontAwesomeIcon icon={faClockRotateLeft} className="icon"/>{" "}
        {props.day}, {props.time}
      </li>
      <li>
        <FontAwesomeIcon icon={faCalendarCheck} className="icon"/>{" "} {props.date}
      </li>
      <li>
        <FontAwesomeIcon icon={faWind} className="icon"/>{" "} {props.wind} m/s
      </li>
    </ul>
  </div>
  <div className="col-4">
    <img src={props.imageURL} alt={props.description} />
  </div>
  <div className="col-4">
    <div className="today-temp">
      {props.temp}
      <span className="units">
        <a href="/"> °C </a> | <a href="/"> °F </a>
      </span>
    </div>
  </div>
  <div className="description">{props.description}</div>
</div>
</div>
}