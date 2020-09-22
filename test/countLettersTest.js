const countLetters = require('../index').countLetters;
const assert = require('chai').assert;

///TODO: turn into test file
describe("countLetters() test:", () => {
  const result1 = countLetters("lighthouse in the house");
  it('should count the letters in a string', () => {
    assert.deepEqual(result1, {l:1, i:2, g:1, h:4, t:2, o:2, u:2, s:2, e:3, n:1});
  });
  it('should not count any spaces', () => {
    assert.equal(result1[" "], undefined);
  });
});

