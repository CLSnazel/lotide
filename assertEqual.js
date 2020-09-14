const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u26D4 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2705 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", 1);
assertEqual(1 ,1);
assertEqual(1 ,8);