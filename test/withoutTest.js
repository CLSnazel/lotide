const without = require('../index').without;
const assert = require('chai').assert;

describe('without() test:', () => {
  it('should return a new array with matching elements in param 2 removed', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, '3']), ["1", "2"]);
  });
  it('should not modify the array given in param 1', () => {
    const words = ["hello", 'world', 'lighthouse'];
    without(words, 'lighthouse');
    assert.deepEqual(words, ["hello", 'world', 'lighthouse']);
  });
});