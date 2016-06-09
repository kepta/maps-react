import React from 'react';
import Map from '../lib/Map';
import Source from '../lib/Source';
import Symbol from '../lib/Symbol';

export default class CenterOnSymbol extends React.Component {

  state = {
    map: null,
  }
  coords = [
    [-91.395263671875, -0.9145729757782163],
    [-90.32958984375, -0.6344474832838974],
    [-91.34033203125, 0.01647949196029245],
  ]

  makeData = () => ({
    type: 'FeatureCollection',
    features: this.coords.map((c) => ({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: c,
      },
    })
    ),
  })

  handleClick = (e, query, map) => {
    const feat = query(e.point);
    if (feat.length > 0) {
      this.state.map.flyTo({
        center: feat[0].geometry.coordinates,
      });
    }
  }

  render() {
    return (
      <div>
        <a onClick={this.flyto}>fly</a>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          center={[-90.96, -0.47]}
          zoom={8}
          onLoad={(map) => this.setState({ map })}
        >
          <Source
            name="symbols"
            type="geojson"
            data={this.makeData()}
            onClick={this.handleClick}
          >
            <Symbol
              name="symbols"
              layout={{ 'icon-image': 'marker-15' }}
            />
          </Source>
        </Map>
      </div>

    );
  }
}
