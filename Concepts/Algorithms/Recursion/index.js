/* 
A function that calls itself inside of it
- One of the biggest problems with recursion is the possibility of stack overflow

*Every recursive function needs to have a base case (a stop case)

Steps
    1. Identify the base case
    2. Identify the recursive case
    3. Get closer and closer and return when needed. Usually you have 2 returns, 1 for base case and 1 for recursive case

Runtime Complexity: O(2^n)
    - For every additional element, we have an increase in function calls exponentially

Pros:
    - Dry (Not repeating yourself)
    - Readability
Cons:
    - Large Stack (possibility of stack overflow) => More space complexity
    - Traditional recursion has slower runtime complexity

When to use Recursion
    - Use recursion when you're unsure about how deep they are (not sure about how many loops it'll take to iterate through them)
        - In JS with ES6, it allows recursions to be called without increasing the call stack (Safari) => Tail-Call Optimization
    - *** When you're using a tree or converting something into a tree ***
        - Divide into a number of sub-problems that are smaller instances of the same problem
        - Each instance of the sub-problem is identical in nature
        - The solutions of each sub-problem can be combined to solve the main problem
    - Divide and Conquer
*/

// Example of implementing a base case
// let counter = 0;
// const inception = () => {
//   if (counter > 3) {
//     return "Done!";
//   }
//   counter++;
//   //   inception(); => incorrect, will return undefined
//   return inception(); // correct
// };
// inception(); // Done!
// // If we call inception() without the return, then we're basically calling...
// inception(inception(inception(inception("done")))); // which is undefined

/* Example Problem - Factorial */
// Write 2 functions that find the factorial of any number. One should use recursion, and the other should just use a for loop.
const findFactorialRecursive = number => {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
};
// console.log(findFactorialRecursive(5));
// Runtime Complexity: O(n)

const findFactorialIterative = number => {
  let iterativeCounter = 1;
  if (number === 1) {
    return iterativeCounter;
  }
  for (let i = number; i > 1; i--) {
    iterativeCounter = iterativeCounter * i;
  }
};
// // Runtime Complexity: O(n)

/* Example Problem - Fibonacci Sequence */
/* Given a number N, return the index value of the Fibonacci sequence, where the sequence is...
0, 1, 1, 2, 3, 5, 8, 13, 21...
The pattern of the sequence is that each value is the sum of the 2 previous values.

Ex) N=5 ---> 5
*/

const fibonacciIterative = n => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    // O(n)
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
// console.log(fibonacciIterative(8));

const fibonacciRecursive = n => {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // both of these will trickle down until many cases of the base case occur. Thus, the end sum is the result of adding many fib(1) and fib(2) together
  // O(2^n) => Exponential Time (Slow than nested for loops!)
};
// console.log(fibonacciRecursive(8));
// Anything you can do with recursion can be done iteratively (loop)

// Recursion Exercise - Implement a function that reverses a string using iteration... and then recursion
const reverseStringRecursion = str => {
  if (!str) {
    return "";
  }
  let lastLetter = str.split("").pop();
  str = str.substring(0, str.length - 1);
  return lastLetter + reverseStringRecursion(str);
};
// console.log(reverseStringRecursion("hello")); // olleh

const reverseStringIteration = str => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
};
// console.log(reverseStringIteration("hello")); // olleh
