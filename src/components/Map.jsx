import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import data from './../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import { latLng, latLngBounds } from 'leaflet';

/*
  REGION NUMBERS GUIDE:
  0: Southwest Asia & Northern Africa
  1: Sub-Saharan Africa & Australia
  2: Not Monsoon Asia
  3: Europe & Russia
  4: Western Hemisphere
*/

/**
 * Highlights a layer that was hovered over in the map
 *
 * @param {*} e the object that was hovered over
 *
 * @author Ethan Maher
 */
function highlight(e) {
  const HAS_MEDIA = e.target.feature.properties.HAS_MEDIA;
  console.log(HAS_MEDIA);
  const layer = e.target;
  layer.setStyle({
    fillOpacity: .8,
    weight: 3,
  })
  layer.bringToFront();
}

/**
 * Unhighlights a layer that is no longer hovered over based on the region that layer is in (determined in JSON properties)
 *
 * @param {*} e the object that was stopped being hovered over
 *
 * @author Ethan Maher
 */
function resetHighlight(e) {
  const layer = e.target;
  layer.setStyle({
    weight: 1,
    fillColor: getColors(layer.feature),
    fillOpacity: .5
  })
}

/**
 * Returns the correct color of a layer from the REGION property in the JSON
 *
 * @param {*} layer the layer to get the original color of
 *
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


/**
 * Class for Map component
 *
 * @author Ethan Maher
 */
class Map extends Component {
  componentDidMount() {
    //console.log(data)
  }

  onEachCountry = (country, layer) => {
    layer.bindPopup(function () {
      const url = "/hawkfest/pages/" + country.properties.ADMIN + "/General%20Info.html"
      return country.properties.ADMIN + "<br /><a href=" + url + ">View More</a>";
    })

    layer.on({
      mouseover: highlight,
      mouseout: resetHighlight
    })
  }

  render() {
    return (
      <>
        <div>
         <MapContainer style={{ height: "87vh" }} minZoom={2} maxZoom={7} zoom={2} center={[12.345, 12.345]} maxBounds={latLngBounds(latLng(-90,-200),latLng(90,200))} maxBoundsViscosity={1.0}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <GeoJSON
              style={
                function (feature) {
                  return {
                    fillColor: getColors(feature),
                    weight: 1,
                    fillOpacity: .5,
                    color: 'black'
                  }
                }
              }
              data={data.features}
              onEachFeature={this.onEachCountry}
            />
          </MapContainer>
          </div>
        </>
    )
  }
}

export default Map