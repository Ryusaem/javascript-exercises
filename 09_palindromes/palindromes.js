const palindromes = function (string) {
  let re = /[A-Za-z0-9]/gi;
  let s = string.match(re);
  let length = s.length;
  return (
    s
      .join("")
      .toLowerCase()
      .slice(0, length / 2) ===
    s
      .join("")
      .toLowerCase()
      .slice(length % 2 === 0 ? length / 2 : length / 2 + 1)
      .split("")
      .reverse()
      .join("")
  );
};

// Do not edit below this line
console.log(palindromes("Racecar!!!"));
module.exports = palindromes;
