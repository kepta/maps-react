'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('./Layer');

var _Layer2 = _interopRequireDefault(_Layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function Line(_ref) {
  var name = _ref.name;
  var _source = _ref._source;
  var filter = _ref.filter;
  var paint = _ref.paint;
  var map = _ref.map;
  var sourceLayer = _ref.sourceLayer;
  var visibility = _ref.visibility;
  var layout = _ref.layout;
  return _react2.default.createElement(_Layer2.default, {
    type: 'line',
    name: name,
    _source: _source,
    map: map,
    visibility: visibility,
    style: {
      layout: layout,
      paint: paint
    },
    filter: filter,
    sourceLayer: sourceLayer
  });
};

Line.propTypes = {
  name: _react2.default.PropTypes.string,
  _source: _react2.default.PropTypes.string,
  sourceLayer: _react2.default.PropTypes.string,
  visibility: _react2.default.PropTypes.string,
  map: _react2.default.PropTypes.object,
  filter: _react2.default.PropTypes.array,
  paint: _react2.default.PropTypes.object.isRequired,
  layout: _react2.default.PropTypes.object.isRequired
};

exports.default = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9MaW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU0sT0FBTyxTQUFQLElBQU87QUFBQSxNQUFHLElBQUgsUUFBRyxJQUFIO0FBQUEsTUFBUyxPQUFULFFBQVMsT0FBVDtBQUFBLE1BQWtCLE1BQWxCLFFBQWtCLE1BQWxCO0FBQUEsTUFBMEIsS0FBMUIsUUFBMEIsS0FBMUI7QUFBQSxNQUFpQyxHQUFqQyxRQUFpQyxHQUFqQztBQUFBLE1BQXNDLFdBQXRDLFFBQXNDLFdBQXRDO0FBQUEsTUFBbUQsVUFBbkQsUUFBbUQsVUFBbkQ7QUFBQSxNQUErRCxNQUEvRCxRQUErRCxNQUEvRDtBQUFBLFNBQ1g7QUFDRSxVQUFLLE1BRFA7QUFFRSxVQUFNLElBRlI7QUFHRSxhQUFTLE9BSFg7QUFJRSxTQUFLLEdBSlA7QUFLRSxnQkFBWSxVQUxkO0FBTUUsV0FBTztBQUNMLG9CQURLO0FBRUw7QUFGSyxLQU5UO0FBVUUsWUFBUSxNQVZWO0FBV0UsaUJBQWE7QUFYZixJQURXO0FBQUEsQ0FBYjs7QUFlQSxLQUFLLFNBQUwsR0FBaUI7QUFDZixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFEUDtBQUVmLFdBQVMsZ0JBQU0sU0FBTixDQUFnQixNQUZWO0FBR2YsZUFBYSxnQkFBTSxTQUFOLENBQWdCLE1BSGQ7QUFJZixjQUFZLGdCQUFNLFNBQU4sQ0FBZ0IsTUFKYjtBQUtmLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQUxOO0FBTWYsVUFBUSxnQkFBTSxTQUFOLENBQWdCLEtBTlQ7QUFPZixTQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFQZjtBQVFmLFVBQVEsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QjtBQVJoQixDQUFqQjs7a0JBV2UsSSIsImZpbGUiOiJMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheWVyIGZyb20gJy4vTGF5ZXInO1xuY29uc3QgTGluZSA9ICh7IG5hbWUsIF9zb3VyY2UsIGZpbHRlciwgcGFpbnQsIG1hcCwgc291cmNlTGF5ZXIsIHZpc2liaWxpdHksIGxheW91dCB9KSA9PlxuICA8TGF5ZXJcbiAgICB0eXBlPVwibGluZVwiXG4gICAgbmFtZT17bmFtZX1cbiAgICBfc291cmNlPXtfc291cmNlfVxuICAgIG1hcD17bWFwfVxuICAgIHZpc2liaWxpdHk9e3Zpc2liaWxpdHl9XG4gICAgc3R5bGU9e3tcbiAgICAgIGxheW91dCxcbiAgICAgIHBhaW50LFxuICAgIH19XG4gICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgc291cmNlTGF5ZXI9e3NvdXJjZUxheWVyfVxuICAvPjtcblxuTGluZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIF9zb3VyY2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZUxheWVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2aXNpYmlsaXR5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXA6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBwYWludDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsYXlvdXQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmU7XG5cbiJdfQ==