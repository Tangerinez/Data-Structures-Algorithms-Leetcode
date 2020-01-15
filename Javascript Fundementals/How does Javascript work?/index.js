/*How does Javascript work?*/

/* In Chrome, the V8 engine reads the JS that we write and changes it into machine executable instructions for the browser

- The V8 engine contains 2 parts:
  - Memory Heap: Memory allocation
  - Call Stack: Where code is read and executed (FILO)
*/

// Example
const a = 1; // JS engine remembers that a = 1, which uses up the memory heap
const b = 10;
const c = 100;
// By increasing the number of variables that we have, we increase our chance of a memory leak
// - Global variables are bad because if unused, they can take up space in the memory heap

// Call Stack?
console.log("1"); // Reads first line => Gets put into call stack => Runs the code => Remove it from call stack
console.log("2"); // Reads second line => Gets put into call stack => Runs the code => Remove it
console.log("3");

// More complex call stack example
const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};
one();
/* Call Stack Order of the above function:
console.log("4") => prints out 4, remove it from call stack
two() => remove two()
one() => remove one()
*/

// JS is a single threaded language that can be "non-blocking"
// Single threaded: Only 1 call stack
// Synchronous Programming: Executes code line by line in order. Second line of code doesn't start until first line of code starts

// What is stack overflow?
// When the call stack is overflowing

// Stack Overflow Example
function foo() {
  foo();
}
foo();
// Stack overflow caused by recursion.
// foo() gets added to the call stack endlessly

// Javascript can be "non-blocking"
// Asynchronous Programming

// Example
console.log("1");
setTimeout(() => {
  console.log("2");
});
console.log("3");
// Output: 1 3 2

/* How can Asynchronous Programming work?
In order for JS to run, we need the V8 engine AND Javascript Run-Time Environment
    - JS Run-Time Environment includes:
        - Web APIs (what the browser gives us to use)
            - DOM (document)
            - AJAX (XMLHttpRequest)
            - Timeout (setTimeout)
        - Callback Queue (Use callback functions!)
            - onClick
            - onLoad
            - onDone
        - Event Loop
     */

// Same example as above
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");
/* 
// Call Stack
console.log("1");
console.log("3");
callback();
console.log("2");     // This came from the callback queue => the callback() was run

Web API
setTimeout(), 2000 => pops setTimeout() out of the call stack, and since setTimeout() is not in call stack anymore, it goes to the next item

Callback Queue
callback() => Ready to run since setTimeout() time has passed

Event Loop    // If call stack is empty, moves callbacks back into call stack
*/

// Another tricky example
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
// Output: 1 3 2 => setTimeout() still got entered into Web APIs, Callback Queue, and Event Loop. By the time all of that happened, the call stack had already finished logging 3
