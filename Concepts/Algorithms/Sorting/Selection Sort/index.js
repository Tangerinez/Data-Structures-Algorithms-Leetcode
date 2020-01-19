/* 
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 

Runtime Complexity: O(n^2)
Space Complexity: O(1)
*/

// Selection Sort Implementation
const numbers = [99, 44, 6, 2, 1, 5, 63, 0];
const selectionSort = arr => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = i; // setting the current index as the index where the smallest number will be
    let temp = arr[i]; // reference to the value we're swapping
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        // if this number is smaller than the number at the index we're at...
        minIndex = [j]; // Change the minimum index to the index of this new number
      }
    }
    arr[i] = arr[minIndex]; // swap values
    arr[minIndex] = temp;
  }
};
selectionSort(numbers);
console.log(numbers);
