/*
Trees are like linked lists, but with multiple paths going from nodes!
// Node can only point to a child
*/
/****** Binary Trees ******/
/*
Rules:
    - Each node can only have 0,1, or 2 nodes
    - Each child can only have 1 parent
    - Each node represents a certain state

Perfect Binary Tree:
    - All the leaf nodes are full, and there's no node that only has 1 child
    - Node either has 0 or 2 children
    - Bottom layer of tree is completely filled
    - Extremely efficient and desirable
        - Number of total nodes on each level is 2n, where n is the level
        - # Nodes on last level = # Nodes on other levels + 1
Full Binary Tree:
    - Node has either 0 or 2 children

lookup: O(logN)
insert: O(logN)
delete: O(logN)
*/
// Ex)
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(logN) => Divide and Conquer
/* 
Level 0: 2^0 => 1
Level 1: 2^1 => 2;
Level 2: 2^2 => 4;
Level 3: 2^3 => 8;

# of nodes = 2^n - 1, where n is the level of the tree starting at 1

log(nodes) = n
log(100) = 2
10^2 = 100;
*/
