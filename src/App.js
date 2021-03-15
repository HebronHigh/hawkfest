import React, { useState } from "react";
import WorldMap from "./components/WorldMap";
import data from './data/world.geo.json'
import "./App.css";

function App() {
  const [property, setProperty] = useState("REGION")
  return (
    <React.Fragment>
      <h2>hawk fest</h2>
      <WorldMap data={ data } property={ property }/>
    </React.Fragment>
  );
}

export default App;
