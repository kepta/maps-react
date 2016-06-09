import React from 'react';
import Map from '../lib/Map';
import Source from '../lib/Source';
import Symbol from '../lib/Symbol';
import Circle from '../lib/Circle';
import mapboxgl from 'mapbox-gl';
import GL_TOKEN from '../app/token';

mapboxgl.accessToken = GL_TOKEN;
 var layers = [
      [150, '#f28cb1'],
      [20, '#f1f075'],
      [0, '#51bbd6']
];

export default () =>
  <Map
    style="mapbox://styles/mapbox/dark-v8"
    center={[-103.59179687498357, 40.66995747013945]}
    zoom={3}
    mapboxgl={mapboxgl}
  >
    <Source
      name="earthquakes"
      type="geojson"
      data="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
      cluster
      clusterMaxZoom={14}
      clusterRadius={50}
    >
      <Symbol
        name="non-cluster-markers"
        layout={{
          'icon-image': 'marker-15',
        }}
      />
      {layers.map((layer, i) =>
        <Circle
          name={`cluster-${i}`}
          paint={{
            'circle-color': layer[1],
            'circle-radius': 18,
          }}
          filter={i === 0 ?
                ['>=', 'point_count', layer[0]] :
                ['all',
                    ['>=', 'point_count', layer[0]],
                    ['<', 'point_count', layers[i - 1][0]]]
          }
        />
      )}
      <Symbol
        name="cluster-count"
        layout={{
          'text-field': '{point_count}',
          'text-font': [
            'DIN Offc Pro Medium',
            'Arial Unicode MS Bold',
          ],
          'text-size': 12,
        }}
      />

    </Source>
  </Map>
;
