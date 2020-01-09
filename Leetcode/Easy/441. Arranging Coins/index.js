/* 
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.
*/

// Optimized Solution - Faster
var arrangeCoins = function(n) {
  var rowsToPrint = 0;

  while (rowsToPrint < n) {
    n -= ++rowsToPrint; // pre-increment rowsToPrint every iteration
  }
  return rowsToPrint;
};

// My Solution - Slower
var arrangeCoins = function(n) {
  let stepsLeft = n;
  for (let i = 0; i <= n; i++) {
    if (stepsLeft - i < 0) {
      return i - 1;
    } else if (stepsLeft - i === 0) {
      return i;
    } else {
      stepsLeft -= i;
    }
  }
};
