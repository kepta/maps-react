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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9MYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQixLOzs7QUFZbkIsaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHlGQUNYLEtBRFc7O0FBQUE7O0FBRWpCLFVBQUssS0FBTCxHQUFhLE1BQUssUUFBTCxDQUFjLEtBQWQsQ0FBYjtBQUZpQjtBQUdsQjs7Ozt3Q0FDbUIsUyxFQUFXO0FBQzdCLFVBQUksVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQTlCLElBQXNDLFVBQVUsT0FBcEQsRUFBNkQ7QUFDM0QsZ0JBQVEsS0FBUixDQUFjLGdCQUFkLEVBQWdDLEtBQUssS0FBTCxDQUFXLElBQTNDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLFdBQWQsQ0FBMEIsS0FBSyxLQUFMLENBQVcsSUFBckM7QUFDQSxhQUFLLEtBQUwsR0FBYSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQWI7QUFDRDtBQUNELFVBQUksS0FBSyxLQUFMLENBQVcsVUFBWCxLQUEwQixVQUFVLFVBQXhDLEVBQW9EO0FBQ2xELGdCQUFRLEtBQVIsQ0FBYyxxQkFBZDtBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxDQUFnQyxVQUFVLElBQTFDLEVBQWdELFlBQWhELEVBQThELFVBQVUsVUFBeEU7QUFDRDtBQUNGOzs7MkNBQ3NCO0FBQ3JCLFdBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxXQUFmLENBQTJCLEtBQUssS0FBTCxDQUFXLElBQXRDO0FBQ0Q7Ozs2QkFlUTtBQUNQLFVBQUksS0FBSyxLQUFMLElBQWMsS0FBSyxLQUFMLENBQVcsTUFBN0IsRUFBcUM7QUFDbkMsYUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLFNBQWYsQ0FBeUIsS0FBSyxLQUFMLENBQVcsSUFBcEMsRUFBMEMsS0FBSyxLQUFMLENBQVcsTUFBckQ7QUFDRDtBQUNELGFBQ0UsSUFERjtBQUdEOzs7O0VBbkRnQyxnQkFBTSxTOztBQUFwQixLLENBQ1osUyxHQUFZO0FBQ2pCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQURaO0FBRWpCLFdBQVMsZ0JBQU0sU0FBTixDQUFnQixNQUZSO0FBR2pCLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQUhKO0FBSWpCLFNBQU8sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUpiO0FBS2pCLFVBQVEsZ0JBQU0sU0FBTixDQUFnQixLQUxQO0FBTWpCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQU5aO0FBT2pCLGVBQWEsZ0JBQU0sU0FBTixDQUFnQixNQVBaO0FBUWpCLGNBQVksZ0JBQU0sU0FBTixDQUFnQjtBQVJYLEM7OztPQTZCbkIsUSxHQUFXLFVBQUMsS0FBRCxFQUFXO0FBQ3BCLFFBQU0sbUJBQ0QsTUFBTSxLQURMO0FBRUosVUFBSSxNQUFNLElBRk47QUFHSixjQUFRLE1BQU0sT0FIVjtBQUlKLFlBQU0sTUFBTSxJQUpSO0FBS0osc0JBQWdCLE1BQU07QUFMbEIsTUFBTjtBQU9BLFFBQUksTUFBTSxVQUFWLEVBQXNCO0FBQ3BCLFVBQUksQ0FBQyxJQUFJLE1BQVQsRUFBaUIsSUFBSSxNQUFKLEdBQWEsRUFBYjtBQUNqQixVQUFJLE1BQUosQ0FBVyxVQUFYLEdBQXdCLE1BQU0sVUFBOUI7QUFDRDtBQUNELFdBQU8sTUFBTSxHQUFOLENBQVUsUUFBVixDQUFtQixtQkFBTSxHQUFOLENBQW5CLENBQVA7QUFDRCxHOzs7a0JBM0NrQixLIiwiZmlsZSI6IkxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIF9zb3VyY2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWFwOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNvdXJjZUxheWVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpc2liaWxpdHk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxheWVyID0gdGhpcy5hZGRMYXllcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLm5hbWUgIT09IHRoaXMucHJvcHMubmFtZSAmJiBuZXh0UHJvcHMuX3NvdXJjZSkge1xuICAgICAgY29uc29sZS5kZWJ1ZygncmVtb3ZpbmcgbGF5ZXInLCB0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgbmV4dFByb3BzLm1hcC5yZW1vdmVMYXllcih0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgdGhpcy5sYXllciA9IHRoaXMuYWRkTGF5ZXIobmV4dFByb3BzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJpbGl0eSAhPT0gbmV4dFByb3BzLnZpc2liaWxpdHkpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2NoYW5naW5nIHZpc2liaWxpdHknKTtcbiAgICAgIG5leHRQcm9wcy5tYXAuc2V0TGF5b3V0UHJvcGVydHkobmV4dFByb3BzLm5hbWUsICd2aXNpYmlsaXR5JywgbmV4dFByb3BzLnZpc2liaWxpdHkpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm1hcC5yZW1vdmVMYXllcih0aGlzLnByb3BzLm5hbWUpO1xuICB9XG4gIGFkZExheWVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgLi4ucHJvcHMuc3R5bGUsXG4gICAgICBpZDogcHJvcHMubmFtZSxcbiAgICAgIHNvdXJjZTogcHJvcHMuX3NvdXJjZSxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICAnc291cmNlLWxheWVyJzogcHJvcHMuc291cmNlTGF5ZXIsXG4gICAgfTtcbiAgICBpZiAocHJvcHMudmlzaWJpbGl0eSkge1xuICAgICAgaWYgKCFvYmoubGF5b3V0KSBvYmoubGF5b3V0ID0ge307XG4gICAgICBvYmoubGF5b3V0LnZpc2liaWxpdHkgPSBwcm9wcy52aXNpYmlsaXR5O1xuICAgIH1cbiAgICByZXR1cm4gcHJvcHMubWFwLmFkZExheWVyKGNsZWFuKG9iaikpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5sYXllciAmJiB0aGlzLnByb3BzLmZpbHRlcikge1xuICAgICAgdGhpcy5wcm9wcy5tYXAuc2V0RmlsdGVyKHRoaXMucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5maWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cbn1cbiJdfQ==