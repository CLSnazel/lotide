
//const eqArrays = require('./eqArrays');
//given two objects, returns true when both have same number of keys, matching keys, and key-values
//working with arrays and objects
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
module.exports = {eqObjects};
const eqArrays = require('./index').eqArrays;

