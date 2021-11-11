import { useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import L, { latLng, latLngBounds } from "leaflet";

import "leaflet/dist/leaflet.css";
import "./../styles/Map.css";

import data from "./../data/countries.json";

/*
  REGION NUMBERS GUIDE:
  0: Southwest Asia & Northern Africa
  1: Sub-Saharan Africa & Australia
  2: East & Southeast Asia
  3: Europe & Russia
  4: Western Hemisphere
*/

/**
 * Color values for each region
 */
const colors = [
  { false: "#ffff00", true: "#777700" }, // region 0
  { false: "#ff0000", true: "#770000" }, // region 1
  { false: "#00ff00", true: "#007700" }, // region 2
  { false: "#00ffff", true: "#007777" }, // region 3
  { false: "#0000ff", true: "#000077" }, // region 4
];

/**
 * Returns the correct color of a layer from the REGION property in the JSON
 *
 * @param {*} layer the layer to get the original color of
 * @returns the color that the layer needs to be
 *
 * @author Ethan Maher
 */
function getColors(feature) {
  const regionNumber = feature.properties.REGION;
  if (regionNumber >= 0 && regionNumber <= 4)
    return feature.properties.HASDATA === 1
      ? colors[regionNumber].true
      : colors[regionNumber].false;
  else return "black";
}

/**
 * function to get the default styling of a feature in the map
 *
 * @param {*} feature the feature to be styled
 * @returns the default style properties
 */
function style(feature) {
  return {
    fillColor: getColors(feature),
    weight: 1.5,
    opacity: 1,
    fillOpacity: feature.properties.HASDATA === 1 ? 0.7 : 0.4,
    color: "black",
  };
}

/**
 * functional component for the map
 *
 * @returns html for the map
 * @author Ethan Maher
 */
const Map = () => {
  const [selected, setSelected] = useState({});

  /**
   * function to highlight a feature that was mouseovered
   * also sets a selected country for the useState
   *
   * @param {*} e the thing to highlight
   */
  function highlightFeature(e) {
    let layer = e.target;
    setSelected({
      countryName: layer.feature.properties.ADMIN,
    });

    layer.setStyle({
      weight: 4,
      fillOpacity: e.target.feature.properties.HASDATA === 1 ? 0.9 : 0.6,
      color: "gray",
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  /**
   * function to reset the highlighting on something being hovered
   * @param {*} e the thing to reset the highlighting of
   */
  function resetHighlight(e) {
    setSelected({});
    e.target.setStyle(style(e.target.feature));
  }

  /**
   * function for things to do to every country when it is mapped
   *
   * @param {*} country the feature
   * @param {*} layer the layer
   */
  function onEachCountry(country, layer) {
    layer.bindPopup(function () {
      let countryName = country.properties.ADMIN;

      /*
        Have to do this for countries whose ADMIN is different than their page name
      */
      if (countryName === "United States of America")
        countryName = "United States";

      const url =
        "/hawkfest/pages/" +
        countryName.replaceAll(" ", "%20") +
        "/General%20Info.html";
      return country.properties.HASDATA === 1
        ? "<div>" +
            country.properties.ADMIN +
            "</div><a href=" +
            url +
            " id='viewmorebutton'>View Country Page</a>"
        : "<div>" + country.properties.ADMIN + "</div>";
    });

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  }

  return (
    <div>
      {!selected.countryName && (
        <div className="hover-info">Hover Over a Country</div>
      )}
      {selected.countryName && (
        <div className="hovercontainer">
          <strong>{selected.countryName}</strong>
        </div>
      )}
      <div className="legend">
        <p>Please click on a shaded country to get started</p>
        <div style={{ "--color": colors[0].false }}>
          Southwest Asia & Northern Africa
        </div>
        <div style={{ "--color": colors[1].false }}>
          Sub-Saharan Africa & Australia
        </div>
        <div style={{ "--color": colors[2].false }}>East & Southeast Asia</div>
        <div style={{ "--color": colors[3].false }}>Europe & Russia</div>
        <div style={{ "--color": colors[4].false }}>Western Hemisphere</div>
      </div>
      <MapContainer
        style={{ height: "90vh" }}
        minZoom={2}
        maxZoom={7}
        zoomControl={false}
        zoom={2}
        center={[12.345, 12.345]}
        maxBounds={latLngBounds(latLng(-90, -200), latLng(90, 200))}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON
          style={style}
          data={data.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
