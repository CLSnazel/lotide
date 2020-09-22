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


module.exports = takeUntil;