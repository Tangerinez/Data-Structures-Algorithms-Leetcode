/*
Specific form of caching that involves caching the return value of a function based on its parameters
    - If the parameter of the function doesn't change, then it's memoized (will return the same result since the result is cached)
*/

// Example - Non-memoized
const addTo80 = n => {
  return n + 80;
};
addTo80(5); // 85
addTo80(5); // 85
addTo80(5); // 85
// You have to call this 3 times just to get the same answer! How can we optimize this?

// Example - Memoized (Worst)
let cache = {};
const memoizedAddTo80 = n => {
  if (n in cache) {
    // if the passed value exists in our cache
    return cache[n];
  } else {
    cache[n] = 80 + n;
    return cache[n];
  }
};
// Using this method with our hash table, we get O(1) runtime

// Example - Memoized (Best)
const memoizedAddTo80 = () => {
  let cache = {};
  return function(n) {
    // Use closures to access cache non-globally
    if (n in cache) {
      // if the passed value exists in our cache
      return cache[n];
    } else {
      cache[n] = 80 + n;
      return cache[n];
    }
  };
};
const memoized = memoizedAddTo80(); // memorized returns the function within memoizedAddTo80! AND it still has access to cache
memoized(5);
