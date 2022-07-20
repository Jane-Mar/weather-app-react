import React from "react";
import "./SearchWrapper.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faMagnifyingGlassLocation} />       
        </button>
        <button className="location-btn" type="submit">
        <FontAwesomeIcon icon={faLocation} />
        </button>
      </form>
    </div>
  );
}
