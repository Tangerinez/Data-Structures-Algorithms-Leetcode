/* 
Insertion sort is a simple sorting algorithm that builds the final sorted array 
(or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

// Useful for when you know/think the list is almost sorted!
// *** Really good for small sets of data!!! ***

Runtime Complexity: 
  - Best Case (When the list is almost sorted): O(n)
  - Worst Case: O(n^2)
Space Complexity: O(1)
 */

// Insertion Sort Implementation
const numbers = [99, 44, 6, 2, 1, 5, 63, 0];
const insertionSort = arr => {
  let arrayLength = arr.length;
  for (let i = 1; i < arrayLength; i++) {
    let currentValue = arr[i]; // reference that's holding the current value
    let j = i;

    while (j > 0 && arr[j - 1] > currentValue) {
      // if the index is greater than 0
      // if the value to left (arr[j-1]) is bigger
      arr[j] = arr[j - 1];
      // move the higher left value into the lower value's place - the original indices of this left value [j-1] will be replaced by the smaller value
      j--; // keeps subtracting 1 from j until it becomes 0, where it then exits out of the loop
    }
    arr[j] = currentValue; // moves the reference to the current value into the new indices that it's in
  }
  return arr;
};
insertionSort(numbers);
console.log(numbers);
