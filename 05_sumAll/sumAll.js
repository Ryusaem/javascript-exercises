const sumAll = function (begin, end) {
  if (begin < 0 || end < 0) return "ERROR";
  if (typeof begin !== "number" || typeof end !== "number") return "ERROR";
  if (begin > end) [begin, end] = [end, begin];

  let number = Array.from({ length: end - begin + 1 }, (_, idx) => begin + idx);

  return number.reduce((acc, currentValue) => acc + currentValue, 0);
};
console.log(typeof "s");
console.log(typeof 1);
// Do not edit below this line
module.exports = sumAll;
