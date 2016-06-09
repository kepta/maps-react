'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GL_TOKEN = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import mapboxgl from 'mapbox-gl';


var GL_TOKEN = exports.GL_TOKEN = 'pk.eyJ1Ijoia3VzaGFuMjAyMCIsImEiOiJjaWw5dG56enEwMGV6dWVsemxwMWw5NnM5In0.BbEUL1-qRFSHt7yHMorwew';

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Map)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      map: null
    }, _this.sendProps = function () {
      return _react2.default.Children.map(_this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
          map: _this.state.map
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Map, [{
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { id: 'map' }),
        this.state.map ? this.sendProps() : null
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

Map.propTypes = {
  children: _react2.default.PropTypes.element,
  center: _react2.default.PropTypes.array,
  onLoad: _react2.default.PropTypes.func,
  style: _react2.default.PropTypes.string,
  zoom: _react2.default.PropTypes.number,
  pitch: _react2.default.PropTypes.number,
  bearing: _react2.default.PropTypes.number
};
Map.defaultProps = {
  center: [-77.0152, 38.8937],
  zoom: 16,
  pitch: 0,
  style: 'mapbox://styles/mapbox/satellite-streets-v9',
  onLoad: function onLoad() {}
};
exports.default = Map;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNPLElBQU0sOEJBQVcsK0ZBQWpCOztJQUVjLEc7Ozs7Ozs7Ozs7Ozs7O2lNQWtCbkIsSyxHQUFRO0FBQ04sV0FBSztBQURDLEssUUEwQlIsUyxHQUFZLFlBQU07QUFDaEIsYUFBTyxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixNQUFLLEtBQUwsQ0FBVyxRQUE5QixFQUNOLFVBQUMsS0FBRDtBQUFBLGVBQVcsZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUEwQjtBQUNuQyxlQUFLLE1BQUssS0FBTCxDQUFXO0FBRG1CLFNBQTFCLENBQVg7QUFBQSxPQURNLENBQVA7QUFLRCxLOzs7Ozt3Q0E3Qm1CO0FBQUE7O0FBQ2xCLGVBQVMsV0FBVCxHQUF1QixRQUF2QjtBQUNBLFVBQU0sTUFBTSxJQUFJLFNBQVMsR0FBYixDQUFpQjtBQUMzQixtQkFBVyxLQURnQjtBQUUzQixlQUFPLEtBQUssS0FBTCxDQUFXLEtBRlMsRTtBQUczQixnQkFBUSxLQUFLLEtBQUwsQ0FBVyxNQUhRO0FBSTNCLGNBQU0sS0FBSyxLQUFMLENBQVcsSUFKVTtBQUszQixlQUFPLEtBQUssS0FBTCxDQUFXO0FBTFMsT0FBakIsQ0FBWjtBQU9BLFVBQUksRUFBSixDQUFPLE1BQVAsRUFBZSxZQUFNO0FBQ25CLGVBQUssUUFBTCxDQUFjO0FBQ1o7QUFEWSxTQUFkO0FBR0EsZUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixHQUFsQjtBQUNELE9BTEQ7QUFNRDs7O3dDQUNtQixTLEVBQVcsUyxFQUFXO0FBQ3hDLFVBQUksVUFBVSxHQUFkLEVBQW1CO0FBQ2pCLFlBQUksVUFBVSxLQUFWLEtBQW9CLEtBQUssS0FBTCxDQUFXLEtBQW5DLEVBQTBDO0FBQ3hDLGVBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxRQUFmLENBQXdCLFVBQVUsS0FBbEM7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFRUTs7QUFFUCxhQUNFO0FBQUE7UUFBQTtRQUNFLHVDQUFLLElBQUcsS0FBUixHQURGO1FBR0ksS0FBSyxLQUFMLENBQVcsR0FBWCxHQUNBLEtBQUssU0FBTCxFQURBLEdBRUE7QUFMSixPQURGO0FBVUQ7Ozs7RUEvRDhCLGdCQUFNLFM7O0FBQWxCLEcsQ0FDWixTLEdBQVk7QUFDakIsWUFBVSxnQkFBTSxTQUFOLENBQWdCLE9BRFQ7QUFFakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLEtBRlA7QUFHakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLElBSFA7QUFJakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BSk47QUFLakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BTEw7QUFNakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BTk47QUFPakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCO0FBUFIsQztBQURBLEcsQ0FXWixZLEdBQWU7QUFDcEIsVUFBUSxDQUFDLENBQUMsT0FBRixFQUFXLE9BQVgsQ0FEWTtBQUVwQixRQUFNLEVBRmM7QUFHcEIsU0FBTyxDQUhhO0FBSXBCLFNBQU8sNkNBSmE7QUFLcEIsVUFBUSxrQkFBTSxDQUFFO0FBTEksQztrQkFYSCxHIiwiZmlsZSI6Ik1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSAnLi9oZWxwZXInO1xuZXhwb3J0IGNvbnN0IEdMX1RPS0VOID0gJ3BrLmV5SjFJam9pYTNWemFHRnVNakF5TUNJc0ltRWlPaUpqYVd3NWRHNTZlbkV3TUdWNmRXVnNlbXh3TVd3NU5uTTVJbjAuQmJFVUwxLXFSRlNIdDd5SE1vcndldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGNlbnRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uTG9hZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgem9vbTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBwaXRjaDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBiZWFyaW5nOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IFstNzcuMDE1MiwgMzguODkzN10sXG4gICAgem9vbTogMTYsXG4gICAgcGl0Y2g6IDAsXG4gICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3NhdGVsbGl0ZS1zdHJlZXRzLXY5JyxcbiAgICBvbkxvYWQ6ICgpID0+IHt9LFxuICB9XG4gIHN0YXRlID0ge1xuICAgIG1hcDogbnVsbCxcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IEdMX1RPS0VOO1xuICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiAnbWFwJyxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLCAvLyBzdHlsZXNoZWV0IGxvY2F0aW9uXG4gICAgICBjZW50ZXI6IHRoaXMucHJvcHMuY2VudGVyLFxuICAgICAgem9vbTogdGhpcy5wcm9wcy56b29tLFxuICAgICAgcGl0Y2g6IHRoaXMucHJvcHMucGl0Y2gsXG4gICAgfSk7XG4gICAgbWFwLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkxvYWQobWFwKTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKG5leHRTdGF0ZS5tYXApIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc3R5bGUgIT09IHRoaXMucHJvcHMuc3R5bGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXAuc2V0U3R5bGUobmV4dFByb3BzLnN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2VuZFByb3BzID0gKCkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgKGNoaWxkKSA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICBtYXA6IHRoaXMuc3RhdGUubWFwLFxuICAgICB9KVxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWFwKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiIC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLm1hcCA/XG4gICAgICAgICAgdGhpcy5zZW5kUHJvcHMoKVxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19