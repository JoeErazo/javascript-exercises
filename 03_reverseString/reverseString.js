const reverseString = function(string) {
    let output = "";
    for(let i = 0; i < string.length; i++){
        output = string.charAt(i) + output;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
