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
//# sourceMappingURL=data:application/json;base64,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LGlCQUFTLE1BQU0sT0FKTDtBQUtWLHdCQUFnQixNQUFNLGNBTFo7QUFNVix1QkFBZSxNQUFNO0FBTlgsT0FBWjtBQVFBLFlBQU0sR0FBTixDQUFVLFNBQVYsQ0FBb0IsTUFBTSxJQUExQixFQUFnQyxtQkFBTSxHQUFOLENBQWhDO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtRQUFBO1FBQ0csS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixLQUFLLGFBQUwsRUFBbEIsR0FBeUM7QUFENUMsT0FERjtBQUtEOzs7O0VBL0VpQyxnQkFBTSxTOztBQUFyQixNLENBQ1osUyxHQUFZO0FBQ2pCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQURaO0FBRWpCLFlBQVUsZ0JBQU0sU0FBTixDQUFnQixPQUFoQixDQUF3QixVQUZqQjtBQUdqQixPQUFLLGdCQUFNLFNBQU4sQ0FBZ0IsTUFISjtBQUlqQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFKTDtBQUtqQixPQUFLLGdCQUFNLFNBQU4sQ0FBZ0IsTUFMSjtBQU1qQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFOWjtBQU9qQixXQUFTLGdCQUFNLFNBQU4sQ0FBZ0IsSUFQUjtBQVFqQixrQkFBZ0IsZ0JBQU0sU0FBTixDQUFnQixNQVJmO0FBU2pCLGlCQUFlLGdCQUFNLFNBQU4sQ0FBZ0IsTUFUZDtBQVVqQixXQUFTLGdCQUFNLFNBQU4sQ0FBZ0I7QUFWUixDO2tCQURBLE0iLCJmaWxlIjoiU291cmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSAnLi9oZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gICAgbWFwOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjbHVzdGVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbHVzdGVyTWF4Wm9vbTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbHVzdGVyUmFkaXVzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICB9O1xuICAgIHRoaXMuYWRkU291cmNlKHByb3BzKTtcbiAgICBpZiAocHJvcHMub25DbGljaykge1xuICAgICAgcHJvcHMubWFwLm9uKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUsIHRoaXMucXVlcnlSZW5kZXJlZEZlYXR1cmVzLCB0aGlzLnByb3BzLm1hcCk7XG4gIH1cblxuICBxdWVyeVJlbmRlcmVkRmVhdHVyZXMgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiBjaGlsZC5wcm9wcy5uYW1lKSlcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tYXAucXVlcnlSZW5kZXJlZEZlYXR1cmVzKGUsIHtcbiAgICAgIGxheWVyczogUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IGNoaWxkLnByb3BzLm5hbWUpLFxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gbmV4dFByb3BzLm5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ3JlbW92aW5nJywgdGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIG5leHRQcm9wcy5tYXAucmVtb3ZlU291cmNlKHRoaXMucHJvcHMubmFtZSk7XG4gICAgICB0aGlzLmFkZFNvdXJjZShuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuYW1lOiBuZXh0UHJvcHMubmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSkge1xuICAgICAgcmV0dXJuIG5leHRQcm9wcy5tYXAuZ2V0U291cmNlKG5leHRQcm9wcy5uYW1lKS5zZXREYXRhKG5leHRQcm9wcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdyZW1vdmluZycsIHRoaXMucHJvcHMubmFtZSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgeyB0aGlzLnByb3BzLm1hcC5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTsgfVxuICAgIHRoaXMucHJvcHMubWFwLnJlbW92ZVNvdXJjZSh0aGlzLnN0YXRlLm5hbWUpO1xuICB9XG5cbiAgY2xvbmVDaGlsZHJlbiA9ICgpID0+IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgKGNoaWxkKSA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgX3NvdXJjZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICBtYXA6IHRoaXMucHJvcHMubWFwLFxuICAgfSlcbiAgKTtcblxuICBhZGRTb3VyY2UocHJvcHMpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICB0eXBlOiBwcm9wcy50eXBlLFxuICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgY2x1c3RlcjogcHJvcHMuY2x1c3RlcixcbiAgICAgIGNsdXN0ZXJNYXhab29tOiBwcm9wcy5jbHVzdGVyTWF4Wm9vbSxcbiAgICAgIGNsdXN0ZXJSYWRpdXM6IHByb3BzLmNsdXN0ZXJSYWRpdXMsXG4gICAgfTtcbiAgICBwcm9wcy5tYXAuYWRkU291cmNlKHByb3BzLm5hbWUsIGNsZWFuKG9iaikpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucHJvcHMubmFtZSA/IHRoaXMuY2xvbmVDaGlsZHJlbigpIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==