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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9NYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLEc7Ozs7Ozs7Ozs7Ozs7O2lNQW1CbkIsSyxHQUFRO0FBQ04sV0FBSztBQURDLEssUUF5QlIsUyxHQUFZLFlBQU07QUFDaEIsYUFBTyxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixNQUFLLEtBQUwsQ0FBVyxRQUE5QixFQUNOLFVBQUMsS0FBRDtBQUFBLGVBQVcsZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUEwQjtBQUNuQyxlQUFLLE1BQUssS0FBTCxDQUFXO0FBRG1CLFNBQTFCLENBQVg7QUFBQSxPQURNLENBQVA7QUFLRCxLOzs7Ozt3Q0E1Qm1CO0FBQUE7O0FBQ2xCLFVBQU0sTUFBTSxJQUFJLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsR0FBeEIsQ0FBNEI7QUFDdEMsbUJBQVcsS0FEMkI7QUFFdEMsZUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUZvQixFO0FBR3RDLGdCQUFRLEtBQUssS0FBTCxDQUFXLE1BSG1CO0FBSXRDLGNBQU0sS0FBSyxLQUFMLENBQVcsSUFKcUI7QUFLdEMsZUFBTyxLQUFLLEtBQUwsQ0FBVztBQUxvQixPQUE1QixDQUFaO0FBT0EsVUFBSSxFQUFKLENBQU8sTUFBUCxFQUFlLFlBQU07QUFDbkIsZUFBSyxRQUFMLENBQWM7QUFDWjtBQURZLFNBQWQ7QUFHQSxlQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEdBQWxCO0FBQ0QsT0FMRDtBQU1EOzs7d0NBQ21CLFMsRUFBVyxTLEVBQVc7QUFDeEMsVUFBSSxVQUFVLEdBQWQsRUFBbUI7QUFDakIsWUFBSSxVQUFVLEtBQVYsS0FBb0IsS0FBSyxLQUFMLENBQVcsS0FBbkMsRUFBMEM7QUFDeEMsZUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLFFBQWYsQ0FBd0IsVUFBVSxLQUFsQztBQUNEO0FBQ0Y7QUFDRjs7OzZCQVFROztBQUVQLGFBQ0U7QUFBQTtRQUFBO1FBQ0UsdUNBQUssSUFBRyxLQUFSLEdBREY7UUFHSSxLQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQ0EsS0FBSyxTQUFMLEVBREEsR0FFQTtBQUxKLE9BREY7QUFVRDs7OztFQS9EOEIsZ0JBQU0sUzs7QUFBbEIsRyxDQUNaLFMsR0FBWTtBQUNqQixZQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsT0FEVDtBQUVqQixVQUFRLGdCQUFNLFNBQU4sQ0FBZ0IsS0FGUDtBQUdqQixVQUFRLGdCQUFNLFNBQU4sQ0FBZ0IsSUFIUDtBQUlqQixTQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFKTjtBQUtqQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFMTDtBQU1qQixTQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFOTjtBQU9qQixXQUFTLGdCQUFNLFNBQU4sQ0FBZ0IsTUFQUjtBQVFqQixZQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUI7QUFSaEIsQztBQURBLEcsQ0FZWixZLEdBQWU7QUFDcEIsVUFBUSxDQUFDLENBQUMsT0FBRixFQUFXLE9BQVgsQ0FEWTtBQUVwQixRQUFNLEVBRmM7QUFHcEIsU0FBTyxDQUhhO0FBSXBCLFNBQU8sNkNBSmE7QUFLcEIsVUFBUSxrQkFBTSxDQUFFO0FBTEksQztrQkFaSCxHIiwiZmlsZSI6Ik1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgY2VudGVyOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25Mb2FkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB6b29tOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBpdGNoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGJlYXJpbmc6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWFwYm94Z2w6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiBbLTc3LjAxNTIsIDM4Ljg5MzddLFxuICAgIHpvb206IDE2LFxuICAgIHBpdGNoOiAwLFxuICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtc3RyZWV0cy12OScsXG4gICAgb25Mb2FkOiAoKSA9PiB7fSxcbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBtYXA6IG51bGwsXG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IHRoaXMucHJvcHMubWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogJ21hcCcsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSwgLy8gc3R5bGVzaGVldCBsb2NhdGlvblxuICAgICAgY2VudGVyOiB0aGlzLnByb3BzLmNlbnRlcixcbiAgICAgIHpvb206IHRoaXMucHJvcHMuem9vbSxcbiAgICAgIHBpdGNoOiB0aGlzLnByb3BzLnBpdGNoLFxuICAgIH0pO1xuICAgIG1hcC5vbignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYXAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25Mb2FkKG1hcCk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmIChuZXh0U3RhdGUubWFwKSB7XG4gICAgICBpZiAobmV4dFByb3BzLnN0eWxlICE9PSB0aGlzLnByb3BzLnN0eWxlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUubWFwLnNldFN0eWxlKG5leHRQcm9wcy5zdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNlbmRQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgIChjaGlsZCkgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgbWFwOiB0aGlzLnN0YXRlLm1hcCxcbiAgICAgfSlcbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1hcCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIiAvPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5tYXAgP1xuICAgICAgICAgIHRoaXMuc2VuZFByb3BzKClcbiAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==