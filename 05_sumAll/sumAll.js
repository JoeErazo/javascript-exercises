const sumAll = function(num1, num2) {
    if(num1 !== Math.floor(num1) || num2 !== Math.floor(num2) ||
        num1 < 0 || num2 < 0){
        return "ERROR";
    }
    let sum = 0;
    let min, max;
    if(num1 < num2){
        min = num1;
        max = num2;
    }
    else {
        min = num2;
        max = num1;
    }
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
