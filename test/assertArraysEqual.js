const eqArrays = require('../index').eqArrays;

const assertArraysEqual = function(actualArr, expectedArr) {
  let result = eqArrays(actualArr, expectedArr);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};


module.exports = assertArraysEqual;