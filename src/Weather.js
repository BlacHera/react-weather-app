import React, { useState } from "react";
import WeatherDate from "./WeatherDate";
import axios from "axios";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
const[weatherData, setWeatherData] = useState({ready: false });
function displayWeather(response) {
  console.log(response.data);

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

if (weatherData.ready){
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
        <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <WeatherDate date={weatherData.date}/>
                  </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                 <div className="float-left">
               <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />
                 <span className="temperature">{Math.round(weatherData.temperature)}</span>
                  <span className="unit">°C</span>
                  </div>
                   </div>
             </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind}km/h</li>
              </ul> 
              </div>
          </div>
      </div>
  ); 
} else{
  const apiKey = "3c92e732d2a8056b206186669c0852af";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defualtCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
 
    return "Loading...";
}

}
