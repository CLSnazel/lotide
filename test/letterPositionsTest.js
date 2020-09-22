
const letterPositions = require('../index').letterPositions;
const assert = require('chai').assert;

describe('letterPositions() test:', () => {
  const lighthouseInHouseExpected = {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] };
  const lighthouseInHouseResults = letterPositions("lighthouse in the house");
  it('should tally all the indices for each non-space character', () => {
    assert.deepEqual(lighthouseInHouseResults, lighthouseInHouseExpected);
  });
  it('should return empty when given an empty string', () => {
    assert.deepEqual(letterPositions(""), {});
  });
  it('should return empty when given a string of only spaces', () => {
    assert.deepEqual(letterPositions("    "), {});
  });
});
