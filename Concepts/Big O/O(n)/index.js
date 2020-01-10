/* 
O(n) is Linear Time
- The "n" represents number of inputs
- As our number of inputs increase, # of operations increase as well
- The "Big O" depends on the number (n) of inputs

Rule 1: Worst Case
Rule 2: Remove Constants
Rule 3: Different Terms for Inputs
Rule 4: Drop Non-Dominants

**Loops are linear time**
*/

// Example 1
let large = new Array(1000).fill("nemo");

const findNemo = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo!");
      break; // exit out of loop
    }
  }
};

findNemo(large); // O(n) ---> Linear Time, where n=1000

// Rule 1: Worst case is if Nemo is at the end of the array => O(n)

// Example 2
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    // O(n/2) since we're only looping halfway
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    // O(100)
    console.log("hi");
  }
}
// Calculated Runtime Complexity: O(1 + n/2 + 100) => O(n/2 + 101)
// Rule 2: After removing constants => O(n)

// Example 3
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    // O(a)
    console.log(boxes);
  });

  boxes.forEach(function(boxes2) {
    // O(b)
    console.log(boxes);
  });
}

// Runtime Complexity: O(a + b)
// Rule 3: Since there are 2 different parameters that are being looped over, you don't add their runtimes together
// Rule 3: If the loops were nested, the Runtime Complexity would be O(a*b)
