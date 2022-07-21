import React, {useState} from "react";


import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

export default function CurrentWeatherWrapper(props) {
  const [weather, setWeather] = useState();
  const [ready, setReady] = useState(false);

  function hendleResponse(response) {
    setReady(true);
   setWeather({
    city: response.data.name,
    date: "22/07/2022",
    day: "Tue",
    time: "15:40",
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    temp: Math.round(response.data.main.temp),
    imageURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  })};
  
  function getWeather() {
    let apiKey = "fff7fbe34f6b248c3ba3dfbbe41d297f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hendleResponse);
  }
  
  if (ready) {
  return ( 
    <WeatherDisplay info={weather} />
   );
    } else {
      getWeather();
      return "Loading..."
    }
  
}
