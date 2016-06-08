import React from 'react';
export default class Source extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    map: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    this.props.map.addSource(this.props.name, {
      type: this.props.type,
      data: this.props.data,
    });
  }

  componentWillUpdate(nextProps) {
    if (this.props.name !== nextProps.name) {
      console.debug('removing', this.props.name);
      nextProps.map.removeSource(this.props.name);
      this.props.map.addSource(nextProps.name, {
        type: nextProps.type,
        data: nextProps.data,
      });
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

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       _source: this.props.name,
       map: this.props.map,
     })
    );
    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}
