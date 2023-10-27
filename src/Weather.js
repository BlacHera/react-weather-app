import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  let weatherData = {
    city: "",
    temperature: 26,
    imgUrl: ""
  };

  return (
    <div className="Weather">
      <div className="card">
        <WeatherSearch />
        <div className="WeatherInfo">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>{weatherData.date}</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="temperature-container d-flex justify-content-end">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="temperature">
                  <strong> {temperature} </strong>{" "}
                  <span className="units">
                    <a href="/">°C </a>|{" "}
                    <a href="/" onClick={showFarehrenheit}>
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WeatherForecast row" id="forecast">
          <div className="col-2">
            <div className="WeatherForecastPreview">
              <div className="forecast-time"></div>
              <div className="forecast-temperature">
                <span className="forecast-temperature-max"></span>
                <span className="forecast-temperature-min"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
