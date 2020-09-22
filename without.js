const without = function(initArr, removeArr) {
  if (removeArr.length === 0) {
    return initArr;
  }
  for (let i = initArr.length - 1; i > -1; i--) {
    for (let j = 0; j < removeArr.length; j++) {
      if (initArr[i] === removeArr[j]) {
        let firstHalf = initArr.slice(0, i);
        let secondHalf = initArr.slice(i + 1, initArr.length);
        initArr = firstHalf.concat(secondHalf);
      }
    }
  }
  return initArr;
};


module.exports = without;