import React from "react";
import "./SearchWrapper.css";

export default function SearchWrapper() {
  return (
    <div className="SearchWrapper">
      <form>
        <input
          type="search"
          className="form-control shadow-sm"
          placeholder="input city"
          autoComplete="off"
        />
        <button className="location-btn" type="submit">
          <i className="fa-solid fa-magnifying-glass-location"></i>
        </button>
        <button className="location-btn" type="submit">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </form>
    </div>
  );
}
