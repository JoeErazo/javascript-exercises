const convertToCelsius = function(tempInF) {
  return (Math.round(((5 / 9) * (tempInF - 32)) * 10)) / 10;
};

const convertToFahrenheit = function(tempInC) {
  return (Math.round(((9 / 5) * tempInC + 32) * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
