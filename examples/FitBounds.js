import React from 'react';
import Map from '../lib/Map';
import mapboxgl from 'mapbox-gl';
import GL_TOKEN from '../app/token';

mapboxgl.accessToken = GL_TOKEN;
export default class FitBounds extends React.Component {
  map = null
  goToKenya = () => {
    if (this.map) {
      this.map.fitBounds([[
        32.958984,
        -5.353521,
      ], [
        43.50585,
        5.615985,
      ]]);
    }
  }
  render() {
    return (
      <div>
        <a onClick={this.goToKenya}>Go To Kenya</a>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          center={[-74.50, 40]}
          zoom={9}
          onLoad={(map) => { this.map = map; }}
          mapboxgl={mapboxgl}
        />
      </div>
    );
  }
}
