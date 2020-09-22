//const eqObjects = require('./eqObjects');


const eqArrays = function(actualArr, expectedArr) {
  //arrays not the same size, return false
  if (actualArr.length !== expectedArr.length) {
    return false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    //items at index i do not match, return false
    if (Array.isArray(actualArr[i]) && Array.isArray(expectedArr[i])) {
      let result = eqArrays(actualArr[i], expectedArr[i]);
      if (!result) {
        return false;
      }
    } else if (typeof(actualArr[i]) === 'object' && typeof(expectedArr[i]) === 'object') {
      let result = eqObjects(actualArr[i], expectedArr[i]);
      if (!result) {
        return false;
      }
    } else if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  //if we get here, it passes
  return true;
};

module.exports = {eqArrays};
const eqObjects = require('./index').eqObjects;