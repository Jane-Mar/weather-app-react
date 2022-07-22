import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faClockRotateLeft,
  faCalendarCheck,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import WeatherImage from "./WeatherImage";
import UnitConvertion from "./UnitConvertion";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  let data = props.info.date;
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
              {days[data.getDay()]} {hour}:{minutes}
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
          <WeatherImage code={props.info.imageCode} />
        </div>
        <div className="col-4">
          <div className="today-temp">
            <UnitConvertion temp={props.info.temp} />
          </div>
        </div>
        <div className="description">{props.info.description}</div>
      </div>
    </div>
  );
}
