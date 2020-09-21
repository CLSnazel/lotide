
//// from eqArrays.js
// TODO: refactor eqArrays
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

//// from tail.js. I didn't realize that I was actually working ahead making this!
//// kind of like a combination of the functions above and below....
// const assertArrayEqual = function(actualArr, expectedArr) {
//   if (actualArr.length !== expectedArr.length) {
//     console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
//     return;
//   }
//   for (let i = 0; i < actualArr.length; i++) {
//     if (actualArr[i] !== expectedArr[i]) {
//       console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
//       return;
//     }
//   }
//   console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
// };

const assertArraysEqual = function(actualArr, expectedArr) {
  let result = eqArrays(actualArr, expectedArr);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

//TODO: refactor tests
// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2]);
// assertArraysEqual([1,2,3], [1,2,4]);
// assertArraysEqual([1,2,3], [4,2,3]);

module.exports = assertArraysEqual;