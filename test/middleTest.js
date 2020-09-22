// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle.js');
// //testing
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4,5]), [3]);
// assertArraysEqual(middle([1,2,3,4]), [2, 3]);
// assertArraysEqual(middle([1,2,3,4,5,6]),  [3,4]);

const middle = require('../middle.js');
const assert = require('chai').assert;

describe('middle() tests:', () => {
  it('should return empty array when given array of length 1', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return empty array when given array of length 2', () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it('should return [2] when given [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('should return [3] when given [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it('should return [2, 3] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('should return [3,4] when given [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});