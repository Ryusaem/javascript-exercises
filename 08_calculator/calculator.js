const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

// const sum = function (...args) {
//   // console.log(...args);
//   return [...args].reduce((acc, currentValue) => acc + currentValue);
// };

const sum = function (arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
};

const multiply = function (args) {
  return args.reduce((acc, currentValue) => acc * currentValue);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a === 0) return 1; // Adding this condition to handle the case when a is 0
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
console.log(sum([]));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
