/* Q1) What is the virtual DOM, and how is it beneficial? */
// Problem with the traditional DOM is that most JS frameworks update the DOM much more than they have to, which is inefficient and takes up time

// For every DOM object, there is a lightweight copy of that DOM object in the Virtual DOM
// Manipulating the Virtual DOM is faster since it isn't directly rendering it to the client (like editing a blueprint)

// Every time you render a JSX element, every Virtual DOM object gets updated
// React then compares the Virtual DOM to the snapshot of the Virtual DOM before it was updated ("diffing")
// React identifies which Virtual DOM objects to change, and only updates those objects in the Real DOM

/* Q2) What is the difference between props and state? */

// Props
// Pass data from a parent to a child
// Immutable => owned by the parent component and read-only, unless you pass a callback through it
// Can pass methods/functions to child components

// State
// Used within and managed by the component
// Mutable => updated by the component that it's in
// Can be initialized by props

/* Q3) What is Redux and for what/when is it used? */
// Redux is a state management container that keeps your state in a "store", with each component being able to access any state that it needs

// When to use Redux
// If a state needs to go to multiple different child components
// Too many props are being passed through multiple heirarchies of components
// Global components that can be accessed from anywhere

/* Q4) What are some limitations of React? */
// Steep learning curve
// High pace of development (constant changes)
// Lack of conventions
// No predefined way to structure your app (such as Angular with controllers & views)

/* Q5) What is Babel and what is it used for? */
// Code transpiler that converts ES6 to ES5, which is compatible in new and older browsers

/* Q6) What is webpack and what is it used for? */
// Static module bundler that handles combining and minifying JS/CSS files, as well as image files
// Creates a dependency graph which consists of the modules required for the app to run => minification

/* Q7) What is React's Component Lifecycle? */
// Initialization - When a component is first added to the DOM
// constructor()
// render()
// componentDidMount()
// Update - Every time a component's state or properties change
// render()
// componentDidUpdate()
// Destruction - When the component is removed from the DOM
// componentWillUnmount()
// Each part of the lifecycle has its own lifecycle methods that help manage each phase
let matrix = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
];

var hungryRabbit = garden => {
  // Set rabbit to center of matrix
  var currentPosition = findRabbitStart(garden);
  var row = null;
  var column = null;
  var totalCarrotsEaten = 0;

  // Until rabbit runs out of carrots
  while (row !== currentPosition[0] || column !== currentPosition[1]) {
    row = currentPosition[0];
    column = currentPosition[1];
    totalCarrotsEaten += garden[row][column];
    garden[row][column] = 0;
    currentPosition = findMaxCarrots(
      garden,
      [row, column],
      [row + 1, column],
      [row - 1, column],
      [row, column - 1],
      [row, column + 1]
    );
  }
  return totalCarrotsEaten;
};

var findRabbitStart = garden => {
  var gardenHightMidpoint = Math.floor(garden.length / 2);
  var gardenWidthMidpoint = Math.floor(garden[0].length / 2);

  // Check Odd/Odd -  this is the midpoint just return this value
  if (garden.length % 2 === 1 && garden[0].length % 2 === 1) {
    // Return center of garden
    return [gardenHightMidpoint, gardenWidthMidpoint];
  }
  // Check Even/Odd - keep col same check both row values
  // row col
  // row-1 col
  if (garden.length % 2 !== 1 && garden[0].length % 2 === 1) {
    return findMaxCarrots(
      garden,
      [gardenHightMidpoint, gardenWidthMidpoint],
      [gardenHightMidpoint - 1, gardenWidthMidpoint]
    );
  }
  // Check Odd/Even - keep row same check both col values
  // row col
  // row col-1
  if (garden.length % 2 === 1 && garden[0].length % 2 !== 1) {
    return findMaxCarrots(
      garden,
      [gardenHightMidpoint, gardenWidthMidpoint],
      [gardenHightMidpoint, gardenWidthMidpoint - 1]
    );
  }
  // Check Even/Even - check all middle values
  // row, col
  // row, col-1
  // row-1,col
  // row-1,col-1
  if (garden.length % 2 !== 1 && garden[0].length % 2 !== 1) {
    return findMaxCarrots(
      garden,
      [gardenHightMidpoint, gardenWidthMidpoint],
      [gardenHightMidpoint, gardenWidthMidpoint - 1],
      [gardenHightMidpoint - 1, gardenWidthMidpoint],
      [gardenHightMidpoint - 1, gardenWidthMidpoint - 1]
    );
  }
  return findMaxCarrots(garden, gardenHightMidpoint, gardenWidthMidpoint);
};

var findMaxCarrots = (
  garden,
  position0,
  position1,
  position2,
  position3,
  position4
) => {
  var maxCarrots = garden[position0[0]][position0[1]];
  var newPosition = position0;
  // Check position1
  // check if valid input then check if value is valid then check if grater then maxCarrots
  if (
    position1 &&
    garden[position1[0]] &&
    garden[position1[0]][position1[1]] > maxCarrots
  ) {
    newPosition = position1;
    maxCarrots = garden[position1[0]][position1[1]];
  }
  // Check position2
  // check if valid input then check if value is valid then check if grater then maxCarrots
  if (
    position2 &&
    garden[position2[0]] &&
    garden[position2[0]][position2[1]] > maxCarrots
  ) {
    newPosition = position2;
    maxCarrots = garden[position2[0]][position2[1]];
  }
  // Check position3
  // check if valid input then check if value is valid then check if grater then maxCarrots
  if (
    position3 &&
    garden[position3[0]][position3[1]] &&
    garden[position3[0]][position3[1]] > maxCarrots
  ) {
    newPosition = position3;
    maxCarrots = garden[position3[0]][position3[1]];
  }
  // Check position4
  // check if valid input then check if value is valid then check if grater then maxCarrots
  if (
    position4 &&
    garden[position4[0]][position4[1]] &&
    garden[position4[0]][position4[1]] > maxCarrots
  ) {
    newPosition = position4;
    maxCarrots = garden[position4[0]][position4[1]];
  }
  return newPosition;
};

console.log(hungryRabbit(matrix));
