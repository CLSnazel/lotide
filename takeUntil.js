const eqArrays = function(actualArr, expectedArr) {
  //arrays not the same size, return false
  if (actualArr.length !== expectedArr.length) {
    return false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    //items at index i do not match, return false
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }

  //if we get here, it passes
  return true;
};

const assertArraysEqual = function(actualArr, expectedArr) {
  let result = eqArrays(actualArr, expectedArr);
  if (result) {
    console.log(`\u2705 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};


//returns a collection of the array with elements taken from the beginning until
//callback returns truthy value, provided item in array
const takeUntil = (arr, callback) => {
  let result = [];
  for (let item of arr) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, item => item < 0);
assertArraysEqual(results1, [1,2,5,7,2]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood", ",", "I", 'crossed', 'the', 'ocean', 'for', 'a', 'heart', 'of', 'gold'];
const results2 = takeUntil(data2, word => word === "I");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood", ","]);