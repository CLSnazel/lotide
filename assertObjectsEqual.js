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

//given two objects, returns true when both have same number of keys, matching keys, and key-values
//working with arrays and objects
const eqObjects = function(obj1, obj2) {
  let allKeys1 = Object.keys(obj1);
  let allKeys2 = Object.keys(obj2);

  if (allKeys1.length !== allKeys2.length) {
    return false;
  }
  for (let i = 0; i < allKeys1.length; i++) {
    if (!obj2[allKeys1[i]]) {
      return false;
    }
    if (Array.isArray(obj1[allKeys1[i]])) {
      let arrayResult = eqArrays(obj1[allKeys1[i]], obj2[allKeys1[i]]);
      if (!arrayResult) {
        return false;
      }
    } else if (typeof(obj1[allKeys1[i]]) === 'object' && typeof(obj2[allKeys1[i]]) === 'object') {
      let objectResult = eqObjects(obj1[allKeys1[i]], obj2[allKeys1[i]]);
      if (!objectResult) {
        return false;
      }
    } else {
      if (obj2[allKeys1[i]] !== obj1[allKeys1[i]]) {
        return false;
      }
    }
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = {"a":"1", "b":"2"};
const ba = {"b":"2", "a":"1"};
assertObjectsEqual(ab,ba);

const abc = {"a":"1", "b":"2", "c":"3"};
assertObjectsEqual(ab, abc);

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c:'1'};
assertObjectsEqual(cd,dc);

const cd2 = {c: "1", d:["2", 3, 4]};
assertObjectsEqual(cd, cd2);

const objIn1 = {h:'h', j:{k:'k', lol:'lol'}};
const objIn2 = {j:{lol:'lol', k:'k'}, h:'h'};
assertObjectsEqual(objIn1, objIn2);

const objIn3 = {h:'h', j:{k:'k', lol:'rofl'}};
assertObjectsEqual(objIn1, objIn3);