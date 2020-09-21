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
        
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArr, expectedArr) {
  let result = eqArrays(actualArr, expectedArr);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};


module.exports = assertArraysEqual;