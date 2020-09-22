const eqArrays = require('../index').eqArrays;
const assert = require('chai').assert;


describe('eqArrays() test:', () => {
  it('should return true when arrays are exactly the same', () => {
    assert.equal(eqArrays([1,2,3], [1,2,3]), true);
  });
  it('should not use type coercion', () => {
    assert.equal(eqArrays([1,2,3], ["1",2,3]), false);
  });
  it('should return false when arrays do not have same length', () => {
    assert.equal(eqArrays([1,2,3], [1,2]), false);
  });
  it('should return false when individual items mismatch', () => {
    assert.equal(eqArrays([1,2,3], [1,2,4]), false);
  });
  it('should evaluate nested arrays', () => {
    assert.isTrue(eqArrays([1,[2,3]], [1,[2,3]]));
    assert.isFalse(eqArrays([1,[2,3]], [1,[2,4]]));
  });
  it('should evaluate nested objects', () => {
    assert.isTrue(eqArrays([{one:1, two:2}, 2, 3], [{one:1, two:2}, 2, 3]));
    assert.isFalse(eqArrays([{one:2, two:2}, 3, 4], [{one:2, two:1}, 3, 5]));
  });
});
