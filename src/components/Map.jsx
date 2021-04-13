import React, { useState } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import data from './../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import L, { latLng, latLngBounds } from 'leaflet';

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
const COLOR_0 = '#ffff00';
const COLOR_1 = '#ff0000';
const COLOR_2 = '#00ff00';
const COLOR_3 = '#00ffff';
const COLOR_4 = '#0000ff';
const COLOR_DEFAULT = '#000000';

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
  switch (regionNumber) {
    case 0: return COLOR_0;
    case 1: return COLOR_1;
    case 2: return COLOR_2;
    case 3: return COLOR_3;
    case 4: return COLOR_4;
    default: return COLOR_DEFAULT;
  }
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
    fillOpacity: feature.properties.HASDATA === 1 ? .8 : .4,
    color: 'black'
  };
}

/**
 * functional component for the map
 *
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
      countryName: layer.feature.properties.ADMIN
    })

    layer.setStyle({
      weight: 4,
      fillOpacity: e.target.feature.properties.HASDATA === 1 ? 1 : .6,
      color: 'gray',
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
      const url = "/hawkfest/pages/" + country.properties.ADMIN + "/General%20Info.html"
      return country.properties.HASDATA === 1
      ? "<div>" + country.properties.ADMIN + "</div><a href=" + url + " id='viewmorebutton'>View Country Page</a>"
        : "<div>" + country.properties.ADMIN + "</div>";
    });

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    })
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
          <p>Please Click on a Country With a Darker Color to Get Started</p>
          <div style={{ "--color": COLOR_0 }}>Southwest Asia & Northern Africa</div>
          <div style={{ "--color": COLOR_1 }}>Sub-Saharan Africa & Australia</div>
          <div style={{ "--color": COLOR_2 }}>East & Southeast Asia</div>
          <div style={{ "--color": COLOR_3 }}>Europe & Russia</div>
          <div style={{ "--color": COLOR_4 }}>Western Hemisphere</div>
        </div>
      <MapContainer style={{ height: "90vh" }} minZoom={2} maxZoom={7} zoomControl={false} zoom={2} center={[12.345, 12.345]} maxBounds={latLngBounds(latLng(-90,-200),latLng(90,200))} maxBoundsViscosity={1.0}>
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
    )

}

export default Map