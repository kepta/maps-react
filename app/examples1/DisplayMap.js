import React from 'react';
import Map from '../lib/Map';
export default () =>
  <Map
    style="mapbox://styles/mapbox/streets-v8"
    center={[-74.50, 40]}
    zoom={9}
  />
;
