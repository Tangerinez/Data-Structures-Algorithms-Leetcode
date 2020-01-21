/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

// Example 1)
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

// Example 2)
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// Memoized Solution
let cache = {};
const climbStairs = n => {
  if (n < 3) return n;
  if (n in cache) {
    // check for
    return cache[n];
  }
  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return cache[n];
};
// Runtime Complexity: O(n)
// Space Complexity: O(n)

// Bottom-Up Approach
// Total number of ways to reach the i step is equal to the sum of ways reaching (i-1) step and (i-2) step
// i is just the ith fibonacci number
const climbStairs = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let arr = [1, 2]; // We cache the value in this array
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};

// Runtime Complexity: O(n)
// Space Complexity: O(1)
