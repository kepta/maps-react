import React from 'react';
import Map from '../lib/Map';
import Source from '../lib/Source';
import Circle from '../lib/Circle';
import Line from '../lib/Line';
import mapboxgl from 'mapbox-gl';
import GL_TOKEN from '../app/token';

mapboxgl.accessToken = GL_TOKEN;
export default class ToggleLayer extends React.Component {

  state = {
    contours: 'visible',
    museums: 'visible',
  }

  render() {
    return (
      <div>
        <div className="menu">
          <a onClick={() => this.setState({ contours: this.state.contours === 'visible' ? 'none' : 'visible' })}>Contour</a>
          <a onClick={() => this.setState({ museums: this.state.museums === 'visible' ? 'none' : 'visible' })}> Museums</a>
        </div>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          zoom={15}
          center={[-71.97722138410576, -13.517379300798098]}
          mapboxgl={mapboxgl}
        >
          <Source
            name="museums"
            type="vector"
            url="mapbox://mapbox.2opop9hr"
          >
            <Circle
              name="museums"
              visibility={this.state.museums}
              sourceLayer="museum-cusco"
              paint={{
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)',
              }}
            />
          </Source>
          <Source
            name="contours"
            type="vector"
            url="mapbox://mapbox.mapbox-terrain-v2"
          >
            <Line
              name="contours"
              visibility={this.state.contours}
              sourceLayer="contour"
              layout={{
                'line-join': 'round',
                'line-cap': 'round',
              }}
              paint={{
                'line-color': '#877b59',
                'line-width': 1,
              }}
            />
          </Source>
        </Map>
      </div>
    );
  }


}
