import React from "react";
import './App.css';

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather temperature={26} />
     <small>
    <a href="https://github.com/BlacHera/react-weather-app" target="_blank" rel="noreferrer"
    >Open-source code </a> 
    by Phyllis Ampo
      </small>
      </div>
    </div>
  );
}
export default App;
