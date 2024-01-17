const convertToCelsius = function (fahrenheit) {
  return Math.round((5 / 9) * (fahrenheit - 32) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((9 / 5) * celsius + 32) * 10) / 10;
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
