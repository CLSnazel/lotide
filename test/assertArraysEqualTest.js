const assertArraysEqual =  require('./assertArraysEqual');

describe('assertArraysEqual() Tests:', () => {
  it('should print out eqArray Results', () => {
    assertArraysEqual([1,2,3], [1,2,3]);
    assertArraysEqual(['1','2','3'], ['1', '2', '3']);

    assertArraysEqual([1,"2",3], [1,2,3]); //should fail
    assertArraysEqual([1,2,3], [1,2,4]); //should fail
    assertArraysEqual([1,2,3], [4,2,3]); //should fail
  });
});