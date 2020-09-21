
const assertEqual = require('../assertEqual');

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", 1); //should fail
assertEqual(1 ,1);
assertEqual(1 ,8); //should fail