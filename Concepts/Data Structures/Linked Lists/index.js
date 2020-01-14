/*
Linked lists consist of nodes, with each node consisting of the value of the data, and a pointer to the next node
    - Pointer is a reference to another place in memory
    - First node is called the "head"
    - Last node is called the "tail" => last arrow points to null

Javascript does NOT have built in linked lists. You MUST BUILD one.

Pros:
- Start at head, and traverse the list until you get to your item of interest => O(n)
    - Traversal vs. Iterating: We don't know how long the list is, which is why we call it "Traversal"
- Linked lists and nodes are scattered all over memory (similar to hash tables), unlike array element which are adjacent in memory
- Deleting nodes is easy
- Linked Lists have an order, unlike hash tables
    - You can have sorted data


Prepend: O(1) => add item to beginning of Linked List
Append: O(1) => add item to end of Linked List
Lookup: O(n) => same as traversal
Insert: O(n)
Delete: O(n)


Singly vs. Doubly Linked Lists
- Singly:
        - Less memory
        - Faster runtime with delete and insert
        - Cannot be traversed in reverse
        - Use when memory is limited, and when main goal is fast insertion + deletion
- Doubly:
        - Traversed both from front or the back
        - Easy for deletion + insertion
        - More memory
        - More complex
        - Good when there's not much limitation on memory, and when you want to search for elements
    
*/

// Ex)
const basket = ["apples", "grapes", "pears"];

// we want a linked list: apples => grapes => pears
/*
    apples
    8947 ---> grapes
              8742 ---> pears
                        372 ---> null
*/

// Javascript Example of a Pointer
let obj1 = { a: true };
let obj2 = obj1; // Pointer => Reference
obj1.a = "booya";
delete obj1;
console.log(obj1); // reference error - no obj1
console.log(obj2); // { a: true }

// Example - Singly Linked List
// 10 ---> 5 ----> 16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append = value => {
//     const newNode = new Node(value);
//     this.tail.next = newNode; // makes the most recent "next" value, or last value => { value: value, next: null}
//     this.tail = newNode; // different than above
//     this.length++;
//   };

//   prepend = value => {
//     const newNode = new Node(value);
//     newNode.next = this.head; // pointer
//     this.head = newNode; // different than above
//     this.length++;
//   };

//   printList = () => {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next; // traverses down the list by going to the next value
//     }
//     return array;
//   };

//   insert = (index, value) => {
//     const newNode = new Node(value);
//     // check params
//     if (index >= this.length) {
//       // if index is greater than the length, just add it to the end of the list
//       return this.append(value);
//     }
//     const leaderNode = this.traverseToIndex(index - 1); // we want to get to the this.next node right before our index (index-1), because this node will be the "leader"
//     // O(n)
//     const holdingPointer = leaderNode.next; // this is the reference to the current value at our index of interest!
//     leaderNode.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//   };

//   traverseToIndex = index => {
//     // check params
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       // O(n)
//       // traverse nodes until the counter reaches the index
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode; // return the current node at our index of interest
//   };

//   remove = index => {
//     // check params
//     const leaderNode = this.traverseToIndex(index - 1); // O(n)
//     const unwantedNode = leaderNode.next; // node that I don't want
//     leaderNode.next = unwantedNode.next; // pointer from unwanted node to the next node
//     this.length--;
//   };
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.prepend(3);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());

// Example - Doubly Linked List
// New node links to the node before it AND after it
// Allow us to traverse our list backwards
// Cons - More memory
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append = value => {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; // makes the most recent "next" value, or last value => { value: value, next: null}
    this.tail = newNode; // different than above
    this.length++;
  };

  prepend = value => {
    const newNode = new Node(value);
    newNode.next = this.head; // pointer { value: value, next: this.head, prev: null}
    this.head.prev = newNode;
    this.head = newNode; // different than above
    this.length++;
  };

  printList = () => {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next; // traverses down the list by going to the next value
    }
    return array;
  };

  insert = (index, value) => {
    const newNode = new Node(value);
    // check params
    if (index >= this.length) {
      // if index is greater than the length, just add it to the end of the list
      return this.append(value);
    }
    const leaderNode = this.traverseToIndex(index - 1); // we want to get to the this.next node right before our index (index-1), because this node will be the "leader"
    // O(n)
    const follower = leaderNode.next; // this is the reference to the current value at our index of interest!
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  };

  traverseToIndex = index => {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      // O(n)
      // traverse nodes until the counter reaches the index
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode; // return the current node at our index of interest
  };

  remove = index => {
    // check params
    const leaderNode = this.traverseToIndex(index - 1); // O(n)
    const unwantedNode = leaderNode.next; // node that I don't want
    leaderNode.next = unwantedNode.next; // pointer from unwanted node to the next node
    this.length--;
  };
}
