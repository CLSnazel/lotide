const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;