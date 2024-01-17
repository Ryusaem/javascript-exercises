const repeatString = function (s, number) {
  if (number <= -1) return "ERROR";

  let result = "";
  for (let i = 0; i < number; i++) {
    result += s;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
