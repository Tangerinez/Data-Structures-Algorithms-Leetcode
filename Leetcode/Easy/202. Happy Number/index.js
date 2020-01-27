/* 
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  let cache = new Set();

  function findNextNumber(num) {
    if (num === 1) return true;

    if (cache.has(num)) return false;

    cache.add(num);

    let numArray = num.toString().split("");

    let squaredSum = numArray.reduce((total, digit) => total + digit ** 2, 0);

    return findNextNumber(squaredSum);
  }

  return findNextNumber(n);
};
