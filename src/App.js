import React, { useState } from "react";
import WorldMap from "./components/WorldMap";
import data from './data/world.geo.json'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h2>hawk fest</h2>
      <WorldMap data={ data } property={ "REGION" }/>
    </React.Fragment>
  );
}

export default App;
