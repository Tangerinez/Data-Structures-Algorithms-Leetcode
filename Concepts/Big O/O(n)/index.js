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
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}
