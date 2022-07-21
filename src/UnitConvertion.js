import React, {useState} from "react";

export default function UnitConvertion(props) {
  const [unit, setUnit] = useState("celsius");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
        <div className="UnitConvertion">
          {props.temp}
        <span className="units">
          <span className="active">
       °C </span> | <a href="/" onClick={toFahrenheit}> °F </a>
        </span>
       </div>
      )} else {
        return(
          <div className="UnitConvertion">
            {Math.round(props.temp *9 /5 + 32)}
             <span className="units">
                    <a href="/" onClick={toCelsius}>  °C </a> |  <span className="active">°F </span>
       </span>
       </div>
        )
      }
}