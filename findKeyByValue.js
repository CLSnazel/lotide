const findKeyByValue = function(obj, val) {
  let allKeys = Object.keys(obj);
  for (let key of allKeys) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};


module.exports = findKeyByValue;