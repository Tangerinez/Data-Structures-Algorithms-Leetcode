/*
Dynammic Programming is an optmization technique (optimizing using a cache)
    - Basically DP is...
        - Divide & Conquer + Memoization
    - Break down a problem into a collection of sub-problems, solving them just once, and storing their solutions in case the same sub-problem occurs
        - Then, you don't have to complete that sub-problem again since you already have the answer to it cached
    - Do you have something you can cache (store)?

When should/can I use DP?
    - Can be divided into sub-problems
    - Recursive Solution
    - Are there repetitive sub-problems?
    - Memoize sub-problems
*/

/* Example - Fibonacci */
// Un-memoized
const fibonacciUnmemoized = n => {
  if (n < 2) {
    return n;
  }
  return fibonacciUnmemoized(n - 1) + fibonacciUnmemoized(n - 2);
};
// Runtime Complexity: O(2^n)

// Memoized
const fibonacciMemoized = () => {
  let cache = {}; // new variable that takes up space
  return function fib(n) {
    if (n in cache) {
      // if our argument is in cache
      return cache[n];
    } else {
      if (n < 2) {
        // base case
        return n;
      } else {
        // memoization
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};
// Runtime Complexity: O(n)
// Space Complexity: O(n)
const fib = fibonacci();
fib(6); // 8

// Tabulation (Bottom-Up Approach)
const fibonnaciBottomUp = n => {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
};
// Runtime Complexity: O(n)
// Space Complexity: O(1)

/* Another DP Practice Example */
/* Given 3 numbers {1, 3, 5}, we need to tell the total number of ways we can form a number 'N' 
using the sum of the given three numbers. */
// Ex) 6 => 8

// 1. Compute state(n)
/* Ex) Let's say our input is 7
 - 3 ways to reach 7
    - Adding 1 to all possible combinations of state(n = 6)
    - Adding 3 to all possible combinations of state(n = 4)
    - Adding 5 to all possible combinations of state(n = 2)

    => This translates to state(n=7) = state(n=6) + state(n=4) + state(n=2)
    => Which translates to state(n) = state(n-1) + state(n-3) + state(n-5)
*/
const solve = n => {
  if (n < 0) return 0;
  if (n === 1) return 1;
  return solve(n - 1) + solve(n - 3) + solve(n - 5); // O(n^2) => Exponential
};
// We need to memoize this solution to reduce the runtime complexity
let cache = {};
const solve = n => {
  if (n < 0) return 0;
  if (n === 1) return 1;
  if (cache[n]) {
    return cache[n];
  } else {
    cache[n] = solve(n - 1) + solve(n - 3) + solve(n - 5);
    return cache[n];
  }
};
