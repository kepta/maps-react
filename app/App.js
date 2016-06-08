import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './redux/actions';
// import Map from './lib/Map';
// import mp from 'mapbox-gl';
export const GL_TOKEN = 'pk.eyJ1Ijoia3VzaGFuMjAyMCIsImEiOiJjaWw5dG56enEwMGV6dWVsemxwMWw5NnM5In0.BbEUL1-qRFSHt7yHMorwew';

function mapStateToProps(state) {
  return { ...state.reducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

mapDispatchToProps();
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    sample: React.PropTypes.object,
    actions: React.PropTypes.object,
  }
  state = {
    kuch: null,
  }
  componentDidMount() {
    mp.accessToken = GL_TOKEN;
    const x = new mp.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v9', // stylesheet location
      center: [-77.0152, 38.8937], // starting position
      zoom: 16,
      pitch: 30,
    });

  }
  render() {

    return (
      <div style={{ width: '100vw', height: '100vh' }} >
                <div id="map" />
                </div>
    );
  }
}
