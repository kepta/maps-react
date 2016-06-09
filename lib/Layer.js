import React from 'react';
import { clean } from './helper';

export default class Layer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    _source: React.PropTypes.string,
    map: React.PropTypes.object,
    style: React.PropTypes.object.isRequired,
    filter: React.PropTypes.array,
    type: React.PropTypes.string.isRequired,
    sourceLayer: React.PropTypes.string,
    visibility: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.layer = this.addLayer(props);
  }
  componentWillUpdate(nextProps) {
    if (nextProps.name !== this.props.name && nextProps._source) {
      console.debug('removing layer', this.props.name);
      nextProps.map.removeLayer(this.props.name);
      this.layer = this.addLayer(nextProps);
    }
    if (this.props.visibility !== nextProps.visibility) {
      console.debug('changing visibility');
      nextProps.map.setLayoutProperty(nextProps.name, 'visibility', nextProps.visibility);
    }
  }
  componentWillUnmount() {
    this.props.map.removeLayer(this.props.name);
  }
  addLayer = (props) => {
    const obj = {
      ...clean(props.style),
      id: props.name,
      source: props._source,
      type: props.type,
      'source-layer': props.sourceLayer,
    };
    if (props.visibility) {
      if (!obj.layout) obj.layout = {};
      obj.layout.visibility = props.visibility;
    }
    return props.map.addLayer(clean(obj));
  }
  render() {
    if (this.layer && this.props.filter) {
      this.props.map.setFilter(this.props.name, this.props.filter);
    }
    return (
      null
    );
  }
}
