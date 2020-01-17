/* Q1) What is the virtual DOM, and how is it beneficial? */
// Problem with the traditional DOM is that most JS frameworks update the DOM much more than they have to, which is inefficient and takes up time

// For every DOM object, there is a lightweight copy of that DOM object in the Virtual DOM
// Manipulating the Virtual DOM is faster since it isn't directly rendering it to the client (like editing a blueprint)

// Every time you render a JSX element, every Virtual DOM object gets updates
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
// Update - Every time a component's state or properties change
// Destruction - When the component is removed from the DOM
// Each part of the lifecycle has its own lifecycle methods that help manage each phase
