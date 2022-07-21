import React, {useState} from "react";

export default function UnitConvertion(props) {
  const [unit, setUnit] = useState(props.temp);

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit(Math.round(props.temp * 9/5 + 32)
    );
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit(props.temp);
  }

    return (
        <div className="UnitConvertion">
          {unit}
        <span className="units">
        <a href="/" onClick={toCelsius}> °C </a> | <a href="/" onClick={toFahrenheit}> °F </a>
        </span>
       </div>
      );
}