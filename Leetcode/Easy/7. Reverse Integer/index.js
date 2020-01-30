/* 
Given a 32-bit signed integer, reverse digits of an integer.

// Example 1)
Input: 123
Output: 321

// Example 2)
Input: -123
Output: -321

// Example 3)
Input: 120
Output: 21
*/

// Optimal Solution to check for overflow
var reverse = function(x) {
  const reversed =
    parseInt(
      Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};

// My Solution
var reverse = function(x) {
  return (
    parseInt(
      Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x)
  );
};
