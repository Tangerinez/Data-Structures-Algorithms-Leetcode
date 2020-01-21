/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount 
of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses 
have security system connected and it will automatically contact the police if two adjacent houses were 
broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1)
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

// Example 2)
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

// DP Solution
const rob = nums => {
  // Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
  // Reason for above comment is because the historical sum is at [i-1] and [i-2]
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]); // if 2 values, just return the larger one

  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
    maxAtTwoBefore = maxAtOneBefore; // maxAtTwoBefore becomes [i-2] for the next iteration of the loop
    maxAtOneBefore = maxAtCurrent; // maxAtOneBefore becomes [i-1] for the next iteration of the loop
  }
  return maxAtOneBefore;
};
// Runtime Complexity: O(n)
// Space Complexity: O(1)
