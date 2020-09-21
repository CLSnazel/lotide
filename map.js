const eqArrays = function(actualArr, expectedArr) {
  //arrays not the same size, return false
  if (actualArr.length !== expectedArr.length) {
    return false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    //items at index i do not match, return false
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }

  //if we get here, it passes
  return true;
};

const assertArraysEqual = function(actualArr, expectedArr) {
  let result = eqArrays(actualArr, expectedArr);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

//TODO: write test file
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);
assertArraysEqual(map(words, word => word[Math.floor(word.length / 2)]), ['u', 't', 'o', 'j', 'o']);

module.exports = map;


