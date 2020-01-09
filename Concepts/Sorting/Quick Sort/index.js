// Helper function to swap array items
const swap = (array, leftIndex, rightIndex) => {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
};

// Helper function to partition array elements
const partition = (array, leftIndex, rightIndex) => {
  let pivot = array[Math.floor((rightIndex + leftIndex) / 2)], // middle element
    i = leftIndex, //left pointer
    j = rightIndex; //right pointer
  while (i <= j) {
    while (array[i] < pivot) {
      // if number to left of pivot is smaller, move right by 1 index
      i++;
    }
    while (array[j] > pivot) {
      // if number to right of pivot is bigger, move left by 1 index
      j--;
    }
    if (i <= j) {
      // once the indices are both elements being swapped are determined
      //
      swap(array, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
};

// Recursive quicksort function
const quickSort = (array, leftIndex, rightIndex) => {
  let currentIndex;
  if (array.length > 1) {
    currentIndex = partition(array, leftIndex, rightIndex); //index returned from partition
    if (leftIndex < currentIndex - 1) {
      // more elements on the left side of the pivot
      quickSort(array, leftIndex, currentIndex - 1);
    }
    if (currentIndex < rightIndex) {
      // more elements on the right side of the pivot
      quickSort(array, currentIndex, rightIndex);
    }
  }
  return array;
};
