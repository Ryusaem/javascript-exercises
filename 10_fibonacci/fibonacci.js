const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n === 0) return 0;

  if (typeof n !== "number") n = parseInt(n);

  let a = 0,
    b = 1,
    fib = 1;
  for (let i = 2; i <= n; i++) {
    // console.log(`index: ${i}`);
    // console.log(`fib (before): ${fib}`);
    fib = a + b;
    // console.log(`fib (after): ${fib}`);
    // console.log(`a (before): ${a}`);
    a = b;
    // console.log(`a (after): ${a}`);
    // console.log(`b (before): ${b}`);
    b = fib;
    // console.log(`b (after): ${b}`);
  }
  return fib;
};

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
