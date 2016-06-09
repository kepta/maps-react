'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clean = clean;
function clean(argObj) {
  var obj = argObj;
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'undefined') {
      delete obj[key];
    }
  });
  return obj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9oZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0IsSyxHQUFBLEs7QUFBVCxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0FBQzVCLE1BQU0sTUFBTSxNQUFaO0FBQ0EsU0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixPQUFqQixDQUF5QixVQUFDLEdBQUQsRUFBUztBQUNoQyxRQUFJLE9BQU8sSUFBSSxHQUFKLENBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsYUFBTyxJQUFJLEdBQUosQ0FBUDtBQUNEO0FBQ0YsR0FKRDtBQUtBLFNBQU8sR0FBUDtBQUNEIiwiZmlsZSI6ImhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjbGVhbihhcmdPYmopIHtcbiAgY29uc3Qgb2JqID0gYXJnT2JqO1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cbiJdfQ==