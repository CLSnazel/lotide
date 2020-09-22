// index.js
// const assertArraysEqual = require('./test/assertArraysEqual');
// const assertEqual = require('./assertEqual');
// const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
// const eqArrays = require('./eqArrays').eqArrays;
// const eqObjects = require('./eqObjects').eqObjects;
const eqArrays = require('./eqRefTypes').eqArrays;
const eqObjects = require('./eqRefTypes').eqObjects;
//const eqRefTypes = require('./eqRefTypes');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  // assertArraysEqual,
  // assertEqual,
  // assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};
