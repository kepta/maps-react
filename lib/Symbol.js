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
  visibility: React.PropTypes.oneOf(['visible', 'none']),
  sourceLayer: React.PropTypes.string,
  layout: React.PropTypes.shape({
    'symbol-placement': React.PropTypes.oneOf(['point', 'line']),
    'symbol-spacing': React.PropTypes.number,
    'symbol-avoid-edges': React.PropTypes.bool,
    'icon-allow-overlap': React.PropTypes.bool,
    'icon-ignore-placement': React.PropTypes.bool,
    'icon-optional': React.PropTypes.bool,
    'icon-rotation-alignment': React.PropTypes.oneOf(['map', 'viewport']),
    'icon-size': React.PropTypes.number,
    'icon-text-fit': React.PropTypes.oneOf(['none', 'both', 'width', 'height']),
    'icon-text-fit-padding': React.PropTypes.array,
    'icon-image': React.PropTypes.string,
    'icon-rotate': React.PropTypes.number,
    'icon-padding': React.PropTypes.number,
    'icon-keep-upright': React.PropTypes.bool,
    'icon-offset': React.PropTypes.array,
    'text-pitch-alignment': React.PropTypes.oneOf(['map', 'viewport']),
    'text-rotation-alignment': React.PropTypes.oneOf(['map', 'viewport']),
    'text-field': React.PropTypes.string,
    'text-font': React.PropTypes.array,
    'text-size': React.PropTypes.number,
    'text-max-width': React.PropTypes.number,
    'text-line-height': React.PropTypes.number,
    'text-letter-spacing': React.PropTypes.number,
    'text-justify': React.PropTypes.oneOf(['left', 'center', 'right']),
    'text-anchor': React.PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
    'text-max-angle': React.PropTypes.number,
    'text-rotate': React.PropTypes.number,
    'text-padding': React.PropTypes.number,
    'text-keep-upright': React.PropTypes.number,
    'text-transform': React.PropTypes.oneOf(['none', 'uppercase', 'lowercase']),
    'text-offset': React.PropTypes.array,
    'text-allow-overlap': React.PropTypes.bool,
    'text-ignore-placement': React.PropTypes.bool,
    'text-optional': React.PropTypes.bool,
  }),
  paint: React.PropTypes.shape({
    'icon-opacity': React.PropTypes.number,
    'icon-color': React.PropTypes.string,
    'icon-halo-color': React.PropTypes.string,
    'icon-halo-width': React.PropTypes.number,
    'icon-halo-blur': React.PropTypes.number,
    'icon-translate': React.PropTypes.array,
    'icon-translate-anchor': React.PropTypes.oneOf(['map', 'viewport']),
    'text-opacity': React.PropTypes.number,
    'text-color': React.PropTypes.string,
    'text-halo-color': React.PropTypes.string,
    'text-halo-width': React.PropTypes.number,
    'text-halo-blur': React.PropTypes.number,
    'text-translate': React.PropTypes.array,
    'text-translate-anchor': React.PropTypes.oneOf(['map', 'viewport']),
  }),
};

export default Symbol;
