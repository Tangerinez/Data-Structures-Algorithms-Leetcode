// Q1 - What is the Big O of the below function?
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n) --> being called n times; depends on how big the input is
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// Runtime Complexity: O(3+4n) => O(n)

// Q2 - What is the Big O of the below function?
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Runtime Complexity: O(4+7n) => O(n)

// Q3 - Let's say you work at Twitter.

/* Part 1: You have to create a button that when clicked, it retrieves your most recent tweet and your oldest tweet */
// We have to find the 1st and the Nth tweet...

// Assuming that the data structure Twitter uses is an array...
const array = ["hi", "my", "teddy"];
array[0]; // 1st element runtime is O(1)
array[array.length - 1]; // Nth element is O(1)

/* Part 2: Compare the dates within each tweet, and mention the time complexity of the operation */
const array = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 }
];
/* Because we have to compare each item in the array with one another, which requires a nested loop, 
the initial runtime complexity is O(n^2) */

// Q5 - What is the runtime of this operation?

"akjdshakdjhaasdakjhdka".length; // Depends on the language that you're working with!
// In Javascript, .length is a string property that doesn't iterate over evey index - thus, the runtime is O(1)

// Q6
/* Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays
contain any common items

Ex) 
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
Answer: false

Ex)
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
Answer: true
 */

// 2 parameters - arrays - no size limit
// return true or false

// Brute Force Approach would be nested loops. Runtime Complexity would be O(a*b)

// Better Solution - Use a hash table (in JS this is just an object)
/* array1 ==> obj {
    a: true,
    b: true,
    c: true,
    x: true
  }
  array2[index] === obj.properties
  */
const findCommonItem = (arr1, arr2) => {
  // can we assume always 2 params?
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map.i) {
      let item1 = arr1[i];
      map[item1] = true; // Use bracket notation here or else the property will be named "item1"!!!
    }
  }
  console.log(map);
  // loop through first array and create object where properties === items in the array
  for (let j = 0; j < arr2.length; j++) {
    let item2 = arr2[j];
    if (map[item2]) {
      // Use bracket notation here or else the this is referencing "item2"!!!
      return true;
    }
  }
  return false;
  // loop through second array and check if item in second array exists on created object
};

// Runtime Complexity: O(a+b)
// Space Complexity: O(a), since we added data from arr1 into map

// More Readable Solution
const findCommonItem = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
};

// Q7 - Google Coding Interview Question Example
/* You are given an array of numbers. Within the array, find if there is a pair that equals a given sum */

// Ex) Sum = 8, [1,2,4,7,9] => false
// Ex) Sum = 8, [1,2,4,4,9] => true

// Brute Force
const hasPairWithSum = (arr, sum) => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
};
// Runtime Complexity: O(n^2)

// Better Solution
const hasPairWithSum = (arr, sum) => {
  const mySet = new Set(); // Sets allow you to store UNIQUE values => you can't have repeating values!
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      // since the complemenets will be in the Set, just check for the number that adds up to the Sum
      return true;
    }
    mySet.add(sum - arr[i]); // add the complement to the Set
  }
  return false;
};
// Runtime Complexity: O(n)
