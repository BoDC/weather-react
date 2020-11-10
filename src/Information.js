import React from "react";

export default function Information() {
  return (
    <div className="information">
      <h1>Antwerp</h1>
      <p>
        Last updated:9:00 <span id="date"> 13/09/2020</span>
      </p>

      <ul className="lijst">
        <li id="description">Broken Clouds</li>
        <br />
        <li>
          <i class="fas fa-wind"></i>
          <span id="wind">9 </span>
          mph
        </li>
        <br />
        <li>
          <i className="fas fa-tint"></i>
          <span id="humidity">2 </span>%
        </li>
      </ul>
    </div>
  );
}
