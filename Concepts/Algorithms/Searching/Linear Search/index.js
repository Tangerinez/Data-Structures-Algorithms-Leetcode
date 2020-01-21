/*
Sequentially checks each element in a list for a target value until a target value is found, or until all elements are searched

Ex) Iterating through an array
- Best Case is O(1) if we find the item as the first element
- Worst Case is O(n) if we go through entire list

Linear search is too slow! We want faster than O(n)
*/

// Example
const beasts = ["Center", "Godzulla", "Modsura", "Minotaur"];

beasts.indexOf("Godzilla"); // linear search
beasts.find(item => {
  // linear search
  return item === "Godzilla";
});
beasts.includes("Godzilla"); // linear search
