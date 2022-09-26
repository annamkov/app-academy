/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3, 4]]]); // [1, 2, 3, 4]

flatten([1, [2, 3]], [4, [5, 6]]) //[1, 2, 3, 4, 5, 6]
***********************************************************************/

function flatten(arr, newArr = []){
  if(arr.length === 0) return [];
  
  let head = arr[0];

  if(Array.isArray(head)){
    flatten(head, newArr);
  }else{
    newArr.push(head);
  }

  flatten(arr.slice(1), newArr);

  return newArr;

}


console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3, 4]]])); // [1, 2, 3, 4]
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
