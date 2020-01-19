/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

Runtime Complexity: O(n^2) => Using nested loops
Space Complexity: O(1)
*/

// Bubble Sort Implementation
const numbers = [99, 44, 6, 2, 1, 5, 63, 0];

const bubbleSort = array => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // Use nested loops to check for worst case scenario
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
bubbleSort(numbers);
console.log(numbers);
// O(n^2)
