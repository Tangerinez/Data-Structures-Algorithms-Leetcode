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
