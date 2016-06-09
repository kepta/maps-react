import React from 'react';
import { clean } from './helper';

export default class Map extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    center: React.PropTypes.array,
    onLoad: React.PropTypes.func,
    style: React.PropTypes.string,
    zoom: React.PropTypes.number,
    pitch: React.PropTypes.number,
    bearing: React.PropTypes.number,
    mapboxgl: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    center: [-77.0152, 38.8937],
    zoom: 16,
    pitch: 0,
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    onLoad: () => {},
  }
  state = {
    map: null,
  }
  componentDidMount() {
    const map = new this.props.mapboxgl.Map({
      container: 'map',
      style: this.props.style, // stylesheet location
      center: this.props.center,
      zoom: this.props.zoom,
      pitch: this.props.pitch,
    });
    map.on('load', () => {
      this.setState({
        map,
      });
      this.props.onLoad(map);
    });
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.map) {
      if (nextProps.style !== this.props.style) {
        this.state.map.setStyle(nextProps.style);
      }
    }
  }
  sendProps = () => {
    return React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       map: this.state.map,
     })
    );
  }
  render() {
    // console.log(this.state.map);
    return (
      <div>
        <div id="map" />
        {
          this.state.map ?
          this.sendProps()
        : null
        }
      </div>
    );
  }
}
