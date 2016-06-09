'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('./Layer');

var _Layer2 = _interopRequireDefault(_Layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Symbol = function _Symbol(_ref) {
  var name = _ref.name;
  var _source = _ref._source;
  var filter = _ref.filter;
  var layout = _ref.layout;
  var map = _ref.map;
  var sourceLayer = _ref.sourceLayer;
  var visibility = _ref.visibility;

  return _react2.default.createElement(_Layer2.default, {
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
  name: _react2.default.PropTypes.string,
  _source: _react2.default.PropTypes.string,
  map: _react2.default.PropTypes.object,
  filter: _react2.default.PropTypes.array,
  layout: _react2.default.PropTypes.object.isRequired,
  visibility: _react2.default.PropTypes.string,
  sourceLayer: _react2.default.PropTypes.string
};

exports.default = _Symbol;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9TeW1ib2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTSxVQUFTLFNBQVQsT0FBUyxPQUFxRTtBQUFBLE1BQWxFLElBQWtFLFFBQWxFLElBQWtFO0FBQUEsTUFBNUQsT0FBNEQsUUFBNUQsT0FBNEQ7QUFBQSxNQUFuRCxNQUFtRCxRQUFuRCxNQUFtRDtBQUFBLE1BQTNDLE1BQTJDLFFBQTNDLE1BQTJDO0FBQUEsTUFBbkMsR0FBbUMsUUFBbkMsR0FBbUM7QUFBQSxNQUE5QixXQUE4QixRQUE5QixXQUE4QjtBQUFBLE1BQWpCLFVBQWlCLFFBQWpCLFVBQWlCOztBQUNsRixTQUNFO0FBQ0UsVUFBTSxJQURSO0FBRUUsYUFBUyxPQUZYO0FBR0UsVUFBSyxRQUhQO0FBSUUsU0FBSyxHQUpQO0FBS0UsV0FBTztBQUNMO0FBREssS0FMVDtBQVFFLFlBQVEsTUFSVjtBQVNFLGlCQUFhLFdBVGY7QUFVRSxnQkFBWTtBQVZkLElBREY7QUFjRCxDQWZEOztBQWlCQSxRQUFPLFNBQVAsR0FBbUI7QUFDakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BREw7QUFFakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCLE1BRlI7QUFHakIsT0FBSyxnQkFBTSxTQUFOLENBQWdCLE1BSEo7QUFJakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLEtBSlA7QUFLakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBTGQ7QUFNakIsY0FBWSxnQkFBTSxTQUFOLENBQWdCLE1BTlg7QUFPakIsZUFBYSxnQkFBTSxTQUFOLENBQWdCO0FBUFosQ0FBbkI7O2tCQVVlLE8iLCJmaWxlIjoiU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXllciBmcm9tICcuL0xheWVyJztcbmNvbnN0IFN5bWJvbCA9ICh7IG5hbWUsIF9zb3VyY2UsIGZpbHRlciwgbGF5b3V0LCBtYXAsIHNvdXJjZUxheWVyLCB2aXNpYmlsaXR5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5ZXJcbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBfc291cmNlPXtfc291cmNlfVxuICAgICAgdHlwZT1cInN5bWJvbFwiXG4gICAgICBtYXA9e21hcH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxheW91dCxcbiAgICAgIH19XG4gICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgIHNvdXJjZUxheWVyPXtzb3VyY2VMYXllcn1cbiAgICAgIHZpc2liaWxpdHk9e3Zpc2liaWxpdHl9XG4gICAgLz5cbiAgKTtcbn07XG5cblN5bWJvbC5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIF9zb3VyY2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG1hcDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgZmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGxheW91dDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB2aXNpYmlsaXR5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3VyY2VMYXllcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcblxuIl19