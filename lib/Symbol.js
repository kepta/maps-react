import React from 'react';
import Layer from './Layer';
const Symbol = ({ name, _source, filter, layout, map, sourceLayer, visibility, style, paint }) => {
  return (
    <Layer
      name={name}
      _source={_source}
      type="symbol"
      map={map}
      style={{
        ...style,
        layout,
        paint,
      }}
      filter={filter}
      sourceLayer={sourceLayer}
      visibility={visibility}
    />
  );
};

Symbol.propTypes = {
  name: React.PropTypes.string,
  _source: React.PropTypes.string,
  map: React.PropTypes.object,
  filter: React.PropTypes.array,
  layout: React.PropTypes.object,
  visibility: React.PropTypes.string,
  sourceLayer: React.PropTypes.string,
  style: React.PropTypes.object,
  paint: React.PropTypes.object,
};

export default Symbol;

