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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9DaXJjbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTSxTQUFTLFNBQVQsTUFBUztBQUFBLE1BQUcsSUFBSCxRQUFHLElBQUg7QUFBQSxNQUFTLE9BQVQsUUFBUyxPQUFUO0FBQUEsTUFBa0IsTUFBbEIsUUFBa0IsTUFBbEI7QUFBQSxNQUEwQixLQUExQixRQUEwQixLQUExQjtBQUFBLE1BQWlDLEdBQWpDLFFBQWlDLEdBQWpDO0FBQUEsTUFBc0MsV0FBdEMsUUFBc0MsV0FBdEM7QUFBQSxNQUFtRCxVQUFuRCxRQUFtRCxVQUFuRDtBQUFBLFNBQ2I7QUFDRSxVQUFLLFFBRFA7QUFFRSxVQUFNLElBRlI7QUFHRSxhQUFTLE9BSFg7QUFJRSxTQUFLLEdBSlA7QUFLRSxnQkFBWSxVQUxkO0FBTUUsV0FBTztBQUNMO0FBREssS0FOVDtBQVNFLFlBQVEsTUFUVjtBQVVFLGlCQUFhO0FBVmYsSUFEYTtBQUFBLENBQWY7O0FBY0EsT0FBTyxTQUFQLEdBQW1CO0FBQ2pCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixNQURMO0FBRWpCLFdBQVMsZ0JBQU0sU0FBTixDQUFnQixNQUZSO0FBR2pCLGVBQWEsZ0JBQU0sU0FBTixDQUFnQixNQUhaO0FBSWpCLGNBQVksZ0JBQU0sU0FBTixDQUFnQixNQUpYO0FBS2pCLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQUxKO0FBTWpCLFVBQVEsZ0JBQU0sU0FBTixDQUFnQixLQU5QO0FBT2pCLFNBQU8sZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QjtBQVBiLENBQW5COztrQkFVZSxNIiwiZmlsZSI6IkNpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi9MYXllcic7XG5jb25zdCBDaXJjbGUgPSAoeyBuYW1lLCBfc291cmNlLCBmaWx0ZXIsIHBhaW50LCBtYXAsIHNvdXJjZUxheWVyLCB2aXNpYmlsaXR5IH0pID0+XG4gIDxMYXllclxuICAgIHR5cGU9XCJjaXJjbGVcIlxuICAgIG5hbWU9e25hbWV9XG4gICAgX3NvdXJjZT17X3NvdXJjZX1cbiAgICBtYXA9e21hcH1cbiAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxuICAgIHN0eWxlPXt7XG4gICAgICBwYWludCxcbiAgICB9fVxuICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgIHNvdXJjZUxheWVyPXtzb3VyY2VMYXllcn1cbiAgLz47XG5cbkNpcmNsZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIF9zb3VyY2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZUxheWVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2aXNpYmlsaXR5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXA6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBwYWludDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuXG4iXX0=