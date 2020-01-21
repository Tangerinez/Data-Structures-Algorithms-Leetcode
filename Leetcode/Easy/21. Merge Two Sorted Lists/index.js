/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing
together the nodes of the first two lists.

// Example)
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
// My Solution
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (L1, L2) => {
  // create new linked list pointer
  var L3 = new ListNode(null);
  var prev = L3;

  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.val <= L2.val) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }
  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1 === null) {
    prev.next = L2;
  }
  if (L2 === null) {
    prev.next = L1;
  }
  // return the sorted linked list
  return L3.next;
};
// Runtime Complexity: O(n)
