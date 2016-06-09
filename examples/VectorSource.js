import React from 'react';
import Map from '../lib/Map';
import Source from '../lib/Source';
import Line from '../lib/Line';
import mapboxgl from 'mapbox-gl';
import GL_TOKEN from '../app/token';

mapboxgl.accessToken = GL_TOKEN;
export default () =>
  <Map
    style="mapbox://styles/mapbox/light-v8"
    center={[-122.447303, 37.753574]}
    zoom={13}
    mapboxgl={mapboxgl}
  >
    <Source
      name="terrain-data"
      type="vector"
      url="mapbox://mapbox.mapbox-terrain-v2"
    >
      <Line
        name="terrain-data"
        sourceLayer="contour"
        layout={{
          'line-join': 'round',
          'line-cap': 'round',
        }}
        paint={{
          'line-color': '#ff69b4',
          'line-width': 1,
        }}
      />
    </Source>
  </Map>
;
