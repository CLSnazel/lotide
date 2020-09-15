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

const without = function(initArr, removeArr) {
  if (removeArr.length === 0) {
    return initArr;
  }
  for (let i = initArr.length - 1; i > -1; i--) {
    for (let j = 0; j < removeArr.length; j++) {
      if (initArr[i] === removeArr[j]) {
        let firstHalf = initArr.slice(0, i);
        let secondHalf = initArr.slice(i + 1, initArr.length);
        initArr = firstHalf.concat(secondHalf);
      }
    }
  }
  return initArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, '3']), ["1", "2"]);
const words = ["hello", 'world', 'lighthouse'];
without(words, 'lighthouse');
assertArraysEqual(words, ["hello", 'world', 'lighthouse']);

