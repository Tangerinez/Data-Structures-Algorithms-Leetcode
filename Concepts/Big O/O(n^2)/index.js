/* 
O(n^2) is quadratic time
- Use multiplication when loops are nested, with each loop being O(n)

Ex)
- 2 inputs, 4 operations
- 3 inputs, 9 operations
- 4 inputs, 16 operations
*/

// Example 1
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      // O(n)
      console.log(i, j);
    }
  }
}

logAllPairsOfArray(boxes); // O(n^2)
