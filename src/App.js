import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defualtCity="Madrid" />
     <footer>
       This project was coded by Phyllis Ampo and is{" "} 
    <a href="https://github.com/BlacHera/react-weather-app" target="_blank" rel="noreferrer"
    >Open-sourced on Github </a> {" "}
          and hosted on {" "}
          <a
            href="https://endearing-bonbon-f53412.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Netlify
          </a>
      </footer>
      </div>
    </div>
  );
}
export default App;
