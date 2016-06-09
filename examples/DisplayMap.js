import React from 'react';
import Map from '../lib/Map';
import mapboxgl from 'mapbox-gl';
import GL_TOKEN from '../app/token';

mapboxgl.accessToken = GL_TOKEN;
export default () =>
  <Map
    style="mapbox://styles/mapbox/streets-v8"
    center={[-74.50, 40]}
    zoom={9}
    mapboxgl={mapboxgl}

  />
;
