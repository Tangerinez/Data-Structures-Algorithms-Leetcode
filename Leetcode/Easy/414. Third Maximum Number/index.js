/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

// Optimized Solution - Faster
const thirdMax = arr => {
  let max1 = undefined,
    max2 = undefined,
    max3 = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max1 || arr[i] === max2 || arr[i] === max3) {
      continue;
    }

    if (max1 === undefined || arr[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[i];
    } else if (max2 === undefined || arr[i] > max2) {
      max3 = max2;
      max2 = arr[i];
    } else if (max3 === undefined || arr[i] > max3) {
      max3 = arr[i];
    }
  }
  return max3 === undefined ? max1 : max3; // Use Ternary to see if max3 got changed
};

// My Solution - Slower
const thirdMax = nums => {
  let max1 = nums[0];
  let max2 = -Infinity;
  let max3 = -Infinity;

  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === max1 || nums[i] === max2 || nums[i] === max3) {
        continue;
      }
      if (nums[i] > max1) {
        max3 = max2;
        max2 = max1;
        max1 = nums[i];
      } else if (nums[i] > max2) {
        max3 = max2;
        max2 = nums[i];
      } else if (max3 === -Infinity || nums[i] > max3) {
        max3 = nums[i];
      }
    }
  }
  if (max3 === -Infinity) {
    return max1;
  } else {
    return max3;
  }
};
