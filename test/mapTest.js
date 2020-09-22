const map = require('../index').map;
const assert = require('chai').assert;

describe('map() test:', () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);

  it('should make a new copy of array based on callback', () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
    assert.deepEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);
    assert.deepEqual(map(words, word => word[Math.floor(word.length / 2)]), ['u', 't', 'o', 'j', 'o']);
  });
  it('should not modify the array given as a parameter', () => {
    assert.deepEqual(words, ["ground", "control", "to", "major", "tom"])
  });
});