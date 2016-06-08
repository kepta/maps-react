import React from 'react';
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
  static defaultProps = {
    visibility: 'visible',
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
  }
  componentWillUnmount() {
    this.props.map.removeLayer(this.props.name);
  }

  addLayer = (props) => {
    const obj = {
      ...props.style,
      id: props.name,
      source: props._source,
      type: props.type,
    };
    if (props.visibility === 'none') {
      obj.layout.visibility = 'none';
    } else {
      obj.layout.visibility = 'visible';
    }
    if (props.sourceLayer) {
      obj['source-layer'] = props.sourceLayer;
    }
    return props.map.addLayer(obj);
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
