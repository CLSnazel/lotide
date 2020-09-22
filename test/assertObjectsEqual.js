const eqObjects = require('../index').eqObjects;

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log("eqObjects", eqObjects);

module.exports = assertObjectsEqual;