const add = require('./math-add');

const sum = function(a, b) {
  return add(a, b);
};

module.exports = sum;