/* 
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.
*/

// Faster Solution
var judgeSquareSum = function(c) {
  var root = Math.floor(Math.sqrt(c));
  for (var i = root; i >= 0; i--) {
    if (Math.sqrt(c - i * i) % 1 === 0) return true;
  }
  return false;
};

// My Solution - Slower
var judgeSquareSum = function(c) {
  var sum = 0;
  var low = 0;
  var hi = Math.floor(Math.sqrt(c));

  while (low <= hi) {
    sum = low * low + hi * hi;
    if (sum === c) {
      return true;
    } else if (sum > c) {
      hi--;
    } else {
      low++;
    }
  }
  return false;
};
