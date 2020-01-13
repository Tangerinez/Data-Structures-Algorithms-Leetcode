// Q1 - Create a function that reverses a string

// Solution 3 - Cleanest Solution
const reverseString = str => [...str].reverse().join("");
// console.log(reverseString("hello"));

// Solution 2 - With built in methods
const reverseString2 = str => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not returnable";
  }
  return str
    .split("")
    .reverse()
    .join("");
};
// console.log(reverseString2("hello"));

// Solution 3 - Without built in methods
const reverseString3 = str => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not returnable";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
};
// console.log(reverseString3("hello"));

// Q2 - Given 2 arrays that are sorted, merge both arrays into 1 sorted array
// Ex) mergeSortedArrays([0,3,4,31],[4,6,30]) => [0,3,4,4,6,30,31]

// Brute Force Solution
const mergeSortedArrays = (arr1, arr2) => {
  let mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let arr1Index = 1;
  let arr2Index = 1;

  // First check input
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      // !array2Item is to check if array 2 is already done
      mergedArray.push(array1Item);
      array1Item = arr1[arr1Index];
      arr1Index++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[arr2Index];
      arr2Index++;
    }
  }

  return mergedArray;
};
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// Runtime Complexity: O(n)

// Cleaner Solution
const mergeSortedArrays2 = (arr1, arr2) => {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
};
// Runtime Complexity: O(nlogn)
