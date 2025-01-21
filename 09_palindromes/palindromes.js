const palindromes = function (str) {
    const alphaNumeric = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'p', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '0'];
    let temp = "";
    for(let char of str) {
        if(alphaNumeric.includes(char)) temp += char.toLowerCase();
    }
    let strReversed = "";
    for(let char of str) {
        strReversed = char + strReversed;
    }
    let tempReversed = "";
    for(let char of strReversed) {
        if(alphaNumeric.includes(char)) tempReversed += char.toLowerCase();
    }
    return temp === tempReversed;
};

// Do not edit below this line
module.exports = palindromes;
