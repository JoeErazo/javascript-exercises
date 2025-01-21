const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    else if(n == 0) return 0;
    else{
        let lastTwo = [0, 1];
        for(let i = 1; i < n; i++){
            let temp = lastTwo[0] + lastTwo[1];
            lastTwo.shift();
            lastTwo.push(temp);
        }
        return lastTwo[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
