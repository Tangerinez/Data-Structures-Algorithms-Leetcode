/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const maxSubArray = arr => {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    prev = Math.max(prev + arr[i], arr[i]);
    max = Math.max(max, prev);
  }
  return max;
};
