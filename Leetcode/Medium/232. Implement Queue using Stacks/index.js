/* 
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

// Solution
class MyQueue {
  constructor() {
    this.stack = [];
  }
  push = x => {
    const newStack = []; // to push, we are using 2 stacks here,
    while (this.stack.length > 0) {
      newStack.push(this.stack.pop());
    }
    newStack.push(x);
    while (newStack.length > 0) {
      this.stack.push(newStack.pop());
    }
  };
  pop = () => {
    return this.stack.length > 0 ? this.stack.pop() : undefined;
  };
  peek = () => {
    return this.stack.length > 0
      ? this.stack[this.stack.length - 1]
      : undefined;
  };
  empty = () => {
    return this.stack.length === 0;
  };
}
// push: O(n)
// pop, peek, empty: O(1)
