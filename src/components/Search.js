import React, { useState, useEffect } from "react";

import "./Search.css";

function Search({ data, city, setCity, setLocation }) {
  return (
    <div className="container">
      <div className="search-bar">
        <input
          placeholder="Choose City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <ul className="cities">
          {Object.values(data).map((value, index) => (
            <li key={index}>
              <button onClick={() => setLocation(value)}>
                {value.name} / {value.country}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
