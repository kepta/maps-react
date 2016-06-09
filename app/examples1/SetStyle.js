import React from 'react';
import Map from '../lib/Map';

const options = [
  'basic', 'streets', 'emerald', 'bright', 'light', 'dark', 'satellite',
];

export default class SetStyle extends React.Component {
  state = {
    options: [true].concat(new Array(6).fill(false)),
    index: 0,
  }
  changeIt = (i) => {
    const array = new Array(7).fill(false);
    array[i] = true;
    this.setState({
      options: array,
      index: i,
    });
  }
  render() {
    return (
      <div>
        <div id="menu">
          {
            options.map((o, i) =>
              <div key={i}>
                <input id={o} type="radio" value={o} checked={this.state.options[i]} onChange={() => { this.changeIt(i); }} />
                <label htmlFor={o}>{o}</label>
              </div>
            )
          }
          <Map
            style={`mapbox://styles/mapbox/${options[this.state.index]}-v8`}
            zoom={13}
            center={[4.899, 52.372]}
          />
        </div>
      </div>
    );
  }


}
