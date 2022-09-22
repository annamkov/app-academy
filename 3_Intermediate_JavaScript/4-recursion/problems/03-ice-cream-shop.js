/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

//base case: favorite flavor found in array OR reached end of array
//recursive case: recurse when there are more flavours to check (index < flavors.length - 1)
//recursive step: iceCreamShop(i+1);
/*function iceCreamShop(flavors, favorite, i = 0){
  if(flavors.length === 0) return false;

  if(flavors[i] === favorite || i === flavors.length - 1){
    return flavors[i] === favorite;
  }

  if(i < flavors.length - 1){
    return iceCreamShop(flavors, favorite, i+1);
  }
}*/

//base case: empty array or favorite flavor found in array
//recursive case: recurse when flavors.length > 0
//recursive step: decrease array size using slice
function iceCreamShop(flavors, favorite){
  if(flavors.length === 0) return false;

  if(flavors[0] === favorite) return true;

  return iceCreamShop(flavors.slice(1), favorite); //don't need the clause
  
}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
console.log(iceCreamShop([], 'honey lavender')); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
