/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

//base case: arr.length === 0
//recusrive case: recurse when arr.length > 0
//recursive step: slice(1) which decreases arr.length by 1
function sumArray(arr){
  if(arr.length === 0) return 0;

  return arr[0] + sumArray(arr.slice(1));
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
