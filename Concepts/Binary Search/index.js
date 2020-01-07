// Iterative function to implement Binary Search (Sorted Array)
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

let iterativeFunction = function(arr, x) {
  let start = 0;
  let end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
