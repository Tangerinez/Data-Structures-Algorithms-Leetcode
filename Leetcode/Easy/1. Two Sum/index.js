/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

// Optimized Solution - Hash Table
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0) {
      // if the complement exists
      return [hash[nums[i]], i];
    }
    hash[target - nums[i]] = i; // complement property for that number generated
  }
};
// Runtime Complexity: O(n)
// Space Complexity: O(n)

// My Solution - Hash Table
const twoSum2 = (nums, target) => {
  let hash = {};
  let pair = [];
  let duplicateIndex = [];
  let countDuplicate = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!hash.i) {
      let item = nums[i];
      hash[item] = true;
    }
  }
  console.log(hash);
  for (let j = 0; j <= nums.length; j++) {
    complement = target - nums[j];
    if (countDuplicate === 2) {
      return duplicateIndex;
    } else if (nums[j] * 2 === target) {
      duplicateIndex.push(j);
      countDuplicate++;
    } else if (hash[complement]) {
      pair.push(nums.indexOf(nums[j]));
      pair.push(nums.indexOf(complement));
      break;
    }
  }
  return pair;
};
// Runtime Complexity - O(n)
// Space Complexity - O(n)
console.log(twoSum([3, 2, 4], 6));
