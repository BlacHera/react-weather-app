import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
        <form onSubmit="">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            onChange=""
            autoFocus="on"
          />
        </div>
        <div className="col-3 p-0">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
        <h1>Barcelona</h1>
              <ul>
                <li>Monday 9:47</li>
                <li>Light rain showers</li>
              </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
               <img
                  src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                  alt="Light rain showers"
                  className="float-left"
                />
                 <span className="temperature">18</span>
                  <span className="units">°C</span>
                  </div>
             </div>
            <div className="col-6">
              <ul>
                <li>Percipitation: 92%</li>
                <li>Humidity: 69%</li>
                <li>Wind: 5km/h</li>
              </ul> 
              </div>
          </div>
      </div>
  );
}
