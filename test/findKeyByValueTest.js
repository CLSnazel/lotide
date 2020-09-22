const findKeyByValue = require('../index').findKeyByValue;
const assert = require('chai').assert;

describe('findKeybyValue() test:', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  const testObj1 = {"hello": 2, "meow": "cats"};
  it('should return a key based on matching value', () =>{
    assert.equal(findKeyByValue(testObj1, "cats"), "meow");
    assert.equal(findKeyByValue(testObj1, 2), "hello");
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('should return undefined if no values match', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    assert.equal(findKeyByValue(testObj1, "jubilee"), undefined);
  });
  
});

