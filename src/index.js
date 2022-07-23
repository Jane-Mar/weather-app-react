import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import CurrentWeatherWrapper from "./CurrentWeatherWrapper";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <CurrentWeatherWrapper defaultCity="Porto" />
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
