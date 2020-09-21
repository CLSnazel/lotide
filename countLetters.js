
//TODO: assert with require
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  if (inputString.length < 1) {
    return {};
  }
  let letterCount = {};
  for (let char of inputString) {
    if (char !== " ") {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};

///TODO: turn into test file
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1['i'], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1['s'], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);

module.exports = countLetters;