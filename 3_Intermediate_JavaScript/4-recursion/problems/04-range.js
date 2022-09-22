/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

//base case: start ===  end
//recursive case: start < end
//recursive step: range(start + 1)
function range(start, end, arr = []){
  if(start > end) return [];

  if(start < end){
    arr.push(start);
    range(start+1, end, arr);
  }

  return arr;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
