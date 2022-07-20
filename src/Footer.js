import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p>
      @2022{` `}
      <a
        href="https://github.com/Jane-Mar/weather-app.git"
        rel="noreferrer"
        target="_blank"
      >
        open-sourced
      </a>
      , by Jane Marinina and {` `}
      <a
        href="https://playful-churros-22749f.netlify.app/"
        rel="noreferrer"
        target="_blank"
      >
        hosted
      </a>
      {` `} on Netlify
    </p>
  );
}
