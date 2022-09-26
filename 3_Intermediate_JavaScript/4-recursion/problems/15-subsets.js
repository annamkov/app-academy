/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
function deepDup(arr) {
  if (!Array.isArray(arr)) return arr;

  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      copy[i] = deepDup(arr[i]);
    } else {
      copy[i] = arr[i];
    }
  }

  return copy;

}

function subsets(arr, index=0, subset=[], result=[]){
  
  result.push(deepDup(subset)); //why is deepDup necessary?

  for(let i = index; i < arr.length; i++){
    subset.push(arr[i]);
    subsets(arr, i+1, subset, result);
    subset.pop();
  }

  return result;

}

console.log(subsets([])) // [[]]
console.log(subsets([1])); // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
