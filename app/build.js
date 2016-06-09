'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function clean(argObj) {
  var obj = argObj;
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'undefined') {
      delete obj[key];
    }
  });
  return obj;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var GL_TOKEN = 'pk.eyJ1Ijoia3VzaGFuMjAyMCIsImEiOiJjaWw5dG56enEwMGV6dWVsemxwMWw5NnM5In0.BbEUL1-qRFSHt7yHMorwew';

var Map = function (_React$Component) {
  inherits(Map, _React$Component);

  function Map() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    classCallCheck(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Map)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      map: null
    }, _this.sendProps = function () {
      return React.Children.map(_this.props.children, function (child) {
        return React.cloneElement(child, {
          map: _this.state.map
        });
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      mapboxgl.accessToken = GL_TOKEN;
      var map = new mapboxgl.Map({
        container: 'map',
        style: this.props.style, // stylesheet location
        center: this.props.center,
        zoom: this.props.zoom,
        pitch: this.props.pitch
      });
      map.on('load', function () {
        _this2.setState({
          map: map
        });
        _this2.props.onLoad(map);
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.map) {
        if (nextProps.style !== this.props.style) {
          this.state.map.setStyle(nextProps.style);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.map);
      return React.createElement(
        'div',
        null,
        React.createElement('div', { id: 'map' }),
        this.state.map ? this.sendProps() : null
      );
    }
  }]);
  return Map;
}(React.Component);

Map.propTypes = {
  children: React.PropTypes.element,
  center: React.PropTypes.array,
  onLoad: React.PropTypes.func,
  style: React.PropTypes.string,
  zoom: React.PropTypes.number,
  pitch: React.PropTypes.number,
  bearing: React.PropTypes.number
};
Map.defaultProps = {
  center: [-77.0152, 38.8937],
  zoom: 16,
  pitch: 0,
  style: 'mapbox://styles/mapbox/satellite-streets-v9',
  onLoad: function onLoad() {}
};

var Layer = function (_React$Component) {
  inherits(Layer, _React$Component);

  function Layer(props) {
    classCallCheck(this, Layer);

    var _this = possibleConstructorReturn(this, Object.getPrototypeOf(Layer).call(this, props));

    _initialiseProps.call(_this);

    _this.layer = _this.addLayer(props);
    return _this;
  }

  createClass(Layer, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
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
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.map.removeLayer(this.props.name);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.layer && this.props.filter) {
        this.props.map.setFilter(this.props.name, this.props.filter);
      }
      return null;
    }
  }]);
  return Layer;
}(React.Component);

Layer.propTypes = {
  name: React.PropTypes.string.isRequired,
  _source: React.PropTypes.string,
  map: React.PropTypes.object,
  style: React.PropTypes.object.isRequired,
  filter: React.PropTypes.array,
  type: React.PropTypes.string.isRequired,
  sourceLayer: React.PropTypes.string,
  visibility: React.PropTypes.string
};

var _initialiseProps = function _initialiseProps() {
  this.addLayer = function (props) {
    var obj = extends({}, props.style, {
      id: props.name,
      source: props._source,
      type: props.type,
      'source-layer': props.sourceLayer
    });
    if (props.visibility) {
      if (!obj.layout) obj.layout = {};
      obj.layout.visibility = props.visibility;
    }
    return props.map.addLayer(clean(obj));
  };
};

var Circle = function Circle(_ref) {
  var name = _ref.name;
  var _source = _ref._source;
  var filter = _ref.filter;
  var paint = _ref.paint;
  var map = _ref.map;
  var sourceLayer = _ref.sourceLayer;
  var visibility = _ref.visibility;
  return React.createElement(Layer, {
    type: 'circle',
    name: name,
    _source: _source,
    map: map,
    visibility: visibility,
    style: {
      paint: paint
    },
    filter: filter,
    sourceLayer: sourceLayer
  });
};

Circle.propTypes = {
  name: React.PropTypes.string,
  _source: React.PropTypes.string,
  sourceLayer: React.PropTypes.string,
  visibility: React.PropTypes.string,
  map: React.PropTypes.object,
  filter: React.PropTypes.array,
  paint: React.PropTypes.object.isRequired
};

var Source = function (_React$Component) {
  inherits(Source, _React$Component);

  function Source(props) {
    classCallCheck(this, Source);

    var _this = possibleConstructorReturn(this, Object.getPrototypeOf(Source).call(this, props));

    _this.onClick = function (e) {
      _this.props.onClick(e, _this.queryRenderedFeatures, _this.props.map);
    };

    _this.queryRenderedFeatures = function (e) {
      console.log(React.Children.map(_this.props.children, function (child) {
        return child.props.name;
      }));
      return _this.props.map.queryRenderedFeatures(e, {
        layers: React.Children.map(_this.props.children, function (child) {
          return child.props.name;
        })
      });
    };

    _this.cloneChildren = function () {
      return React.Children.map(_this.props.children, function (child) {
        return React.cloneElement(child, {
          _source: _this.props.name,
          map: _this.props.map
        });
      });
    };

    _this.state = {
      name: _this.props.name
    };
    _this.addSource(props);
    if (props.onClick) {
      props.map.on('click', _this.onClick);
    }
    return _this;
  }

  createClass(Source, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.props.name !== nextProps.name) {
        console.debug('removing', this.props.name);
        nextProps.map.removeSource(this.props.name);
        this.addSource(nextProps);
        return this.setState({
          name: nextProps.name
        });
      }
      if (this.props.data !== nextProps.data) {
        return nextProps.map.getSource(nextProps.name).setData(nextProps.data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.debug('removing', this.props.name);
      if (this.props.onClick) {
        this.props.map.off('click', this.onClick);
      }
      this.props.map.removeSource(this.state.name);
    }
  }, {
    key: 'addSource',
    value: function addSource(props) {
      var obj = {
        type: props.type,
        url: props.url,
        data: props.data,
        cluster: props.cluster,
        clusterMaxZoom: props.clusterMaxZoom,
        clusterRadius: props.clusterRadius
      };
      props.map.addSource(props.name, clean(obj));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.name ? this.cloneChildren() : null
      );
    }
  }]);
  return Source;
}(React.Component);

Source.propTypes = {
  name: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  map: React.PropTypes.object,
  data: React.PropTypes.object,
  url: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  cluster: React.PropTypes.bool,
  clusterMaxZoom: React.PropTypes.number,
  clusterRadius: React.PropTypes.number,
  onClick: React.PropTypes.func
};

var _Symbol = function _Symbol(_ref) {
  var name = _ref.name;
  var _source = _ref._source;
  var filter = _ref.filter;
  var layout = _ref.layout;
  var map = _ref.map;
  var sourceLayer = _ref.sourceLayer;
  var visibility = _ref.visibility;

  return React.createElement(Layer, {
    name: name,
    _source: _source,
    type: 'symbol',
    map: map,
    style: {
      layout: layout
    },
    filter: filter,
    sourceLayer: sourceLayer,
    visibility: visibility
  });
};

_Symbol.propTypes = {
  name: React.PropTypes.string,
  _source: React.PropTypes.string,
  map: React.PropTypes.object,
  filter: React.PropTypes.array,
  layout: React.PropTypes.object.isRequired,
  visibility: React.PropTypes.string,
  sourceLayer: React.PropTypes.string
};

var Line = function Line(_ref) {
  var name = _ref.name;
  var _source = _ref._source;
  var filter = _ref.filter;
  var paint = _ref.paint;
  var map = _ref.map;
  var sourceLayer = _ref.sourceLayer;
  var visibility = _ref.visibility;
  var layout = _ref.layout;
  return React.createElement(Layer, {
    type: 'line',
    name: name,
    _source: _source,
    map: map,
    visibility: visibility,
    style: {
      layout: layout,
      paint: paint
    },
    filter: filter,
    sourceLayer: sourceLayer
  });
};

Line.propTypes = {
  name: React.PropTypes.string,
  _source: React.PropTypes.string,
  sourceLayer: React.PropTypes.string,
  visibility: React.PropTypes.string,
  map: React.PropTypes.object,
  filter: React.PropTypes.array,
  paint: React.PropTypes.object.isRequired,
  layout: React.PropTypes.object.isRequired
};

exports.Map = Map;
exports.Circle = Circle;
exports.Layer = Layer;
exports.Line = Line;
exports.Source = Source;
exports.Symbol = _Symbol;