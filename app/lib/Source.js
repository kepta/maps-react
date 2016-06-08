import React from 'react';
export default class Source extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    map: React.PropTypes.object,
    data: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    cluster: React.PropTypes.bool,
    clusterMaxZoom: React.PropTypes.number,
    clusterRadius: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    this.addSource(props);
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
      console.debug('updating data');
      return nextProps.map.getSource(nextProps.name).setData(nextProps.data);
    }
  }

  componentWillUnmount() {
    console.debug('removing', this.props.name);
    this.props.map.removeSource(this.state.name);
  }

  cloneChildren = () => React.Children.map(this.props.children,
   (child) => React.cloneElement(child, {
     _source: this.props.name,
     map: this.props.map,
   })
  );

  addSource(props) {
    props.map.addSource(props.name, {
      type: props.type,
      data: props.data,
      cluster: props.cluster,
      clusterMaxZoom: props.clusterMaxZoom,
      clusterRadius: props.clusterRadius,
    });
  }

  render() {
    return (
      <div>
        {this.props.name ? this.cloneChildren() : null}
      </div>
    );
  }
}
