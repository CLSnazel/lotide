const assert = require('chai').assert;
const head = require('../head');

describe("head() tests:", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns 5 for [5]', () => {
    assert.strictEqual(head(['5']), '5');
  });
  it('does not return any other value other than the first item in array', () => {
    assert.notStrictEqual(head[5,6,7], 7);
  });
  it('returns undefined when given an empty array', () => {
    assert.strictEqual(head([]), undefined);
  });
  it('returns \'Hello\' when given [\'Hello\', \'Lighthouse\', \'Labs\']', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
