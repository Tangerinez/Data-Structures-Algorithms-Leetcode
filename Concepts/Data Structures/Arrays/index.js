// lookup: O(1)
// push: O(1)
// insert: O(n)
// delete: O(n)

// For string questions, use .split("") to turn them into an array of substrings

// Example
const strings = ["a", "b", "c", "d"]; // To store 4 items, that is 4*4 = 16 bytes of storage
strings[2]; // Go to array called strings, and grab the 3rd item frmo where the array is stored in memory

strings[2]; // O(1)
strings.push("e"); // O(1)
strings.pop(); // O(1)
strings.unshift("e"); // O(n) => Maybe not the best data structure for adding items at the beginning?
strings.splice(2, 0, "alien"); // O(n) => Once again, maybe not the best data structure for insertion?

/* Static Arrays */
/*
- Fixed in size, and you must SPECIFY number of elements your array will hold ahead of time
*/

/* Dynamic Arrays */
/*
Allow us to copy and rebuild an array at a new location with/without more memory
- In Javascript, memory is automatically allocated based on array size
- Dynamic arrays' push/append function can be O(n) instead of O(1)!
    - This is because the CPU loops over the array, copies it, and move it to a new location within RAM with 2x the amount of space
*/

/* Implementing an Array - For demonstrating runtime with built-in JS methods */
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete lastItem; // delete keyword removes a property from an object
    this.length--;
    return this.data;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// const newArray = new MyArray(); // instantiate MyArray object
// newArray.push("hi"); // { 0: "hi" }
// newArray.push("you"); // { 0: "hi", 1: "you" }
// newArray.pop(); // { 0: "hi"}
// newArray.delete(0); // { }
