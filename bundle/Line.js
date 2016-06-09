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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvTGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFNLE9BQU8sU0FBUCxJQUFPO0FBQUEsTUFBRyxJQUFILFFBQUcsSUFBSDtBQUFBLE1BQVMsT0FBVCxRQUFTLE9BQVQ7QUFBQSxNQUFrQixNQUFsQixRQUFrQixNQUFsQjtBQUFBLE1BQTBCLEtBQTFCLFFBQTBCLEtBQTFCO0FBQUEsTUFBaUMsR0FBakMsUUFBaUMsR0FBakM7QUFBQSxNQUFzQyxXQUF0QyxRQUFzQyxXQUF0QztBQUFBLE1BQW1ELFVBQW5ELFFBQW1ELFVBQW5EO0FBQUEsTUFBK0QsTUFBL0QsUUFBK0QsTUFBL0Q7QUFBQSxTQUNYO0FBQ0UsVUFBSyxNQURQO0FBRUUsVUFBTSxJQUZSO0FBR0UsYUFBUyxPQUhYO0FBSUUsU0FBSyxHQUpQO0FBS0UsZ0JBQVksVUFMZDtBQU1FLFdBQU87QUFDTCxvQkFESztBQUVMO0FBRkssS0FOVDtBQVVFLFlBQVEsTUFWVjtBQVdFLGlCQUFhO0FBWGYsSUFEVztBQUFBLENBQWI7O0FBZUEsS0FBSyxTQUFMLEdBQWlCO0FBQ2YsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BRFA7QUFFZixXQUFTLGdCQUFNLFNBQU4sQ0FBZ0IsTUFGVjtBQUdmLGVBQWEsZ0JBQU0sU0FBTixDQUFnQixNQUhkO0FBSWYsY0FBWSxnQkFBTSxTQUFOLENBQWdCLE1BSmI7QUFLZixPQUFLLGdCQUFNLFNBQU4sQ0FBZ0IsTUFMTjtBQU1mLFVBQVEsZ0JBQU0sU0FBTixDQUFnQixLQU5UO0FBT2YsU0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBUGY7QUFRZixVQUFRLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUI7QUFSaEIsQ0FBakI7O2tCQVdlLEkiLCJmaWxlIjoiTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXllciBmcm9tICcuL0xheWVyJztcbmNvbnN0IExpbmUgPSAoeyBuYW1lLCBfc291cmNlLCBmaWx0ZXIsIHBhaW50LCBtYXAsIHNvdXJjZUxheWVyLCB2aXNpYmlsaXR5LCBsYXlvdXQgfSkgPT5cbiAgPExheWVyXG4gICAgdHlwZT1cImxpbmVcIlxuICAgIG5hbWU9e25hbWV9XG4gICAgX3NvdXJjZT17X3NvdXJjZX1cbiAgICBtYXA9e21hcH1cbiAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxuICAgIHN0eWxlPXt7XG4gICAgICBsYXlvdXQsXG4gICAgICBwYWludCxcbiAgICB9fVxuICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgIHNvdXJjZUxheWVyPXtzb3VyY2VMYXllcn1cbiAgLz47XG5cbkxpbmUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBfc291cmNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3VyY2VMYXllcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlzaWJpbGl0eTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgbWFwOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgcGFpbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbGF5b3V0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5lO1xuXG4iXX0=