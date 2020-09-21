// const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertArraysEqual(result, ["Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// assertEqual(result[0], "Hello"); //should fail
// assertArraysEqual(result, ["Hello", "Lighthouse", "Labs"]); //should fail

// const staticArr = ['meow', 'cats', 'purrr'];
// const staticTail = tail(staticArr);
// assertArraysEqual(staticArr, ['meow', 'cats', 'purrr']);
// assertArraysEqual(staticTail, ['cats', 'purrr']);

const tail = require('../tail.js');
const assert = require('chai').assert;

describe('tail() tests:', ()=> {
  it('should return all elements except the first', () => {
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
  it('should not return the first element', () => {
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.notStrictEqual(result[0], ["Hello"]);
  });
  it('should not modify the original array', () => {
    const catThings = ['meow', 'purrrr', 'miaou'];
    const catTail = tail(catThings);
    assert.deepEqual(catThings, ['meow', 'purrrr', 'miaou']);
    assert.deepEqual(catTail, ['purrrr', 'miaou']);
    assert.notEqual(catTail, catThings);
    assert.notDeepEqual(catTail, catThings);
  });
});