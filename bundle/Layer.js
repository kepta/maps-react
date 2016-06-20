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
      console.debug('removing layer', this.props.name);
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
    var obj = _extends({}, (0, _helper.clean)(props.style), {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9MYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQixLOzs7QUFZbkIsaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHlGQUNYLEtBRFc7O0FBQUE7O0FBRWpCLFVBQUssS0FBTCxHQUFhLE1BQUssUUFBTCxDQUFjLEtBQWQsQ0FBYjtBQUZpQjtBQUdsQjs7Ozt3Q0FDbUIsUyxFQUFXO0FBQzdCLFVBQUksVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQTlCLElBQXNDLFVBQVUsT0FBcEQsRUFBNkQ7QUFDM0QsZ0JBQVEsS0FBUixDQUFjLGdCQUFkLEVBQWdDLEtBQUssS0FBTCxDQUFXLElBQTNDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLFdBQWQsQ0FBMEIsS0FBSyxLQUFMLENBQVcsSUFBckM7QUFDQSxhQUFLLEtBQUwsR0FBYSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQWI7QUFDRDtBQUNELFVBQUksS0FBSyxLQUFMLENBQVcsVUFBWCxLQUEwQixVQUFVLFVBQXhDLEVBQW9EO0FBQ2xELGdCQUFRLEtBQVIsQ0FBYyxxQkFBZDtBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxDQUFnQyxVQUFVLElBQTFDLEVBQWdELFlBQWhELEVBQThELFVBQVUsVUFBeEU7QUFDRDtBQUNGOzs7MkNBQ3NCO0FBQ3JCLGNBQVEsS0FBUixDQUFjLGdCQUFkLEVBQWdDLEtBQUssS0FBTCxDQUFXLElBQTNDO0FBQ0EsV0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxLQUFMLENBQVcsSUFBdEM7QUFDRDs7OzZCQWVRO0FBQ1AsVUFBSSxLQUFLLEtBQUwsSUFBYyxLQUFLLEtBQUwsQ0FBVyxNQUE3QixFQUFxQztBQUNuQyxhQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsU0FBZixDQUF5QixLQUFLLEtBQUwsQ0FBVyxJQUFwQyxFQUEwQyxLQUFLLEtBQUwsQ0FBVyxNQUFyRDtBQUNEO0FBQ0QsYUFDRSxJQURGO0FBR0Q7Ozs7RUFwRGdDLGdCQUFNLFM7O0FBQXBCLEssQ0FDWixTLEdBQVk7QUFDakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRFo7QUFFakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCLE1BRlI7QUFHakIsT0FBSyxnQkFBTSxTQUFOLENBQWdCLE1BSEo7QUFJakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBSmI7QUFLakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLEtBTFA7QUFNakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBTlo7QUFPakIsZUFBYSxnQkFBTSxTQUFOLENBQWdCLE1BUFo7QUFRakIsY0FBWSxnQkFBTSxTQUFOLENBQWdCO0FBUlgsQzs7O09BOEJuQixRLEdBQVcsVUFBQyxLQUFELEVBQVc7QUFDcEIsUUFBTSxtQkFDRCxtQkFBTSxNQUFNLEtBQVosQ0FEQztBQUVKLFVBQUksTUFBTSxJQUZOO0FBR0osY0FBUSxNQUFNLE9BSFY7QUFJSixZQUFNLE1BQU0sSUFKUjtBQUtKLHNCQUFnQixNQUFNO0FBTGxCLE1BQU47QUFPQSxRQUFJLE1BQU0sVUFBVixFQUFzQjtBQUNwQixVQUFJLENBQUMsSUFBSSxNQUFULEVBQWlCLElBQUksTUFBSixHQUFhLEVBQWI7QUFDakIsVUFBSSxNQUFKLENBQVcsVUFBWCxHQUF3QixNQUFNLFVBQTlCO0FBQ0Q7QUFDRCxXQUFPLE1BQU0sR0FBTixDQUFVLFFBQVYsQ0FBbUIsbUJBQU0sR0FBTixDQUFuQixDQUFQO0FBQ0QsRzs7O2tCQTVDa0IsSyIsImZpbGUiOiJMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBfc291cmNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1hcDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzb3VyY2VMYXllcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2aXNpYmlsaXR5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5sYXllciA9IHRoaXMuYWRkTGF5ZXIocHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUgJiYgbmV4dFByb3BzLl9zb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ3JlbW92aW5nIGxheWVyJywgdGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIG5leHRQcm9wcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmFkZExheWVyKG5leHRQcm9wcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnZpc2liaWxpdHkgIT09IG5leHRQcm9wcy52aXNpYmlsaXR5KSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdjaGFuZ2luZyB2aXNpYmlsaXR5Jyk7XG4gICAgICBuZXh0UHJvcHMubWFwLnNldExheW91dFByb3BlcnR5KG5leHRQcm9wcy5uYW1lLCAndmlzaWJpbGl0eScsIG5leHRQcm9wcy52aXNpYmlsaXR5KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygncmVtb3ZpbmcgbGF5ZXInLCB0aGlzLnByb3BzLm5hbWUpO1xuICAgIHRoaXMucHJvcHMubWFwLnJlbW92ZUxheWVyKHRoaXMucHJvcHMubmFtZSk7XG4gIH1cbiAgYWRkTGF5ZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICAuLi5jbGVhbihwcm9wcy5zdHlsZSksXG4gICAgICBpZDogcHJvcHMubmFtZSxcbiAgICAgIHNvdXJjZTogcHJvcHMuX3NvdXJjZSxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICAnc291cmNlLWxheWVyJzogcHJvcHMuc291cmNlTGF5ZXIsXG4gICAgfTtcbiAgICBpZiAocHJvcHMudmlzaWJpbGl0eSkge1xuICAgICAgaWYgKCFvYmoubGF5b3V0KSBvYmoubGF5b3V0ID0ge307XG4gICAgICBvYmoubGF5b3V0LnZpc2liaWxpdHkgPSBwcm9wcy52aXNpYmlsaXR5O1xuICAgIH1cbiAgICByZXR1cm4gcHJvcHMubWFwLmFkZExheWVyKGNsZWFuKG9iaikpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5sYXllciAmJiB0aGlzLnByb3BzLmZpbHRlcikge1xuICAgICAgdGhpcy5wcm9wcy5tYXAuc2V0RmlsdGVyKHRoaXMucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5maWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cbn1cbiJdfQ==