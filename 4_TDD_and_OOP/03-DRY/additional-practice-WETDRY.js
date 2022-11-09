const repeatEachCharThrice = function (str) {
    let repeat = 3;
    let result = "";

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        for(let j = 0; j < repeat; j++){
            result += char;
        }
    }

    return result;
    /*let newStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        newStr += char + char + char;
    }

    return newStr;*/
};

console.log(repeatEachCharThrice("Hello")); // HHHeeellllllooo



const checkOddElements = function (nums) {
    const result = [];

    nums.forEach(num => {
        result.push(num % 2 === 1);
    });
    
    return result;
    /*for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 === 0) {
            result.push(false);
        } else if (num % 2 === 1) {
            result.push(true);
        }
    }
    return result;*/
}

console.log(checkOddElements([5, 2, 3, 6, 4, 1])); // [true, false, true, false, false, true]