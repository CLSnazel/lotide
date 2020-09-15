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

//given an array, return the item(s) in the middle of the array.
const middle = function(arr) {
  //array length less than 3, return empty array
  if (arr.length < 3) {
    return [];
  }
  //calc middle index
  let midIndex = arr.length / 2;

  //if the midIndex is a non-int, return one middle item
  if (!Number.isInteger(midIndex)) {
    return [arr[Math.floor(midIndex)]];
  }
  //if the midIndex is an int, return two middle items
  return [arr[midIndex - 1], arr[midIndex]];
};

//testing
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2, 3]);
assertArraysEqual(middle([1,2,3,4,5,6]),  [3,4]);