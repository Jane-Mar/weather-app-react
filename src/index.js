import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./Index.css";
import 'bootstrap/dist/css/bootstrap.css';

import SearchWrapper from "./SearchWrapper";
import CurrentWeatherWrapper from "./CurrentWeatherWrapper";
import ForecastWrapper from "./ForecastWrapper";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <SearchWrapper />
      <CurrentWeatherWrapper />
      <ForecastWrapper />
      <Footer />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
