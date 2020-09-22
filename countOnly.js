const countOnly = function(arr, countObj) {
  if (arr.length === 0 || countObj === {}) {
    return {};
  }
  const results = {};
  for (const item of arr) {
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

module.exports = countOnly;