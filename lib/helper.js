export function clean(argObj) {
  const obj = argObj;
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'undefined') {
      delete obj[key];
    }
  });
  return obj;
}
