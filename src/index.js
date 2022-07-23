import React from "react";
import ReactDOM from "react-dom/client";

import "./WeatherApp.css";
import "bootstrap/dist/css/bootstrap.css";

import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <WeatherApp defaultCity="Porto" />
        <Footer />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
