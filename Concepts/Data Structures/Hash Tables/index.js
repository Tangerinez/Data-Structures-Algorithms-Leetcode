/* 
Objects in JS are a type of Hash Table
- With a Hash table, you get to set a key-value pair
- Fast data access:
    - Takes input, generates hash value, and converts it to an index/address space
    - All we need to do is give the hash function a key!

insert: O(1)
lookup: O(1)
delete: O(1)
search: O(1)
*/

// Ex) basket.grapes = 10000
// key = "grapes"
// Hash Function stores key and value into memory address

/* Hash Function */
// A function that generates a value of fixed length for each input
// Ex) "hello" => "5d12398sadkljda23kljdsa321";
// You cannot find the input from the output value of the input!
// Each unique input has a different output value (case-sensitive!)
// Idempotent: Function gives the same output when given the same input

/* Cons of Hash Functions */
// Randomly assigns space and memory
// Nothing tells Hash function to evenly distribute until all addresses/memory spaces are full
// This is called Collision
// For every Collision, Runtime Complexity becomes slower by O(n)

// Example
let user = {
  // JS only allows stringified keys
  age: 54,
  name: "Kylie",
  magic: true,
  scream: () => {
    console.log("ahhhhh!");
  }
};

user.age; // lookup: O(1)
user.spell = "abra kadabra"; // insert: O(1)
user.scream(); // lookup: O(1)

// Map
const a = new Map();
// Map allows you to save any data type as the key
// Maintains insertion order

// Sets
const b = new Set(); // Only stores the keys, no values

/* Hash Table Implementation */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash = key => {
    // hash function
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // key.length is length of input
      // Actually O(1), since we're just looping over the key
      hash =
        (hash + key.charCodeAt(i) * i) %
        this.data
          .length; /* Each character in the input gets looped over! Therefore, each character 
      in the input has its own set of numbers. These numbers get added to has variable and eventually make up the hash code */
    }
    return hash;
  };

  set = (key, val) => {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, val]); // regardless, push value into the address space to prevent replacing items
  };

  get = key => {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // have to use a loop to check for collisions
        // Most of the time O(1), with collisions it's O(n)
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  };
}
const myHashTable = new HashTable(30); // Instantiate a Hash Table
myHashTable.set("lemon", 10000);
console.log(myHashTable.get("lemon"));
