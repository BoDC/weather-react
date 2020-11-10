import React from "react";

import Search from "./Search";
import Information from "./Information";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Weather.css";
import "./Forecast.css";
import "./Information.css";
import "./Search.css";
import "./Temperature.css";

export default function Weather() {
  return (
    <div class="container">
      <Search />
      <Information />
      <Temperature />
      <hr />
      <Forecast />
      <footer>
     <a href="https://github.com/BoDC/weather-react" target= "_blank">Open-source code </a>
      by Bo
   </footer>
    </div>
    
  ); 
}
   