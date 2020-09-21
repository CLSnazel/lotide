const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(arr, countObj) {
  if (arr.length === 0 || countObj === {}) {
    return {};
  }
  const results = {};
  for (const item of arr) {
    //console.log(item)
    
    //check key in results
    if (countObj[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};



//TODO: turn into test file, write better tests
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

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;