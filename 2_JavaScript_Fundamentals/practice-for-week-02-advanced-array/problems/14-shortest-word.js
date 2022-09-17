/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  let wordsArr = sentence.split(" ");
  let minLength = Infinity;

  let index = wordsArr.reduce(function(accum, currElement, currIndex){
    if(currElement.length <= minLength){
      minLength = currElement.length;
      return currIndex;
    }
    return accum;
  }, -1);

  if(index > -1) return wordsArr[index];
  return '';
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
console.log(shortestWord(''));         // ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
