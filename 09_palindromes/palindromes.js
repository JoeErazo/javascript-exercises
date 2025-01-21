const palindromes = function (str) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
    const temp = str
                .toLowerCase()
                .split("")
                .filter((char) => alphanumeric.includes(char))
                .join("");
    const tempReversed = temp.split("").reverse().join("");
    return temp === tempReversed;
};

// Do not edit below this line
module.exports = palindromes;
