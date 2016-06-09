
import React from 'react';
import Layer from './Layer';
const Line = ({ name, _source, filter, paint, map, sourceLayer, visibility, layout }) =>
  <Layer
    type="line"
    name={name}
    _source={_source}
    map={map}
    visibility={visibility}
    style={{
      layout,
      paint,
    }}
    filter={filter}
    sourceLayer={sourceLayer}
  />;

Line.propTypes = {
  name: React.PropTypes.string,
  _source: React.PropTypes.string,
  sourceLayer: React.PropTypes.string,
  visibility: React.PropTypes.string,
  map: React.PropTypes.object,
  filter: React.PropTypes.array,
  paint: React.PropTypes.object.isRequired,
  layout: React.PropTypes.object.isRequired,
};

export default Line;

