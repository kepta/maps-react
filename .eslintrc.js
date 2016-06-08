/*eslint-disable*/
module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'globals': {
    'it': true,
    'describe': true,
    'mapboxgl': true
  },
  rules: {
    'max-len': [
      1,
      240,
      2, {
        ignoreComments: true
      }
    ],
  }
};
