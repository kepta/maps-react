'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      var map = new this.props.mapboxgl.Map({
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
  bearing: _react2.default.PropTypes.number,
  mapboxgl: _react2.default.PropTypes.object.isRequired
};
Map.defaultProps = {
  center: [-77.0152, 38.8937],
  zoom: 16,
  pitch: 0,
  style: 'mapbox://styles/mapbox/satellite-streets-v9',
  onLoad: function onLoad() {}
};
exports.default = Map;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQixHOzs7Ozs7Ozs7Ozs7OztpTUFtQm5CLEssR0FBUTtBQUNOLFdBQUs7QUFEQyxLLFFBeUJSLFMsR0FBWSxZQUFNO0FBQ2hCLGFBQU8sZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsTUFBSyxLQUFMLENBQVcsUUFBOUIsRUFDTixVQUFDLEtBQUQ7QUFBQSxlQUFXLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEI7QUFDbkMsZUFBSyxNQUFLLEtBQUwsQ0FBVztBQURtQixTQUExQixDQUFYO0FBQUEsT0FETSxDQUFQO0FBS0QsSzs7Ozs7d0NBNUJtQjtBQUFBOztBQUNsQixVQUFNLE1BQU0sSUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXhCLENBQTRCO0FBQ3RDLG1CQUFXLEtBRDJCO0FBRXRDLGVBQU8sS0FBSyxLQUFMLENBQVcsS0FGb0IsRTtBQUd0QyxnQkFBUSxLQUFLLEtBQUwsQ0FBVyxNQUhtQjtBQUl0QyxjQUFNLEtBQUssS0FBTCxDQUFXLElBSnFCO0FBS3RDLGVBQU8sS0FBSyxLQUFMLENBQVc7QUFMb0IsT0FBNUIsQ0FBWjtBQU9BLFVBQUksRUFBSixDQUFPLE1BQVAsRUFBZSxZQUFNO0FBQ25CLGVBQUssUUFBTCxDQUFjO0FBQ1o7QUFEWSxTQUFkO0FBR0EsZUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixHQUFsQjtBQUNELE9BTEQ7QUFNRDs7O3dDQUNtQixTLEVBQVcsUyxFQUFXO0FBQ3hDLFVBQUksVUFBVSxHQUFkLEVBQW1CO0FBQ2pCLFlBQUksVUFBVSxLQUFWLEtBQW9CLEtBQUssS0FBTCxDQUFXLEtBQW5DLEVBQTBDO0FBQ3hDLGVBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxRQUFmLENBQXdCLFVBQVUsS0FBbEM7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFRUTs7QUFFUCxhQUNFO0FBQUE7UUFBQTtRQUNFLHVDQUFLLElBQUcsS0FBUixHQURGO1FBR0ksS0FBSyxLQUFMLENBQVcsR0FBWCxHQUNBLEtBQUssU0FBTCxFQURBLEdBRUE7QUFMSixPQURGO0FBVUQ7Ozs7RUEvRDhCLGdCQUFNLFM7O0FBQWxCLEcsQ0FDWixTLEdBQVk7QUFDakIsWUFBVSxnQkFBTSxTQUFOLENBQWdCLE9BRFQ7QUFFakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLEtBRlA7QUFHakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLElBSFA7QUFJakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BSk47QUFLakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BTEw7QUFNakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BTk47QUFPakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCLE1BUFI7QUFRakIsWUFBVSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCO0FBUmhCLEM7QUFEQSxHLENBWVosWSxHQUFlO0FBQ3BCLFVBQVEsQ0FBQyxDQUFDLE9BQUYsRUFBVyxPQUFYLENBRFk7QUFFcEIsUUFBTSxFQUZjO0FBR3BCLFNBQU8sQ0FIYTtBQUlwQixTQUFPLDZDQUphO0FBS3BCLFVBQVEsa0JBQU0sQ0FBRTtBQUxJLEM7a0JBWkgsRyIsImZpbGUiOiJNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGNlbnRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uTG9hZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgem9vbTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBwaXRjaDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBiZWFyaW5nOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1hcGJveGdsOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjogWy03Ny4wMTUyLCAzOC44OTM3XSxcbiAgICB6b29tOiAxNixcbiAgICBwaXRjaDogMCxcbiAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXN0cmVldHMtdjknLFxuICAgIG9uTG9hZDogKCkgPT4ge30sXG4gIH1cbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG1hcCA9IG5ldyB0aGlzLnByb3BzLm1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6ICdtYXAnLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsIC8vIHN0eWxlc2hlZXQgbG9jYXRpb25cbiAgICAgIGNlbnRlcjogdGhpcy5wcm9wcy5jZW50ZXIsXG4gICAgICB6b29tOiB0aGlzLnByb3BzLnpvb20sXG4gICAgICBwaXRjaDogdGhpcy5wcm9wcy5waXRjaCxcbiAgICB9KTtcbiAgICBtYXAub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFwLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uTG9hZChtYXApO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAobmV4dFN0YXRlLm1hcCkge1xuICAgICAgaWYgKG5leHRQcm9wcy5zdHlsZSAhPT0gdGhpcy5wcm9wcy5zdHlsZSkge1xuICAgICAgICB0aGlzLnN0YXRlLm1hcC5zZXRTdHlsZShuZXh0UHJvcHMuc3R5bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZW5kUHJvcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAoY2hpbGQpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgIG1hcDogdGhpcy5zdGF0ZS5tYXAsXG4gICAgIH0pXG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5tYXApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwibWFwXCIgLz5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUubWFwID9cbiAgICAgICAgICB0aGlzLnNlbmRQcm9wcygpXG4gICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=