/* 
Insertion sort is a simple sorting algorithm that builds the final sorted array 
(or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

Time Complexity: the worst case O(n2) and best case O(n)
 */

const insertionSort = arr => {
  let i,
    arrayLength = arr.length,
    el,
    j;

  for (i = 1; i < arrayLength; i++) {
    el = arr[i]; // current value
    j = i;

    while (j > 0 && arr[j - 1] > el) {
      // if the index isn't 0
      // if the value to left is bigger, move the current value to the left by 1 indices
      arr[j] = arr[j - 1];
      // move the value to the left of the current value into it's place
      j--;
    }
    arr[j] = el; // sets the current value in the appropriate indices once the loop breaks
  }
  return arr;
};
