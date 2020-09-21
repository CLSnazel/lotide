const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    } else if (actualArr[i] !== expectedArr[i]) {
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


//TODO: make test file
const ab = {"a":"1", "b":"2"};
const ba = {"b":"2", "a":"1"};
assertEqual(eqObjects(ab,ba), true);

const abc = {"a":"1", "b":"2", "c":"3"};
assertEqual(eqObjects(ab, abc), false);

const cd = {c: "1", d: ["2", 3, [3, 4, [5, 6]]]};
const dc = {d: ["2", 3, [3, 4, [5, 6]]], c:'1'};
assertEqual(eqObjects(cd,dc), true);

const cd2 = {c: "1", d:["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);

const objIn1 = {h:'h', j:{k:'k', lol:'lol'}};
const objIn2 = {j:{lol:'lol', k:'k'}, h:'h'};
assertEqual(eqObjects(objIn1, objIn2), true);

const objIn3 = {h:'h', j:{k:'k', lol:'rofl'}};
assertEqual(eqObjects(objIn1, objIn3), false);

module.exports = eqObjects;