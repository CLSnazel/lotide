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

//// implemented with recursion
const flatten = function(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flatten(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

//TODO: write test file
assertArraysEqual(flatten([1, 2, [3, [4, [5, 6]]], 7]), [1, 2, 3, 4, 5 , 6, 7]);
assertArraysEqual(flatten(["lvl1", 'lvl1', ['lvl2', 'lvl2', ['lvl3', 'lvl3', ['lvl4']]],'lvl1', ['lvl2', 'lvl2']]), ['lvl1', 'lvl1', 'lvl2', 'lvl2', 'lvl3', 'lvl3', 'lvl4', 'lvl1', 'lvl2', 'lvl2']);

module.exports = flatten;