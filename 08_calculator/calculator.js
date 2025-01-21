const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length > 0)
	  return arr.reduce((sum, num) => sum + num);
  else
    return 0;
};

const multiply = function(arr) {
  if(arr.length > 0)
	  return arr.reduce((product, num) => product * num);
  else
    return 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if(n === 0) return 1;
	let temp = [];
  for(let i = 1; i <= n; i++){
    temp.push(i);
  }
  return multiply(temp);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
