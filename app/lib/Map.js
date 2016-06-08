import React from 'react';

export default class Source extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    center: React.PropTypes.array,
    onLoad: React.PropTypes.func,
  }

  static defaultProps = {
    center: [-77.0152, 38.8937],
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   loaded: false,
    //   map: new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/satellite-streets-v9', // stylesheet location
    //     center: props.center, // starting position
    //     zoom: 16,
    //     pitch: 30,
    //   }),
    // };
    // this.state.map.on('load', () => {
    //   this.setState({ loaded: true });
    //   if (this.props.onLoad) this.props.onLoad();
    // });
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUpdate() {
    
  }
  componentWillUnmount() {
  }
  componentDidMount() {
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       _map: this.state.map,
       _loaded: this.state.loaded,
     })
    );
    return (
      <div>
        <div id="map" />
        <div>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}
