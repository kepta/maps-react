import React from 'react';
import { clean } from './helper';
export default class Source extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    map: React.PropTypes.object,
    data: React.PropTypes.object,
    url: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    cluster: React.PropTypes.bool,
    clusterMaxZoom: React.PropTypes.number,
    clusterRadius: React.PropTypes.number,
    onClick: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    this.addSource(props);
    if (props.onClick) {
      props.map.on('click', this.onClick);
    }
  }

  onClick = (e) => {
    this.props.onClick(e, this.queryRenderedFeatures, this.props.map);
  }

  queryRenderedFeatures = (e) => {
    console.log(React.Children.map(this.props.children, child => child.props.name))
    return this.props.map.queryRenderedFeatures(e, {
      layers: React.Children.map(this.props.children, child => child.props.name),
    });
  }
  componentWillUpdate(nextProps) {
    if (this.props.name !== nextProps.name) {
      console.debug('removing', this.props.name);
      nextProps.map.removeSource(this.props.name);
      this.addSource(nextProps);
      return this.setState({
        name: nextProps.name,
      });
    }
    if (this.props.data !== nextProps.data) {
      return nextProps.map.getSource(nextProps.name).setData(nextProps.data);
    }
  }

  componentWillUnmount() {
    console.debug('removing', this.props.name);
    if (this.props.onClick) { this.props.map.off('click', this.onClick); }
    this.props.map.removeSource(this.state.name);
  }

  cloneChildren = () => React.Children.map(this.props.children,
   (child) => React.cloneElement(child, {
     _source: this.props.name,
     map: this.props.map,
   })
  );

  addSource(props) {
    const obj = {
      type: props.type,
      url: props.url,
      data: props.data,
      cluster: props.cluster,
      clusterMaxZoom: props.clusterMaxZoom,
      clusterRadius: props.clusterRadius,
    };
    props.map.addSource(props.name, clean(obj));
  }
  render() {
    return (
      <div>
        {this.props.name ? this.cloneChildren() : null}
      </div>
    );
  }
}
