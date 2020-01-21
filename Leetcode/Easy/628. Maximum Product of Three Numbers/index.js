/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1)
Input: [1,2,3]
Output: 6
 

// Example 2)
Input: [1,2,3,4]
Output: 24
*/

// Sorting solution - sort the array first;
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b); // sort from smallest to largest
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1], // 2 negatives * max value
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3] // last 3 values
  );
};
// Runtime Complexity: O(nlogn)
// Space Complexity: O(1)
