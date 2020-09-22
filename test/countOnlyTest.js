const countOnly = require('../index').countOnly;
const assert = require('chai').assert;

describe("countOnly() test: ", () => {
  const firstNames = [
    'Karl',
    'Salima',
    'Agouhanna',
    'Fang',
    'Kavith',
    'Jason',
    'Salima',
    'Fang',
    'Joe'
  ];
  const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang":true, "Agouhanna":false});
  it('should return the keys counts we asked: ', () => {
    assert.equal(result1.Jason, 1);
    assert.equal(result1.Fang, 2);
  });
  it('should not return any counts on keys we set to false', () => {
    assert.equal(result1.Agouhanna, undefined);
  });
  it('should not return counts on any keys we did not specify', () => {
    assert.equal(result1.Kavith, undefined);
  });
  it('should return undefined if a specified key was not present', () => {
    assert.equal(result1.Karima, undefined);
  });

});