import React, { Component, useState } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import data from './../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import L, { latLng, latLngBounds, layerGroup } from 'leaflet';

/*
  REGION NUMBERS GUIDE:
  0: Southwest Asia & Northern Africa
  1: Sub-Saharan Africa & Australia
  2: Not Monsoon Asia
  3: Europe & Russia
  4: Western Hemisphere
*/

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
    case 0: return '#ffff00';
    case 1: return '#ff0000';
    case 2: return '#00ff00';
    case 3: return '#00ffff';
    case 4: return '#0000ff';
    default: return '#000000';
  }
}

function style(feature) {
  return {
    fillColor: getColors(feature),
    weight: 1.5,
    opacity: 1,
    fillOpacity: feature.properties.HASDATA === 0 ? .8 : .5,
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

  function highlightFeature(e) {
    let layer = e.target;
    setSelected({
      countryName: layer.feature.properties.ADMIN
    })

    layer.setStyle({
      weight: 4,
      fillOpacity: e.target.feature.properties.HASDATA === 0 ? .9 : .7,
      color: 'gray',
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    setSelected({});
    e.target.setStyle(style(e.target.feature));
  }

  function onEachCountry(country, layer) {
    layer.bindPopup(function () {
      const url = "/hawkfest/pages/" + country.properties.ADMIN + "/General%20Info.html"
      return layer.feature.properties.HASDATA === 1 ? "<p>" + country.properties.ADMIN + "</p><a href=" + url + " id='viewmorebutton'>View Country Page</a>" : "<p>" + country.properties.ADMIN + "</p>";
    });

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    })
  }


  return (
    <div>
      {!selected.countryName && (
          <div className="hover-info">Hover over an Area</div>
        )}
        {selected.countryName && (
          <div className="info">
            <strong>{selected.countryName}</strong>
          </div>
        )}
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