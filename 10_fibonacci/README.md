# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```

Certainly! Here's an algorithmic description of your `fibonacci` function:

### Algorithm for the Fibonacci Function

**Function**: `fibonacci(n)`

**Purpose**: Calculates the nth number in the Fibonacci sequence.

**Input**: `n` - an integer or a string that can be converted to an integer, representing the position in the Fibonacci sequence.

**Output**: The nth Fibonacci number, or "OOPS" if `n` is negative.

**Procedure**:

1. **Input Validation**:

   - If `n` is less than 0, return "OOPS".
   - If `n` is equal to 0, return 0.
   - If `n` is not a number, convert `n` to an integer.

2. **Initialization**:

   - Initialize three variables: `a` = 0, `b` = 1, and `fib` = 1.
     - `a` and `b` are the first two numbers in the Fibonacci sequence.
     - `fib` will store the current Fibonacci number.

3. **Fibonacci Calculation**:

   - Start a loop that iterates from 2 to `n` (inclusive).
     - In each iteration:
       - Calculate the new Fibonacci number by adding `a` and `b`.
       - Update `a` to be the value of `b`.
       - Update `b` to be the value of the new Fibonacci number (`fib`).

4. **Return Result**:
   - After the loop, `fib` contains the nth Fibonacci number.
   - Return `fib`.

**Example**:

- `fibonacci("8")` will convert "8" to the integer 8 and then calculate the 8th Fibonacci number, which is 21.

This algorithm efficiently computes the Fibonacci number at the nth position using an iterative approach. The use of a loop instead of recursion avoids potential stack overflow issues for large `n` and is more efficient in terms of time complexity.
