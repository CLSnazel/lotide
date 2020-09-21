
const assertEqual = require('../assertEqual');

describe("assertEqual() test:", ()=>{
  it('should print the results of actual === expected', () => {
    //TEST CODE
    console.log("PASS CASES:");
    assertEqual("Lighthouse Labs", "Lighthouse Labs");
    assertEqual(1 ,1);
    console.log("FAIL CASES:")
    assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
    assertEqual("Lighthouse Labs", 1); //should fail
    assertEqual(1 ,8); //should fail
  });
})