/* 
O(n) is Linear Time
- The "n" represents number of inputs
- As our number of inputs increase, # of operations increase as well
- The "Big O" depends on the number (n) of inputs
*/

// Example 1
let large = new Array(1000).fill("nemo");

const findNemo = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
};

findNemo(large); // O(n) ---> Linear Time, where n=1000
