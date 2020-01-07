/* 
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
*/

// Faster Solution - Binary Search
var mySqrt = function(x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1; // Square Root of each X must happen within [1, x/2 + 1]
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right; // this tests for the input 0 and other numbers
};

// My Revised Solution - Binary Search
var mySqrt = function(x) {
  var low = 0;
  var high = x;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x && Math.pow(mid, 2) + 2 * mid + 1 > x) {
      return mid;
    } else if (mid * mid > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

// My Solution - Slower
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x));
};
