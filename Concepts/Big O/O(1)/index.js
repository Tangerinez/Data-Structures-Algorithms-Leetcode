/* 
O(1) is Constant Time
- Only one operation is performed, no matter how big the input is
    - Constant amount of time on a function
- Flat line
*/

// Example 1
let boxes1 = new Array(1000).fill("cookies");
const compressFirstBox = boxes => {
  console.log(boxes[0]); // O(1)
};

compressFirstBox(boxes1); // O(1)

// Example 2
let boxes2 = [0, 1, 2, 3, 4, 5];
const logFirstTwoBoxes = boxes => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes2); // O(2)
