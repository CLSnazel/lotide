const assertObjectsEqual = require('./assertObjectsEqual');

//TODO: write test files
describe('assertObjectsEqual tests:', () => {
  it('should print the results of eqObjects()', () => {
    
    console.log("PASS CASES:");
    const ab = {"a":"1", "b":"2"};
    const ba = {"b":"2", "a":"1"};
    assertObjectsEqual(ab,ba);
    const cd = {c: "1", d: ["2", 3]};
    const dc = {d: ["2", 3], c:'1'};
    assertObjectsEqual(cd,dc);
    const objIn1 = {h:'h', j:{k:'k', lol:'lol'}};
    const objIn2 = {j:{lol:'lol', k:'k'}, h:'h'};
    assertObjectsEqual(objIn1, objIn2);
    
    console.log("FAIL CASES:");
    const abc = {"a":"1", "b":"2", "c":"3"};
    assertObjectsEqual(ab, abc);
    const cd2 = {c: "1", d:["2", 3, 4]};
    assertObjectsEqual(cd, cd2);
    const objIn3 = {h:'h', j:{k:'k', lol:'rofl'}};
    assertObjectsEqual(objIn1, objIn3);

  });
});