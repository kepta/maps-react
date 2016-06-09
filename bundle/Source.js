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

var Source = function (_React$Component) {
  _inherits(Source, _React$Component);

  function Source(props) {
    _classCallCheck(this, Source);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Source).call(this, props));

    _this.onClick = function (e) {
      _this.props.onClick(e, _this.queryRenderedFeatures, _this.props.map);
    };

    _this.queryRenderedFeatures = function (e) {
      console.log(_react2.default.Children.map(_this.props.children, function (child) {
        return child.props.name;
      }));
      return _this.props.map.queryRenderedFeatures(e, {
        layers: _react2.default.Children.map(_this.props.children, function (child) {
          return child.props.name;
        })
      });
    };

    _this.cloneChildren = function () {
      return _react2.default.Children.map(_this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
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

  _createClass(Source, [{
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
      props.map.addSource(props.name, (0, _helper.clean)(obj));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.name ? this.cloneChildren() : null
      );
    }
  }]);

  return Source;
}(_react2.default.Component);

Source.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  children: _react2.default.PropTypes.element.isRequired,
  map: _react2.default.PropTypes.object,
  data: _react2.default.PropTypes.object,
  url: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string.isRequired,
  cluster: _react2.default.PropTypes.bool,
  clusterMaxZoom: _react2.default.PropTypes.number,
  clusterRadius: _react2.default.PropTypes.number,
  onClick: _react2.default.PropTypes.func
};
exports.default = Source;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvU291cmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQixNOzs7QUFjbkIsa0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBGQUNYLEtBRFc7O0FBQUEsVUFXbkIsT0FYbUIsR0FXVCxVQUFDLENBQUQsRUFBTztBQUNmLFlBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0IsTUFBSyxxQkFBM0IsRUFBa0QsTUFBSyxLQUFMLENBQVcsR0FBN0Q7QUFDRCxLQWJrQjs7QUFBQSxVQWVuQixxQkFmbUIsR0FlSyxVQUFDLENBQUQsRUFBTztBQUM3QixjQUFRLEdBQVIsQ0FBWSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixNQUFLLEtBQUwsQ0FBVyxRQUE5QixFQUF3QztBQUFBLGVBQVMsTUFBTSxLQUFOLENBQVksSUFBckI7QUFBQSxPQUF4QyxDQUFaO0FBQ0EsYUFBTyxNQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUscUJBQWYsQ0FBcUMsQ0FBckMsRUFBd0M7QUFDN0MsZ0JBQVEsZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsTUFBSyxLQUFMLENBQVcsUUFBOUIsRUFBd0M7QUFBQSxpQkFBUyxNQUFNLEtBQU4sQ0FBWSxJQUFyQjtBQUFBLFNBQXhDO0FBRHFDLE9BQXhDLENBQVA7QUFHRCxLQXBCa0I7O0FBQUEsVUF5Q25CLGFBekNtQixHQXlDSDtBQUFBLGFBQU0sZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsTUFBSyxLQUFMLENBQVcsUUFBOUIsRUFDckIsVUFBQyxLQUFEO0FBQUEsZUFBVyxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCO0FBQ25DLG1CQUFTLE1BQUssS0FBTCxDQUFXLElBRGU7QUFFbkMsZUFBSyxNQUFLLEtBQUwsQ0FBVztBQUZtQixTQUExQixDQUFYO0FBQUEsT0FEcUIsQ0FBTjtBQUFBLEtBekNHOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU0sTUFBSyxLQUFMLENBQVc7QUFETixLQUFiO0FBR0EsVUFBSyxTQUFMLENBQWUsS0FBZjtBQUNBLFFBQUksTUFBTSxPQUFWLEVBQW1CO0FBQ2pCLFlBQU0sR0FBTixDQUFVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLE1BQUssT0FBM0I7QUFDRDtBQVJnQjtBQVNsQjs7Ozt3Q0FZbUIsUyxFQUFXO0FBQzdCLFVBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQWxDLEVBQXdDO0FBQ3RDLGdCQUFRLEtBQVIsQ0FBYyxVQUFkLEVBQTBCLEtBQUssS0FBTCxDQUFXLElBQXJDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLFlBQWQsQ0FBMkIsS0FBSyxLQUFMLENBQVcsSUFBdEM7QUFDQSxhQUFLLFNBQUwsQ0FBZSxTQUFmO0FBQ0EsZUFBTyxLQUFLLFFBQUwsQ0FBYztBQUNuQixnQkFBTSxVQUFVO0FBREcsU0FBZCxDQUFQO0FBR0Q7QUFDRCxVQUFJLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFsQyxFQUF3QztBQUN0QyxlQUFPLFVBQVUsR0FBVixDQUFjLFNBQWQsQ0FBd0IsVUFBVSxJQUFsQyxFQUF3QyxPQUF4QyxDQUFnRCxVQUFVLElBQTFELENBQVA7QUFDRDtBQUNGOzs7MkNBRXNCO0FBQ3JCLGNBQVEsS0FBUixDQUFjLFVBQWQsRUFBMEIsS0FBSyxLQUFMLENBQVcsSUFBckM7QUFDQSxVQUFJLEtBQUssS0FBTCxDQUFXLE9BQWYsRUFBd0I7QUFBRSxhQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZixDQUFtQixPQUFuQixFQUE0QixLQUFLLE9BQWpDO0FBQTRDO0FBQ3RFLFdBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxZQUFmLENBQTRCLEtBQUssS0FBTCxDQUFXLElBQXZDO0FBQ0Q7Ozs4QkFTUyxLLEVBQU87QUFDZixVQUFNLE1BQU07QUFDVixjQUFNLE1BQU0sSUFERjtBQUVWLGFBQUssTUFBTSxHQUZEO0FBR1YsY0FBTSxNQUFNLElBSEY7QUFJVixpQkFBUyxNQUFNLE9BSkw7QUFLVix3QkFBZ0IsTUFBTSxjQUxaO0FBTVYsdUJBQWUsTUFBTTtBQU5YLE9BQVo7QUFRQSxZQUFNLEdBQU4sQ0FBVSxTQUFWLENBQW9CLE1BQU0sSUFBMUIsRUFBZ0MsbUJBQU0sR0FBTixDQUFoQztBQUNEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7UUFBQTtRQUNHLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsS0FBSyxhQUFMLEVBQWxCLEdBQXlDO0FBRDVDLE9BREY7QUFLRDs7OztFQS9FaUMsZ0JBQU0sUzs7QUFBckIsTSxDQUNaLFMsR0FBWTtBQUNqQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEWjtBQUVqQixZQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBd0IsVUFGakI7QUFHakIsT0FBSyxnQkFBTSxTQUFOLENBQWdCLE1BSEo7QUFJakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BSkw7QUFLakIsT0FBSyxnQkFBTSxTQUFOLENBQWdCLE1BTEo7QUFNakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBTlo7QUFPakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCLElBUFI7QUFRakIsa0JBQWdCLGdCQUFNLFNBQU4sQ0FBZ0IsTUFSZjtBQVNqQixpQkFBZSxnQkFBTSxTQUFOLENBQWdCLE1BVGQ7QUFVakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCO0FBVlIsQztrQkFEQSxNIiwiZmlsZSI6IlNvdXJjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vaGVscGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICAgIG1hcDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2x1c3RlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2x1c3Rlck1heFpvb206IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY2x1c3RlclJhZGl1czogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmFkZFNvdXJjZShwcm9wcyk7XG4gICAgaWYgKHByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHByb3BzLm1hcC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcywgdGhpcy5wcm9wcy5tYXApO1xuICB9XG5cbiAgcXVlcnlSZW5kZXJlZEZlYXR1cmVzID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4gY2hpbGQucHJvcHMubmFtZSkpXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubWFwLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyhlLCB7XG4gICAgICBsYXllcnM6IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiBjaGlsZC5wcm9wcy5uYW1lKSxcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IG5leHRQcm9wcy5uYW1lKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdyZW1vdmluZycsIHRoaXMucHJvcHMubmFtZSk7XG4gICAgICBuZXh0UHJvcHMubWFwLnJlbW92ZVNvdXJjZSh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgdGhpcy5hZGRTb3VyY2UobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbmFtZTogbmV4dFByb3BzLm5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpIHtcbiAgICAgIHJldHVybiBuZXh0UHJvcHMubWFwLmdldFNvdXJjZShuZXh0UHJvcHMubmFtZSkuc2V0RGF0YShuZXh0UHJvcHMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygncmVtb3ZpbmcnLCB0aGlzLnByb3BzLm5hbWUpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHsgdGhpcy5wcm9wcy5tYXAub2ZmKCdjbGljaycsIHRoaXMub25DbGljayk7IH1cbiAgICB0aGlzLnByb3BzLm1hcC5yZW1vdmVTb3VyY2UodGhpcy5zdGF0ZS5uYW1lKTtcbiAgfVxuXG4gIGNsb25lQ2hpbGRyZW4gPSAoKSA9PiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgIChjaGlsZCkgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgIF9zb3VyY2U6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgbWFwOiB0aGlzLnByb3BzLm1hcCxcbiAgIH0pXG4gICk7XG5cbiAgYWRkU291cmNlKHByb3BzKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgdHlwZTogcHJvcHMudHlwZSxcbiAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgIGNsdXN0ZXI6IHByb3BzLmNsdXN0ZXIsXG4gICAgICBjbHVzdGVyTWF4Wm9vbTogcHJvcHMuY2x1c3Rlck1heFpvb20sXG4gICAgICBjbHVzdGVyUmFkaXVzOiBwcm9wcy5jbHVzdGVyUmFkaXVzLFxuICAgIH07XG4gICAgcHJvcHMubWFwLmFkZFNvdXJjZShwcm9wcy5uYW1lLCBjbGVhbihvYmopKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLmNsb25lQ2hpbGRyZW4oKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=