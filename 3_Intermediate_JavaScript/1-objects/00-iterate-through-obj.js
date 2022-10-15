/*
Write a function printObject(obj) that prints out all key-value pairs of an object. 
The format should be key - value.

HINT: use a for loop

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
*/

function printObject(obj) {
    let pairs = Object.entries(obj);
    for (let key in obj) {
        let pair = `${key} - ${obj[key]}`;
        console.log(pair);
    }
}
