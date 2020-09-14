const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length > 1) {
    return arr.slice(1, arr.length);
  } else {
    return undefined;
  }
};

const assertArrayEqual = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
    return;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
      return;
    }
  }
  console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArrayEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[0], "Hello");
assertArrayEqual(result, ["Hello", "Lighthouse", "Labs"]);

const staticArr = ['meow', 'cats', 'purrr'];
const staticTail = tail(staticArr);
assertArrayEqual(staticArr, ['meow', 'cats', 'purrr']);
assertArrayEqual(staticTail, ['cats', 'purrr']);

