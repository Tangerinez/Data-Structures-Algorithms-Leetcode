/* 
Divide and Conquer Algorithm It divides input array in two halves that calls itself for the two halves and then merges the two sorted halves.
// A stable sorting algorithm - if you have repeating elements (6,6), it will keep the original order
    - Insertion sort, Merge Sort, Bubble Sort
    - Ex) List of first and last name => If two people have same first name but different last name, then we don't we the same first names to get mixed up!

Runtime Complexity: O(nlogn)
    - We don't have to compare every value with every value. Rather, we compare each value's local lists to each other
Space Complexity: O(n)
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = array => {
  // this function splits the arrays until halfs every time
  if (array.length === 1) {
    // array keeps getting split into left and right sections until length of array is 1 => then it won't be split anymore
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2); // middle index
  const left = array.slice(0, middle); // left array
  const right = array.slice(middle); // right array
  //   console.log("left:", left);
  //   console.log("right:", right);

  return merge(mergeSort(left), mergeSort(right)); // call mergeSort again to divide array
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    // while loop checks for if we've fully iterated through one of the arrays
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const answer = mergeSort(numbers);
console.log(answer);
