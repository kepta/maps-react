'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  var style = _ref.style;
  var paint = _ref.paint;

  return _react2.default.createElement(_Layer2.default, {
    name: name,
    _source: _source,
    type: 'symbol',
    map: map,
    style: _extends({}, style, {
      layout: layout,
      paint: paint
    }),
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
  layout: _react2.default.PropTypes.object,
  visibility: _react2.default.PropTypes.string,
  sourceLayer: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object,
  paint: _react2.default.PropTypes.object
};

exports.default = _Symbol;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9TeW1ib2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFNLFVBQVMsU0FBVCxPQUFTLE9BQW1GO0FBQUEsTUFBaEYsSUFBZ0YsUUFBaEYsSUFBZ0Y7QUFBQSxNQUExRSxPQUEwRSxRQUExRSxPQUEwRTtBQUFBLE1BQWpFLE1BQWlFLFFBQWpFLE1BQWlFO0FBQUEsTUFBekQsTUFBeUQsUUFBekQsTUFBeUQ7QUFBQSxNQUFqRCxHQUFpRCxRQUFqRCxHQUFpRDtBQUFBLE1BQTVDLFdBQTRDLFFBQTVDLFdBQTRDO0FBQUEsTUFBL0IsVUFBK0IsUUFBL0IsVUFBK0I7QUFBQSxNQUFuQixLQUFtQixRQUFuQixLQUFtQjtBQUFBLE1BQVosS0FBWSxRQUFaLEtBQVk7O0FBQ2hHLFNBQ0U7QUFDRSxVQUFNLElBRFI7QUFFRSxhQUFTLE9BRlg7QUFHRSxVQUFLLFFBSFA7QUFJRSxTQUFLLEdBSlA7QUFLRSx3QkFDSyxLQURMO0FBRUUsb0JBRkY7QUFHRTtBQUhGLE1BTEY7QUFVRSxZQUFRLE1BVlY7QUFXRSxpQkFBYSxXQVhmO0FBWUUsZ0JBQVk7QUFaZCxJQURGO0FBZ0JELENBakJEOztBQW1CQSxRQUFPLFNBQVAsR0FBbUI7QUFDakIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BREw7QUFFakIsV0FBUyxnQkFBTSxTQUFOLENBQWdCLE1BRlI7QUFHakIsT0FBSyxnQkFBTSxTQUFOLENBQWdCLE1BSEo7QUFJakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLEtBSlA7QUFLakIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLE1BTFA7QUFNakIsY0FBWSxnQkFBTSxTQUFOLENBQWdCLE1BTlg7QUFPakIsZUFBYSxnQkFBTSxTQUFOLENBQWdCLE1BUFo7QUFRakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BUk47QUFTakIsU0FBTyxnQkFBTSxTQUFOLENBQWdCO0FBVE4sQ0FBbkI7O2tCQVllLE8iLCJmaWxlIjoiU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXllciBmcm9tICcuL0xheWVyJztcbmNvbnN0IFN5bWJvbCA9ICh7IG5hbWUsIF9zb3VyY2UsIGZpbHRlciwgbGF5b3V0LCBtYXAsIHNvdXJjZUxheWVyLCB2aXNpYmlsaXR5LCBzdHlsZSwgcGFpbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXllclxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIF9zb3VyY2U9e19zb3VyY2V9XG4gICAgICB0eXBlPVwic3ltYm9sXCJcbiAgICAgIG1hcD17bWFwfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgcGFpbnQsXG4gICAgICB9fVxuICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICBzb3VyY2VMYXllcj17c291cmNlTGF5ZXJ9XG4gICAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxuICAgIC8+XG4gICk7XG59O1xuXG5TeW1ib2wucHJvcFR5cGVzID0ge1xuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBfc291cmNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXA6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBsYXlvdXQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIHZpc2liaWxpdHk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZUxheWVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFpbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cbiJdfQ==