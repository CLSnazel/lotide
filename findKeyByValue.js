const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  let allKeys = Object.keys(obj);
  for (let key of allKeys) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};


//TODO: write test file
const testObj1 = {"hello": 2, "meow": "cats"};

assertEqual(findKeyByValue(testObj1, "cats"), "meow");
assertEqual(findKeyByValue(testObj1, 2), "hello");
assertEqual(findKeyByValue(testObj1, "jubilee"), undefined);

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;