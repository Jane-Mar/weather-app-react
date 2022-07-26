import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faClockRotateLeft,
  faCalendarCheck,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import WeatherImage from "./WeatherImage";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  let data = props.info.date;

  function currentDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[data.getDay()];
  }

  let hour = data.getHours();
  hour = hour < 10 ? `0${hour}` : hour;

  let minutes = data.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let day = data.getDate();
  day = day < 10 ? `0${day}` : day;

  let month = data.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  return (
    <div className="WeatherDisplay">
      <h1>
        <FontAwesomeIcon icon={faMapPin} className="icon" /> {props.info.city}
      </h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <FontAwesomeIcon icon={faClockRotateLeft} className="icon" />{" "}
              {currentDay()} {hour}:{minutes}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarCheck} className="icon" /> {day}/
              {month}/{data.getFullYear()}
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} className="icon" />{" "}
              {props.info.wind} m/s
            </li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherImage code={props.info.imageCode} size={120} />
        </div>
        <div className="col-4">
          <div className="today-temp">
            {props.info.temp}
            <span className="units">°C </span>
          </div>
        </div>
        <div className="description">{props.info.description}</div>
      </div>
    </div>
  );
}
