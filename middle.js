//given an array, return the item(s) in the middle of the array.
const middle = function(arr) {
  //array length less than 3, return empty array
  if (arr.length < 3) {
    return [];
  }
  //calc middle index
  let midIndex = arr.length / 2;

  //if the midIndex is a non-int, return one middle item
  if (!Number.isInteger(midIndex)) {
    return [arr[Math.floor(midIndex)]];
  }
  //if the midIndex is an int, return two middle items
  return [arr[midIndex - 1], arr[midIndex]];
};

module.exports = middle;