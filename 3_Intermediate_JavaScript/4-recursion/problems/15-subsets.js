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
/*function deepDup(arr) {
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

}*/

function subsets(nums) {
  // Recursively call function with nums[], less one element each time, until an empty set remains. At each step of the recursion stack:
  // Take all the elements (subsets) returned from the previous step (called subsetsLessOne in this code) and add an element to it.
  // This is done using the map() function here.
  // Concatentenate the original elements returned from the previous step to the new elements created from the above step.

  if (nums.length === 0) return [[]];

  // subsets([]) => [[]]
  // subset([1]) => [[], [1]]
  // subset([1, 2]) [[], [1], ]
  let subsetsLessOne = subsets(nums.slice(0, nums.length - 1));

  return subsetsLessOne.concat(subsetsLessOne.map(eachSubset => [...eachSubset, nums[nums.length - 1]]))

  //     subset = [[]] my intial set    add subsets to [[]] => [[], [1]] => [[], [1]], [2]], [[1, 2]]
  // return arr.reduce((subset, value) => subset.concat(subset.map(set => [...set, value])), [[]]);
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
