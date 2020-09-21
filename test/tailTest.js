const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[0], "Hello"); //should fail
assertArraysEqual(result, ["Hello", "Lighthouse", "Labs"]); //should fail

const staticArr = ['meow', 'cats', 'purrr'];
const staticTail = tail(staticArr);
assertArraysEqual(staticArr, ['meow', 'cats', 'purrr']);
assertArraysEqual(staticTail, ['cats', 'purrr']);