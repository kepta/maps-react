# ReactJS bindings for mapbox-gl

_*mapboxgl must be passed as prop to <Map /> component as of now :/. *_
_* This is work in progress, some features might not work as expected, use with caution.*_

# Usage 

```bash
  npm install -S maps-react
```

## Example: Setting up Map

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
# Examples
These examples are inspired from mapbox-gl's official [examples](https://www.mapbox.com/mapbox-gl-js/examples/).

- Center on a symbol [Demo](http://kushanjoshi.com/maps-react/#/CenterOnSymbol), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/CenterOnSymbol.js)
- Cluster [Demo](http://kushanjoshi.com/maps-react/#/Cluster), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/Cluster.js)
- Display Map [Demo](http://kushanjoshi.com/maps-react/#/DisplayMap), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/DisplayMap.js)
- Fit Bounds [Demo](http://kushanjoshi.com/maps-react/#/FitBounds?_k=4jj3wk), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/FitBounds.js)
- Set Style [Demo](http://kushanjoshi.com/maps-react/#/SetStyle?_k=4jj3wk), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/SetStyle.js)
- Slowly Fly [Demo](http://kushanjoshi.com/maps-react/#/SlowlyFly?_k=4jj3wk), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/SlowlyFly.js)
- Toggle Layer [Demo](http://kushanjoshi.com/maps-react/#/ToggleLayer?_k=4jj3wk), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/ToggleLayer.js)
- Vector Source [Demo](http://kushanjoshi.com/maps-react/#/VectorSource?_k=4jj3wk), [Src Code](https://github.com/kepta/maps-react/blob/master/examples/VectorSource.js)
- Color Switcher [Demo](), [Src Code]()