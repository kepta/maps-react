'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer = function (_React$Component) {
  _inherits(Layer, _React$Component);

  function Layer(props) {
    _classCallCheck(this, Layer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layer).call(this, props));

    _initialiseProps.call(_this);

    _this.layer = _this.addLayer(props);
    return _this;
  }

  _createClass(Layer, [{
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
}(_react2.default.Component);

Layer.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  _source: _react2.default.PropTypes.string,
  map: _react2.default.PropTypes.object,
  style: _react2.default.PropTypes.object.isRequired,
  filter: _react2.default.PropTypes.array,
  type: _react2.default.PropTypes.string.isRequired,
  sourceLayer: _react2.default.PropTypes.string,
  visibility: _react2.default.PropTypes.string
};

var _initialiseProps = function _initialiseProps() {
  this.addLayer = function (props) {
    var obj = _extends({}, props.style, {
      id: props.name,
      source: props._source,
      type: props.type,
      'source-layer': props.sourceLayer
    });
    if (props.visibility) {
      if (!obj.layout) obj.layout = {};
      obj.layout.visibility = props.visibility;
    }
    return props.map.addLayer((0, _helper.clean)(obj));
  };
};

exports.default = Layer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvTGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBWW5CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUFBOztBQUVqQixVQUFLLEtBQUwsR0FBYSxNQUFLLFFBQUwsQ0FBYyxLQUFkLENBQWI7QUFGaUI7QUFHbEI7Ozs7d0NBQ21CLFMsRUFBVztBQUM3QixVQUFJLFVBQVUsSUFBVixLQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUE5QixJQUFzQyxVQUFVLE9BQXBELEVBQTZEO0FBQzNELGdCQUFRLEtBQVIsQ0FBYyxnQkFBZCxFQUFnQyxLQUFLLEtBQUwsQ0FBVyxJQUEzQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxXQUFkLENBQTBCLEtBQUssS0FBTCxDQUFXLElBQXJDO0FBQ0EsYUFBSyxLQUFMLEdBQWEsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUFiO0FBQ0Q7QUFDRCxVQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsS0FBMEIsVUFBVSxVQUF4QyxFQUFvRDtBQUNsRCxnQkFBUSxLQUFSLENBQWMscUJBQWQ7QUFDQSxrQkFBVSxHQUFWLENBQWMsaUJBQWQsQ0FBZ0MsVUFBVSxJQUExQyxFQUFnRCxZQUFoRCxFQUE4RCxVQUFVLFVBQXhFO0FBQ0Q7QUFDRjs7OzJDQUNzQjtBQUNyQixXQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsV0FBZixDQUEyQixLQUFLLEtBQUwsQ0FBVyxJQUF0QztBQUNEOzs7NkJBZVE7QUFDUCxVQUFJLEtBQUssS0FBTCxJQUFjLEtBQUssS0FBTCxDQUFXLE1BQTdCLEVBQXFDO0FBQ25DLGFBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxTQUFmLENBQXlCLEtBQUssS0FBTCxDQUFXLElBQXBDLEVBQTBDLEtBQUssS0FBTCxDQUFXLE1BQXJEO0FBQ0Q7QUFDRCxhQUNFLElBREY7QUFHRDs7OztFQW5EZ0MsZ0JBQU0sUzs7QUFBcEIsSyxDQUNaLFMsR0FBWTtBQUNqQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEWjtBQUVqQixXQUFTLGdCQUFNLFNBQU4sQ0FBZ0IsTUFGUjtBQUdqQixPQUFLLGdCQUFNLFNBQU4sQ0FBZ0IsTUFISjtBQUlqQixTQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFKYjtBQUtqQixVQUFRLGdCQUFNLFNBQU4sQ0FBZ0IsS0FMUDtBQU1qQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFOWjtBQU9qQixlQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsTUFQWjtBQVFqQixjQUFZLGdCQUFNLFNBQU4sQ0FBZ0I7QUFSWCxDOzs7T0E2Qm5CLFEsR0FBVyxVQUFDLEtBQUQsRUFBVztBQUNwQixRQUFNLG1CQUNELE1BQU0sS0FETDtBQUVKLFVBQUksTUFBTSxJQUZOO0FBR0osY0FBUSxNQUFNLE9BSFY7QUFJSixZQUFNLE1BQU0sSUFKUjtBQUtKLHNCQUFnQixNQUFNO0FBTGxCLE1BQU47QUFPQSxRQUFJLE1BQU0sVUFBVixFQUFzQjtBQUNwQixVQUFJLENBQUMsSUFBSSxNQUFULEVBQWlCLElBQUksTUFBSixHQUFhLEVBQWI7QUFDakIsVUFBSSxNQUFKLENBQVcsVUFBWCxHQUF3QixNQUFNLFVBQTlCO0FBQ0Q7QUFDRCxXQUFPLE1BQU0sR0FBTixDQUFVLFFBQVYsQ0FBbUIsbUJBQU0sR0FBTixDQUFuQixDQUFQO0FBQ0QsRzs7O2tCQTNDa0IsSyIsImZpbGUiOiJMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBfc291cmNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1hcDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzb3VyY2VMYXllcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2aXNpYmlsaXR5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5sYXllciA9IHRoaXMuYWRkTGF5ZXIocHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUgJiYgbmV4dFByb3BzLl9zb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ3JlbW92aW5nIGxheWVyJywgdGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIG5leHRQcm9wcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmFkZExheWVyKG5leHRQcm9wcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnZpc2liaWxpdHkgIT09IG5leHRQcm9wcy52aXNpYmlsaXR5KSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdjaGFuZ2luZyB2aXNpYmlsaXR5Jyk7XG4gICAgICBuZXh0UHJvcHMubWFwLnNldExheW91dFByb3BlcnR5KG5leHRQcm9wcy5uYW1lLCAndmlzaWJpbGl0eScsIG5leHRQcm9wcy52aXNpYmlsaXR5KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5wcm9wcy5uYW1lKTtcbiAgfVxuICBhZGRMYXllciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIC4uLnByb3BzLnN0eWxlLFxuICAgICAgaWQ6IHByb3BzLm5hbWUsXG4gICAgICBzb3VyY2U6IHByb3BzLl9zb3VyY2UsXG4gICAgICB0eXBlOiBwcm9wcy50eXBlLFxuICAgICAgJ3NvdXJjZS1sYXllcic6IHByb3BzLnNvdXJjZUxheWVyLFxuICAgIH07XG4gICAgaWYgKHByb3BzLnZpc2liaWxpdHkpIHtcbiAgICAgIGlmICghb2JqLmxheW91dCkgb2JqLmxheW91dCA9IHt9O1xuICAgICAgb2JqLmxheW91dC52aXNpYmlsaXR5ID0gcHJvcHMudmlzaWJpbGl0eTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BzLm1hcC5hZGRMYXllcihjbGVhbihvYmopKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIgJiYgdGhpcy5wcm9wcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMubWFwLnNldEZpbHRlcih0aGlzLnByb3BzLm5hbWUsIHRoaXMucHJvcHMuZmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG59XG4iXX0=