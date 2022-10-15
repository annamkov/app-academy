/*
Time to practice array destructuring! We have given you an array. Practice destructuring 
arrays by assigning variables to every value in the array below all in one line of code. 
Check your work by console.loging each of the variables to make sure you got them all.
*/


let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [fruit, num1, num2, num3, obj1, arr1] = bigArray;
console.log(fruit, num1, num2, num3, obj1, arr1);