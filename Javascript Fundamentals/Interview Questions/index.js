/* Q1) var vs. let */
var a = 0; // functional scope => will be undefined outside of the function it's defined in
// hoisted

let b = 1; // block scope => will be undefined outside of the block it's defined in
// not hoisted

const x = () => {
  if (true) {
    var v = 2; // exists outside of this block within the function
    let l = 1; // does not exist outside of this block
  }
  console.log(v);
  console.log(l);
};
x(); // l is not defined

const x = () => {
  if (true) {
    console.log(v); // undefined since v's definition gets hoisted, but not the value
    console.log(l); // l is not hoisted to be above the console log
    var v = 2;
    let l = 1;
  }
  console.log(v);
  console.log(l);
};
x(); //

/* Q2) == vs. === */
console.log("1" == 1); // true
console.log("1" === 1); // false
// == Compares value, not type => converts to make type on both sides equal when comparing
// === Compares value AND type => doesn't try to convert type

/* Q3) let vs. const */
let apple = "apple"; // Mutable => Can reassign value
apple = "pear";
console.log(apple); // pear

const cars = []; // Immutable => After the first assignment, you cannot reassign the value
cars = [1];
console.log(cars); // Can't assign a constant variable after first declaration

const c = [1, 2];
c.push(3); // Allows for modifications to objects, but NOT reassignments
console.log(c); // [1,2,3]

/* Q4) null vs. undefined */
// Both represent empty values
let gym; // undefined => declared but unassigned variables have a default value of undefined
let library = null;

console.log(typeof undefined); // undefined
console.log(typeof null);

/* Q5) What are arrow functions used for? */
const profile = {
  firstName: "",
  lastName: "",
  setName: () => {
    // Allow you to retain the scope of the caller inside the function
    // Keeps track of the right "this" keyword and allows you to not have to use the bind method
    return firstName + " " + lastName;
  }
};

/* Q6) What is Prototypal Inheritance? */
// Every object has a property called a "prototype" that you can add methods and properties to it
// When you create other objects (instances) from these objects, the newly created object will automatically inherit the properties of the parent
// When you call a particular method on an object, it first looks at its own properties; if not there, then it looks in the parents

// ES5
let car = function(model) {
  // Constructor
  this.model = model;
};
car.prototype.getModel = function() {
  // not part of constructor
  return this.model;
};
let toyota = new car("toyota"); // new instance of car, which gives you access to getModel() function
console.log(toyota.getModel()); // toyota

// ES6 Class
class Car {
  constructor(model) {
    this.model = model;
  }
  getModel() {
    return this.model;
  }
}
let honda = new Car("honda");
console.log(honda.getModel()); // honda

/* Q7) Function Declaration vs. Function Expression */
console.log(funcD());
console.log(funcE()); // since it's assigned to a variable, it behaves like a variable and is variable scoped => won't be available until it is declared
function funcD() {
  // no variable assignment to this function
  console.log("function declaration");
}

let funcE = function() {
  // for function expressions, you can pass them into other functions
  // anonymous function that's saved in a variable
  console.log("function expression");
};

/* Q8) What are promises and why do we use them? */
// If we have an async call which has to wait for something to happen, and once it comes back, you'd execute some callback function. Within this callback, you may do another async call... etc. etc. (Nested callbacks)
// To simplify the process above, we'd use a promise
// Nice to read, easy to debug
const promise1 = new Promise(function(resolve, reject) {
  // create a Promise using the Promise constructor
  setTimeout(function() {
    resolve("foo"); // when computation is successful, we use the resolve function
  }, 300);
});
promise1.then(function(value) {
  // can chain .then() to perform operations on the returned value
  console.log(value);
});
console.log(promise1); // Promise {}, foo

/* Q9) setTimeout() */
setTimeout(function() {
  console.log("a");
}, 0);
console.log("b");
console.log("c");
// Order of the output is b,c,a => setTimeout() is async, and you have to wait for everything in the stack to finish before this event is completed

/* Q10) What are closures and how do you use them? */
// Closure gives you access to an outer function's scope from an inner function
let obj = function() {
  let i = 0;
  return {
    setI(k) {
      i = k;
    },
    getI() {
      return i;
    }
  };
};
let x = obj();
x.setI(2);
x.setI(4);
console.log(x.getI()); // 4

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5); // Closure => in add5 lexical environment, x=5
var add10 = makeAdder(10); // Closure => in add10 lexical environment, x=10

console.log(add5(2)); // takes in another argument 2, 5 + 2 = 7
console.log(add10(2)); // takes in another argument 10, 10 + 2 = 12

/* Q11)
let nums = [1,2,2,3] => [1,2,3] // Remove Duplicates
*/
[...new Set(nums)]; // [1,2,3] => spread operator allows a string, array, and set to be spread/expanded individually inside a receiver (in this case, the receiver is the array surrounding the spread operator)

let mySet = new Set();
nums.forEach(item => mySet.add(item)); // [1,2,3]

/* Q12) 
console.log(7 > 6 > 5);?
*/
// false, since 7 > 6 = true, then true > 5 = false since true = 1 by default

/* Q13)
  let x = function() {
    return 
    {
      message: "hi"
    }
  }
*/
// console.log(x()); // undefined => return shouldn't have a line break, or else it will act as "return;"

/* Q14) What is hoisting */
// Variable can be declared after it has been used
// A variable can be used before it has been declared
x = 5;
var x; // this declaration gets hoisted above x = 5 so that the variable assignment doesn't error out
// let and const are not hoisted
