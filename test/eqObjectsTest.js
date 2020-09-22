const { assert } = require('chai');

const eqObjects = require('../index').eqObjects;

describe("eqObjects() test:", () => {
  const ab = {"a":"1", "b":"2"};
  const ba = {"b":"2", "a":"1"};
  const abc = {"a":"1", "b":"2", "c":"3"};
  it('should return true when all keys and values match', () => {
    assert.isTrue(eqObjects(ab, ba));
  });
  it('should return false when number of keys don\'t match', () => {
    assert.isFalse(eqObjects(ab, abc));
  });
  const objIn1 = {h:'h', j:{k:'k', lol:'lol'}};
  const objIn2 = {j:{lol:'lol', k:'k'}, h:'h'};
  const objIn3 = {h:'h', j:{k:'k', lol:'rofl'}};
  it('should evaluate nested objects', () => {
    assert.isTrue(eqObjects(objIn1, objIn2));
    assert.isFalse(eqObjects(objIn1, objIn3));
  });
  const cd = {c: "1", d: ["2", 3, [3, 4, [5, 6]]]};
  const dc = {d: ["2", 3, [3, 4, [5, 6]]], c:'1'};
  const cd2 = {c: "1", d:["2", 3, 4]};
  it('should evaluate nested arrays', () => {
    assert.isTrue(eqObjects(cd,dc));
    assert.isFalse(eqObjects(cd, cd2));
  });
});

