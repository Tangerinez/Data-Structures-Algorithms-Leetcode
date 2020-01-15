/*How does Javascript work?*/

/* In Chrome, the V8 engine reads the JS that we write and changes it into machine executable instructions for the browser

- The V8 engine contains 2 parts:
  - Memory Heap: Memory allocation
  - Call Stack: Where code is read and executed
*/

// Example
const a = 1; // JS engine remembers that a = 1, which uses up the memory heap
const b = 10;
const c = 100;
// By increasing the number of variables that we have, we increase our chance of a memory leak
// - Unused variable take up space in the memory heap
