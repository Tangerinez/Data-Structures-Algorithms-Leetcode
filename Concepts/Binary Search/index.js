// Time Complexity: O

//Binary Search on a Sorted Array (Iterative Approach)
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

let iterativeFunction = function(arr, x) {
  let start = 0;
  let end = arr.length - 1;

  // Iterate while start doesn't meet end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) {
      return true;
    } else if (arr[mid] < x) {
      // if value is too small
      start = mid + 1; // move right by increasing start index by 1
    } else {
      // if value too big
      end = mid - 1; // move left by decreasing end index by 1
    }
  }
  return false;
};

// Binary Search on a Sorted Array (Recursive Approach)
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

let recursiveFunction = function(arr, x, start, end) {
  // Base Condition
  if (start > end) {
    return false;
  }
  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  // Compare mid with given key x
  if (arr[mid] === x) {
    return true;
  }
  // if element is too high, move left by decreasing mid index by 1 and setting it as the end parameter
  if (arr[mid] > x) {
    return recursiveFunction(arr, x, start, mid - 1);
  }
  // if element is too low, move right by increasing mid index by 1 and setting it as the start parameter
  else {
    return recursiveFunction(arr, x, mid + 1, end);
  }
};
