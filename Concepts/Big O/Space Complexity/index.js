/* 
When a program executes, it either uses the heap or the stack.
    - Heap: Store variables that we assign
    - Stack: Keep track of function calls

What causes Space Complexity?
- Variables
- Data Structures
- Function Calls
- Allocations
*/

// Example 1
const booooo = n => {
  for (let i = 0; i < n.length; i++) {
    console.log("Boo!");
  }
};

booooo([1, 2, 3, 4, 5]); // Space Complexity of O(1)

// Example 2
const arrayOfHiNTimes = n => {
  let hiArray = []; // Created a new array data structure
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; // filled array with n loops; each item is an additional memory space n times
  }
  return hiArray;
};

arrayOfHiNTimes(6); // Space Complexity of O(n)
