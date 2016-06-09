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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvU3ltYm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU0sVUFBUyxTQUFULE9BQVMsT0FBcUU7QUFBQSxNQUFsRSxJQUFrRSxRQUFsRSxJQUFrRTtBQUFBLE1BQTVELE9BQTRELFFBQTVELE9BQTREO0FBQUEsTUFBbkQsTUFBbUQsUUFBbkQsTUFBbUQ7QUFBQSxNQUEzQyxNQUEyQyxRQUEzQyxNQUEyQztBQUFBLE1BQW5DLEdBQW1DLFFBQW5DLEdBQW1DO0FBQUEsTUFBOUIsV0FBOEIsUUFBOUIsV0FBOEI7QUFBQSxNQUFqQixVQUFpQixRQUFqQixVQUFpQjs7QUFDbEYsU0FDRTtBQUNFLFVBQU0sSUFEUjtBQUVFLGFBQVMsT0FGWDtBQUdFLFVBQUssUUFIUDtBQUlFLFNBQUssR0FKUDtBQUtFLFdBQU87QUFDTDtBQURLLEtBTFQ7QUFRRSxZQUFRLE1BUlY7QUFTRSxpQkFBYSxXQVRmO0FBVUUsZ0JBQVk7QUFWZCxJQURGO0FBY0QsQ0FmRDs7QUFpQkEsUUFBTyxTQUFQLEdBQW1CO0FBQ2pCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQURMO0FBRWpCLFdBQVMsZ0JBQU0sU0FBTixDQUFnQixNQUZSO0FBR2pCLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQUhKO0FBSWpCLFVBQVEsZ0JBQU0sU0FBTixDQUFnQixLQUpQO0FBS2pCLFVBQVEsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUxkO0FBTWpCLGNBQVksZ0JBQU0sU0FBTixDQUFnQixNQU5YO0FBT2pCLGVBQWEsZ0JBQU0sU0FBTixDQUFnQjtBQVBaLENBQW5COztrQkFVZSxPIiwiZmlsZSI6IlN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi9MYXllcic7XG5jb25zdCBTeW1ib2wgPSAoeyBuYW1lLCBfc291cmNlLCBmaWx0ZXIsIGxheW91dCwgbWFwLCBzb3VyY2VMYXllciwgdmlzaWJpbGl0eSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheWVyXG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgX3NvdXJjZT17X3NvdXJjZX1cbiAgICAgIHR5cGU9XCJzeW1ib2xcIlxuICAgICAgbWFwPXttYXB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBsYXlvdXQsXG4gICAgICB9fVxuICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICBzb3VyY2VMYXllcj17c291cmNlTGF5ZXJ9XG4gICAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxuICAgIC8+XG4gICk7XG59O1xuXG5TeW1ib2wucHJvcFR5cGVzID0ge1xuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBfc291cmNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXA6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBsYXlvdXQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdmlzaWJpbGl0eTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc291cmNlTGF5ZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cbiJdfQ==