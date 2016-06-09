# ReactJS bindings for mapbox-gl

_*mapboxgl must be passed as prop to <Map /> component as of now :/. *_
_* This is work in progress, some features might not work as expected, use with caution.*_

## Basic usage

```Javascript
import React from 'react';
import mapboxgl from 'mapbox-gl'; // Causes problems with webpack, temp fix is to use a global dependency
import { Map } from 'maps-react';

mapboxgl.accessToken = GL_TOKEN; // your access token

export default () =>
  <Map
    style="mapbox://styles/mapbox/streets-v8"
    center={[-74.50, 40]}
    zoom={9}
    mapboxgl={mapboxgl}
  />
;
```

### Example: Toggling a layer

```Javascript
import React from 'react';
import { Map, Source, Circle, Line}  from 'maps-react';

mapboxgl.accessToken = GL_TOKEN; // your access token

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

```

## <Map />

## <Source />

## <Circle />

## <Line />

## <Symbol />

## <Layer />

# Examples

- Center on a symbol [Demo](), [Src Code]()
- Cluster [Demo](), [Src Code]()
- Color Switcher [Demo](), [Src Code]()
- Display Map [Demo](), [Src Code]()
- Fit Bounds [Demo](), [Src Code]()
- Set Style [Demo](), [Src Code]()
- Set Style [Demo](), [Src Code]()
- Slowly Fly [Demo](), [Src Code]()
- Toggle Layer [Demo](), [Src Code]()
- Vector Source [Demo](), [Src Code]()