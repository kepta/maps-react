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
  children: _react2.default.PropTypes.node.isRequired,
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
//# sourceMappingURL=data:application/json;base64,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LGlCQUFTLE1BQU0sT0FKTDtBQUtWLHdCQUFnQixNQUFNLGNBTFo7QUFNVix1QkFBZSxNQUFNO0FBTlgsT0FBWjtBQVFBLFlBQU0sR0FBTixDQUFVLFNBQVYsQ0FBb0IsTUFBTSxJQUExQixFQUFnQyxtQkFBTSxHQUFOLENBQWhDO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtRQUFBO1FBQ0csS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixLQUFLLGFBQUwsRUFBbEIsR0FBeUM7QUFENUMsT0FERjtBQUtEOzs7O0VBL0VpQyxnQkFBTSxTOztBQUFyQixNLENBQ1osUyxHQUFZO0FBQ2pCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQURaO0FBRWpCLFlBQVUsZ0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixVQUZkO0FBR2pCLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQUhKO0FBSWpCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUpMO0FBS2pCLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQUxKO0FBTWpCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQU5aO0FBT2pCLFdBQVMsZ0JBQU0sU0FBTixDQUFnQixJQVBSO0FBUWpCLGtCQUFnQixnQkFBTSxTQUFOLENBQWdCLE1BUmY7QUFTakIsaUJBQWUsZ0JBQU0sU0FBTixDQUFnQixNQVRkO0FBVWpCLFdBQVMsZ0JBQU0sU0FBTixDQUFnQjtBQVZSLEM7a0JBREEsTSIsImZpbGUiOiJTb3VyY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tICcuL2hlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBtYXA6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1cmw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNsdXN0ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNsdXN0ZXJNYXhab29tOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsdXN0ZXJSYWRpdXM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgIH07XG4gICAgdGhpcy5hZGRTb3VyY2UocHJvcHMpO1xuICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICBwcm9wcy5tYXAub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcy5xdWVyeVJlbmRlcmVkRmVhdHVyZXMsIHRoaXMucHJvcHMubWFwKTtcbiAgfVxuXG4gIHF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IGNoaWxkLnByb3BzLm5hbWUpKVxuICAgIHJldHVybiB0aGlzLnByb3BzLm1hcC5xdWVyeVJlbmRlcmVkRmVhdHVyZXMoZSwge1xuICAgICAgbGF5ZXJzOiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4gY2hpbGQucHJvcHMubmFtZSksXG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBuZXh0UHJvcHMubmFtZSkge1xuICAgICAgY29uc29sZS5kZWJ1ZygncmVtb3ZpbmcnLCB0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgbmV4dFByb3BzLm1hcC5yZW1vdmVTb3VyY2UodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIHRoaXMuYWRkU291cmNlKG5leHRQcm9wcyk7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5hbWU6IG5leHRQcm9wcy5uYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKSB7XG4gICAgICByZXR1cm4gbmV4dFByb3BzLm1hcC5nZXRTb3VyY2UobmV4dFByb3BzLm5hbWUpLnNldERhdGEobmV4dFByb3BzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ3JlbW92aW5nJywgdGhpcy5wcm9wcy5uYW1lKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7IHRoaXMucHJvcHMubWFwLm9mZignY2xpY2snLCB0aGlzLm9uQ2xpY2spOyB9XG4gICAgdGhpcy5wcm9wcy5tYXAucmVtb3ZlU291cmNlKHRoaXMuc3RhdGUubmFtZSk7XG4gIH1cblxuICBjbG9uZUNoaWxkcmVuID0gKCkgPT4gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAoY2hpbGQpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICBfc291cmNlOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgIG1hcDogdGhpcy5wcm9wcy5tYXAsXG4gICB9KVxuICApO1xuXG4gIGFkZFNvdXJjZShwcm9wcykge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICBjbHVzdGVyOiBwcm9wcy5jbHVzdGVyLFxuICAgICAgY2x1c3Rlck1heFpvb206IHByb3BzLmNsdXN0ZXJNYXhab29tLFxuICAgICAgY2x1c3RlclJhZGl1czogcHJvcHMuY2x1c3RlclJhZGl1cyxcbiAgICB9O1xuICAgIHByb3BzLm1hcC5hZGRTb3VyY2UocHJvcHMubmFtZSwgY2xlYW4ob2JqKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5jbG9uZUNoaWxkcmVuKCkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19