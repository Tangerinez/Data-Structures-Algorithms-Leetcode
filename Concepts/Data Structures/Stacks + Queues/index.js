/*
Both are Linear data structures that allow us to traverse sequentially (only 1 data item reached)
- Usually can only access the first or last element

Stacks:
- LIFO (Last item in is the First out)
Ex) Browser History

- lookup: O(n)
- pop: O(1) => Remove item at top of the stack
- push: O(1) => Add a plate
- peek: O(1) => view the top-most item


Queues:
- FIFO (First item in the queue is first one out)
Ex) Waitlist app, Uber/Lyft, Printers

- lookup: O(n)
- enqueue: O(1) => add to the queue (end of the queue)
- dequeue: O(1) => remove from the queue (beginning of queue)
- peek: O(1) => view the first item

Why would you not want to use an array to build a queue?
- Very inefficient
- With arrays, you have to shift over the indices if you remove an item
*/

// Exercise - Stacks
/* Linked Lists or Arrays?
    - Arrays:
        - Cache locality (items in memory are next to each other => faster to access)
        - Arrays have certain amount of memory
            - Once they run out of memory they have to double up their space to create more memory
    - Linked Lists:
        - Scattered items in memory
        - Extra memory 
        - More dynamic memory (you can keep adding things to the list and the memory will dynamically allocate itself)
*/

// Exercise - Queues
/* Linked Lists or Arrays? 
    - Always use a Linked List!
        - With Linked List, you don't have to shift over indices every time you add/remove an item from the Queue 
        - O(1)
*/

// Example - Stack Implementation using Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek = () => {
    return this.top;
  };
  push = value => {
    const newNode = new Node(value); // new node being added
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // After the first value, the bottom value will always remain the same
      const holdingPointer = this.top; // reference to the top node
      this.top = newNode; // change top node to be the new node
      this.top.next = holdingPointer;
    }
    this.length++;
  };
  pop = () => {
    if (this.length === 0) {
      return this.head;
    }
    if (this.bottom === this.top) {
      // length of 1
      this.bottom = null; // this becomes null since length will be decreased to 0
    }
    const holdingPointer = this.top; // we HAVE to hold a pointer to this element, or else it will get lost in memory!
    this.top = this.top.next;
    this.length--;
  };
}

// Example - Stack Implementation using Arrays
class Stack2 {
  constructor() {
    this.array = [];
  }
  peek = () => {
    return this.array[this.array.length - 1];
  };
  push = value => {
    this.array.push(value);
  };
  pop = () => {
    this.array.pop();
  };
}

// Example - Queue Implementation using Linked Lists
class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek = () => {
    return this.first.value;
  };
  enqueue = value => {
    const newNode = new Node2(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // the last in line is now pointing to newNode
      this.last = newNode; // the new Node is now last
    }
    this.length++;
  };
  dequeue = () => {
    if (this.length === 0) {
      return null;
    }
    if (this.first === this.last) {
      // length will decrease by 1 after dequeue
      this.last = null;
    }
    const holdingPointer = this.first; // we HAVE to hold a pointer to this element, or else it will get lost in memory!
    this.first = this.first.next; // becomes the new first element
    this.length--;
  };
}

const myQueue = new Queue();
myQueue.enqueue("First");
console.log(myQueue);
myQueue.enqueue("Second");
console.log(myQueue);
myQueue.enqueue("Third");
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
