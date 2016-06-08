import React from 'react';
import Layer from './Layer';
const Symbol = ({ name, _source, filter, layout, map, sourceLayer, visibility }) => {
  return (
    <Layer
      name={name}
      _source={_source}
      type="symbol"
      map={map}
      style={{
        layout,
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
  layout: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  visibility: React.PropTypes.string,
  sourceLayer: React.PropTypes.string,
};

export default Symbol;

