'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('./Layer');

var _Layer2 = _interopRequireDefault(_Layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = function Circle(_ref) {
  var name = _ref.name;
  var _source = _ref._source;
  var filter = _ref.filter;
  var paint = _ref.paint;
  var map = _ref.map;
  var sourceLayer = _ref.sourceLayer;
  var visibility = _ref.visibility;
  return _react2.default.createElement(_Layer2.default, {
    type: 'circle',
    name: name,
    _source: _source,
    map: map,
    visibility: visibility,
    style: {
      paint: paint
    },
    filter: filter,
    sourceLayer: sourceLayer
  });
};

Circle.propTypes = {
  name: _react2.default.PropTypes.string,
  _source: _react2.default.PropTypes.string,
  sourceLayer: _react2.default.PropTypes.string,
  visibility: _react2.default.PropTypes.string,
  map: _react2.default.PropTypes.object,
  filter: _react2.default.PropTypes.array,
  paint: _react2.default.PropTypes.object.isRequired
};

exports.default = Circle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvQ2lyY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU0sU0FBUyxTQUFULE1BQVM7QUFBQSxNQUFHLElBQUgsUUFBRyxJQUFIO0FBQUEsTUFBUyxPQUFULFFBQVMsT0FBVDtBQUFBLE1BQWtCLE1BQWxCLFFBQWtCLE1BQWxCO0FBQUEsTUFBMEIsS0FBMUIsUUFBMEIsS0FBMUI7QUFBQSxNQUFpQyxHQUFqQyxRQUFpQyxHQUFqQztBQUFBLE1BQXNDLFdBQXRDLFFBQXNDLFdBQXRDO0FBQUEsTUFBbUQsVUFBbkQsUUFBbUQsVUFBbkQ7QUFBQSxTQUNiO0FBQ0UsVUFBSyxRQURQO0FBRUUsVUFBTSxJQUZSO0FBR0UsYUFBUyxPQUhYO0FBSUUsU0FBSyxHQUpQO0FBS0UsZ0JBQVksVUFMZDtBQU1FLFdBQU87QUFDTDtBQURLLEtBTlQ7QUFTRSxZQUFRLE1BVFY7QUFVRSxpQkFBYTtBQVZmLElBRGE7QUFBQSxDQUFmOztBQWNBLE9BQU8sU0FBUCxHQUFtQjtBQUNqQixRQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsTUFETDtBQUVqQixXQUFTLGdCQUFNLFNBQU4sQ0FBZ0IsTUFGUjtBQUdqQixlQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsTUFIWjtBQUlqQixjQUFZLGdCQUFNLFNBQU4sQ0FBZ0IsTUFKWDtBQUtqQixPQUFLLGdCQUFNLFNBQU4sQ0FBZ0IsTUFMSjtBQU1qQixVQUFRLGdCQUFNLFNBQU4sQ0FBZ0IsS0FOUDtBQU9qQixTQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUI7QUFQYixDQUFuQjs7a0JBVWUsTSIsImZpbGUiOiJDaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheWVyIGZyb20gJy4vTGF5ZXInO1xuY29uc3QgQ2lyY2xlID0gKHsgbmFtZSwgX3NvdXJjZSwgZmlsdGVyLCBwYWludCwgbWFwLCBzb3VyY2VMYXllciwgdmlzaWJpbGl0eSB9KSA9PlxuICA8TGF5ZXJcbiAgICB0eXBlPVwiY2lyY2xlXCJcbiAgICBuYW1lPXtuYW1lfVxuICAgIF9zb3VyY2U9e19zb3VyY2V9XG4gICAgbWFwPXttYXB9XG4gICAgdmlzaWJpbGl0eT17dmlzaWJpbGl0eX1cbiAgICBzdHlsZT17e1xuICAgICAgcGFpbnQsXG4gICAgfX1cbiAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICBzb3VyY2VMYXllcj17c291cmNlTGF5ZXJ9XG4gIC8+O1xuXG5DaXJjbGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBfc291cmNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3VyY2VMYXllcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlzaWJpbGl0eTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgbWFwOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgcGFpbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcblxuIl19