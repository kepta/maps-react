import React from 'react';
import Map from '../lib/Map';
export default class SlowlyFly extends React.Component {

  isAtStart: true
  map = null
  start = [-74.50, 40]
  end = [74.50, 40]
  flyto = () => {
    if (this.map) {
      const target = this.isAtStart ? this.end : this.start;
      this.isAtStart = !this.isAtStart;
      this.map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: target,
        zoom: 9,
        bearing: 0,

        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out

        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: (t) => t,
      });
    }
  }
  render() {
    return (
      <div>
        <a onClick={this.flyto}>fly</a>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          center={[-74.50, 40]}
          zoom={9}
          onLoad={(map) => { this.map = map; }}
        />
      </div>

    );
  }
}
