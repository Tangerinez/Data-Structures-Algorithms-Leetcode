/* 
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.
*/

// Solution #1 - Faster (Binary Search)
const isPerfectSquare = num => {
  var low = 1;
  var high = num;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2); // midpoint rounded down
    var temp = mid * mid;
    if (temp === num) {
      return true;
    } else if (temp > num) {
      high = mid - 1; // Look in left half of midpoint
    } else {
      low = mid + 1; // Look in right half of midpoint
    }
  }
  return false;
};

// Solution #2 - Slower
var isPerfectSquare = function(num) {
  for (var i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};
