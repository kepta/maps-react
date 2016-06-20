import React from 'react';
import Layer from './Layer';
const Circle = ({ name, _source, filter, paint, map, sourceLayer, visibility }) =>
  <Layer
    type="circle"
    name={name}
    _source={_source}
    map={map}
    visibility={visibility}
    paint={paint}
    filter={filter}
    sourceLayer={sourceLayer}
  />;

Circle.propTypes = {
  name: React.PropTypes.string,
  _source: React.PropTypes.string,
  sourceLayer: React.PropTypes.string,
  visibility: React.PropTypes.string,
  map: React.PropTypes.object,
  filter: React.PropTypes.array,
  paint: React.PropTypes.shape({
    'circle-radius': React.PropTypes.number,
    'circle-color': React.PropTypes.string,
    'circle-blur': React.PropTypes.number,
    'circle-opacity': React.PropTypes.number,
    'circle-translate': React.PropTypes.array,
    'circle-translate-anchor': React.PropTypes.oneOf(['map', 'viewport']),
  }),
};

export default Circle;
