const letterPositions = function(sentence) {
  if (sentence.length < 1) {
    return {};
  }
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

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

const result1 = letterPositions('hello');

assertArraysEqual(result1['l'], [2,3]);

const lighthouseInHouseExpected = {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] };
const lighthouseInHouseResults = letterPositions("lighthouse in the house");

assertArraysEqual(lighthouseInHouseResults['l'], lighthouseInHouseExpected['l']);
assertArraysEqual(lighthouseInHouseResults['i'], lighthouseInHouseExpected['i']);
assertArraysEqual(lighthouseInHouseResults['g'], lighthouseInHouseExpected['g']);
assertArraysEqual(lighthouseInHouseResults['h'], lighthouseInHouseExpected['h']);
assertArraysEqual(lighthouseInHouseResults['t'], lighthouseInHouseExpected['t']);
assertArraysEqual(lighthouseInHouseResults['o'], lighthouseInHouseExpected['o']);
assertArraysEqual(lighthouseInHouseResults['u'], lighthouseInHouseExpected['u']);
assertArraysEqual(lighthouseInHouseResults['s'], lighthouseInHouseExpected['s']);
assertArraysEqual(lighthouseInHouseResults['e'], lighthouseInHouseExpected['e']);
assertArraysEqual(lighthouseInHouseResults['n'], lighthouseInHouseExpected['n']);

