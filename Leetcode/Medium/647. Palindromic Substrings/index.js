/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
  let length = s.length;
  let ans = 0;
  for (let mid = 0; mid <= 2 * length - 1; mid++) {
    let left = mid / 2;
    let right = left + (mid % 2);
    while (left >= 0 && right < length && s.charAt(left) === s.charAt(right)) {
      ans++;
      left--;
      right++;
    }
  }
  return ans;
};

// O(n^2)
