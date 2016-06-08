import React from 'react';
import mapboxgl from 'mapbox-gl';
export const GL_TOKEN = 'pk.eyJ1Ijoia3VzaGFuMjAyMCIsImEiOiJjaWw5dG56enEwMGV6dWVsemxwMWw5NnM5In0.BbEUL1-qRFSHt7yHMorwew';

export default class Map extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    center: React.PropTypes.array,
    onLoad: React.PropTypes.func,
    style: React.PropTypes.string,
    zoom: React.PropTypes.number,
    pitch: React.PropTypes.number,
  }

  static defaultProps = {
    center: [-77.0152, 38.8937],
    zoom: 16,
    pitch: 0,
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
  }
  state = {
    map: null,
  }
  componentDidMount() {
    mapboxgl.accessToken = GL_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: this.props.style, // stylesheet location
      center: this.props.center,
      zoom: this.props.zoom,
      pitch: this.props.pitch,
    });
    map.on('load', () => this.setState({
      map,
    }));
  }
  componentWillUpdate(nextProps) {
    if (nextProps.style !== this.props.style) {

      this.state.map.setStyle(nextProps.style);
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
