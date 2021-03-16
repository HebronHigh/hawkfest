import React from "react";
import WorldMap from "./components/WorldMap";
import countrydata from './data/world.geo.json'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h2>hawk fest</h2>
      <WorldMap data={ countrydata } property={ "region" }/>
    </React.Fragment>
  );
}

export default App;
