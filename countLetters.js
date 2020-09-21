
const countLetters = function(inputString) {
  if (inputString.length < 1) {
    return {};
  }
  let letterCount = {};
  for (let char of inputString) {
    if (char !== " ") {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};


module.exports = countLetters;