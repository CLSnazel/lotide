const assertArraysEqual =  require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2]); //should fail
assertArraysEqual([1,2,3], [1,2,4]); //should fail
assertArraysEqual([1,2,3], [4,2,3]); //should fail