/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  //initialize an empty object
  //iterate through each char of the string.
  //if the char exists as a key in the object, increment its value.
  //if the char doesn't exist as a key in the object, add the key with a value of 1.
  let obj = {};
  let chars = string.split("");

  chars.forEach(function(char){
    if(obj[char] === undefined){
      obj[char] = 1;
    }else{
      obj[char] += 1;
    }
  });

  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;