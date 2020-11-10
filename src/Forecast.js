import React from "react";

export default function Forecast() {
  return (
    <div className="row weather-forecast" id="forecast">
      <div className="row">
        <div className="col">
          Sun <br />
          <i class="fas fa-cloud-sun"></i> <br />
          22°C
        </div>
        <div className="col">
          Mon <br />
          <i class="fas fa-cloud-sun"></i> <br />
          23°C
        </div>
        <div className="col">
          Tue
          <br />
          <i className="fas fa-cloud-showers-heavy"></i> <br />
          19°C
        </div>
        <div className="col">
          Wed <br />
          <i className="fas fa-cloud-sun"></i> <br />
          19°C
        </div>
        <div className="col">
          Thur <br />
          <i class="fas fa-cloud-sun"></i> <br />
          19°C
        </div>
      </div>
    </div>
  );
}