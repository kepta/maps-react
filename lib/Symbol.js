import React from 'react';
import Layer from './Layer';
const Symbol = ({ name, _source, filter, layout, map, sourceLayer, visibility, paint }) => {
  return (
    <Layer
      name={name}
      _source={_source}
      type="symbol"
      map={map}
      layout={layout}
      paint={paint}
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
  paint: React.PropTypes.shape({
    'icon-opacity': React.PropTypes.number,
    'icon-color': React.PropTypes.string,
    'icon-halo-color': React.PropTypes.string,
  }),
};

export default Symbol;
