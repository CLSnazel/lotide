const flatten = require('../index').flatten;
const assert = require('chai').assert;

describe('flatten() test:', () => {
  it('should flatten one-dimensional arrays', () => {
    assert.deepEqual(flatten([1,2,3]), [1,2,3]);
  });
  it('should flatten 2-d arrays', () => {
    assert.deepEqual(flatten([1, [2,3]]), [1, 2, 3]);
  });
  it('should flatten any-dimensional arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, [4, [5, 6]]], 7]), [1, 2, 3, 4, 5 , 6, 7]);
    assert.deepEqual(flatten(["lvl1", 'lvl1', ['lvl2', 'lvl2', ['lvl3', 'lvl3', ['lvl4']]],'lvl1', ['lvl2', 'lvl2']]), ['lvl1', 'lvl1', 'lvl2', 'lvl2', 'lvl3', 'lvl3', 'lvl4', 'lvl1', 'lvl2', 'lvl2']);
  });
});
 