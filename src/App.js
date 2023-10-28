import React from "react";
import './App.css';

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
       <Weather temperature={26} />
     <small>
    <a href="https://github.com/BlacHera/react-weather-app" target="_blank"
    >Open-source code </a> 
    by Phyllis Ampo
      </small>
    </div>
  );
}

export default App;
