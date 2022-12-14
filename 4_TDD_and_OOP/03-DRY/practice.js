function multiplyBiggerNumByTwo(num1, num2) {
  let { max } = maxMin(num1, num2);
  return max * 2;
  /*let bigNum;
  if (max(num1, num2) === num1) {
    bigNum = num1;
    return bigNum * 2;
  } else {
    bigNum = num2;
    return bigNum * 2;
  }*/
}

function divideBiggerNumByThree(num1, num2) {
  let { max} = maxMin(num1, num2);
  return max / 3;

  /*let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    return bigNum / 3;
  } else {
    bigNum = num2;
    return bigNum / 3;
  }*/
}

function eatMostTacos(sum1, sum2) {
  let { max } = maxMin(sum1, sum2);
  return `I ate ${max} tacos.`;
  /*let bigNum;
  if (sum1 > sum2) {
    bigNum = sum1;
    return `I ate ${bigNum} tacos.`;
  } else {
    bigNum = sum2;
    return `I ate ${bigNum} tacos.`;
  }*/
}

function adoptSmallerDog(weight1, weight2) {
  let { min } = maxMin(weight1, weight2);
  return `I adopted a dog that weighs ${min} pounds.`;

  /*let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }*/
}


function maxMin(num1, num2){
  let max = num2;
  let min = num1; 

  if(num1 > num2){
    max = num1;
    min = num2;
  }

  return {max: max, 
          min: min};
}

let user = {
  name: 'paula',
  id: 123,
  grade: 5
};

let {grade} = user;
console.log(grade);


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};