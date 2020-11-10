import React from "react";

export default function Temperature() {
  return (
    <div className="float-left">
      <i class="fas fa-sun"></i>

      <span className="temperature" id="temperature">
        14
      </span>
      <span className="units">
        <a href='/'id="celsius">
          °C
        </a>
        <small className="stripe">|</small>
        <a href='/'id="fahrenheit">
          °F
        </a>
      </span>
    </div>
  );
}

