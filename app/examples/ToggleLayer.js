import React from 'react';
import Map from '../lib/Map';
import Source from '../lib/Source';
import Circle from '../lib/Circle';
import Layer from '../lib/Layer';

const options = [
  'basic', 'streets', 'emerald', 'bright', 'light', 'dark', 'satellite',
];

export default class ToggleLayer extends React.Component {
  state = {
    contours: false,
    museums: false,
  }
  changeIt = (i) => {
   
  }
  render() {
    return (
      <div>
          <div className="menu">
          </div>
          <Map
            style='mapbox://styles/mapbox/streets-v8'
            zoom={15}
            center={[-71.97722138410576, -13.517379300798098]}
          >
            <Source
              name="museums"
              type="vector"
              url="'mapbox://mapbox.2opop9hr"
            >
              <Circle
                name="museums"
                sourceLayer="museum-cusco"
                paint={{
                  'circle-radius': 8,
                  'circle-color': 'rgba(55,148,179,1)',
                }}
                visibility="visible"
              />
            </Source>
          </Map>
        </div>
    );
  }


}
