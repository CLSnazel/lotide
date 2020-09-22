
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

const eqObjects = (obj1, obj2) => {
  let allKeys1 = Object.keys(obj1);
  let allKeys2 = Object.keys(obj2);

  if (allKeys1.length !== allKeys2.length) {
    return false;
  }

  for (let val in obj1) {
    if (!obj2[val]) {
      return false;
    } else if (Array.isArray(obj1[val]) && Array.isArray(obj2[val])) {
      let arrayResult = eqArrays(obj1[val], obj2[val]);
      if (!arrayResult) {
        return false;
      }
    } else if (typeof(obj1[val]) === 'object' && typeof(obj2[val]) === 'object') {
      let objectResult = eqObjects(obj1[val], obj2[val]);
      if (!objectResult) {
        return false;
      }
    } else {
      if (obj1[val] !== obj2[val]) {
        return false;
      }
    }
  }
  
  return true;
};

module.exports = {
  eqArrays,
  eqObjects
};