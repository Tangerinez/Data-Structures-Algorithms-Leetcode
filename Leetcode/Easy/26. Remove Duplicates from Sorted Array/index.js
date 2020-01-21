/*
Given a sorted array nums, remove the duplicates in-place such that each element 
appear only once and return the new length.

Do not allocate extra space for another array, you must do this by 
modifying the input array in-place with O(1) extra memory.

// Example 1)
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

// Example 2)
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
*/

// Faster Solution
const removeDuplicates = nums => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let i = 0; // how many times you've removed a duplicate
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// Runtime Complexity: O(n)
// Space Complexity: O(1)

// My Solution
const removeDuplicates = nums => {
  for (i = 0; i < nums.length; i++) {
    //Next number is identical to current one
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};
// Runtime Complexity: O(n^2)
// Space Complexity: O(n)
