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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9saWIvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCLEssR0FBQSxLO0FBQVQsU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QjtBQUM1QixNQUFNLE1BQU0sTUFBWjtBQUNBLFNBQU8sSUFBUCxDQUFZLEdBQVosRUFBaUIsT0FBakIsQ0FBeUIsVUFBQyxHQUFELEVBQVM7QUFDaEMsUUFBSSxPQUFPLElBQUksR0FBSixDQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLGFBQU8sSUFBSSxHQUFKLENBQVA7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUFPLEdBQVA7QUFDRCIsImZpbGUiOiJoZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xlYW4oYXJnT2JqKSB7XG4gIGNvbnN0IG9iaiA9IGFyZ09iajtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG4iXX0=