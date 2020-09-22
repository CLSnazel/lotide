const takeUntil = require('../index').takeUntil;
const assert = require('chai').assert;

describe('takeUntil() test:', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, item => item < 0);
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood", ",", "I", 'crossed', 'the', 'ocean', 'for', 'a', 'heart', 'of', 'gold'];
  const results2 = takeUntil(data2, word => word === "I");
  it('should return the array up until value the given callback returns true on', () => {
    assert.deepEqual(results1, [1,2,5,7,2]);
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood", ","]);
  });
  it('should return the whole array if no match is found', () => {
    assert.deepEqual(takeUntil(data2, item => item === 'miner'), data2);
  });
  it('should return empty when given an empty array', () => {
    assert.deepEqual(takeUntil([], item => item === 2), []);
  });
  it('should not modify original array given as parameter', () => {
    assert.deepEqual(data1, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
    assert.deepEqual(data2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood", ",", "I", 'crossed', 'the', 'ocean', 'for', 'a', 'heart', 'of', 'gold']);
  });
});
