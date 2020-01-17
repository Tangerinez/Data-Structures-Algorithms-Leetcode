/****** Binary Search Tree ******/
// Preserves relationships (parent, child, etc.)
/* 
Rules:
    - The child of a node to the right of the node is larger than the parent (and constantly increases as you go down)
    - The child of a node to the left of the node is smaller than the parent (and constantly decreases as you go down)
    - A node can only have up to 2 children

Advantages:
    - Fast and easy searching
    - Fast and easy lookup

Disadvantages:
    - BST can become unbalanced, where all the nodes keep getting added to one side!
        - Unbalanced BST operations become O(n), which become more time-consuming and inefficient 

Performance Implications
    - Pros:
        - Better than O(n)
        - Ordered
        - Flexible Size
    - Cons:
        - No O(1) operations
*/

// Example - Binary Tree Implementation
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert = value => {
    const newNode = new Node(value);
    if (!this.root) {
      // if there's no root node
      this.root = newNode;
    } else {
      let currentNode = this.root; // points to our top node
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            // is the element to the left is null
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left; // if there is already a node to the left, keep going
        } else {
          // Right
          if (!currentNode.right) {
            // if the element to the right is null
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right; // if there is already a nofe to the right, keep going
        }
      }
    }
  };
  lookup = value => {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root; // points to our top node
    while (currentNode) {
      // O(logN), not O(n) because we're not actually iterating => we are using "divide and conquer" since we're not visitng all the nodes
      // while we're at a node
      if (value < currentNode.value) {
        // Left
        currentNode = currentNode.left; // traverse left
      } else if (value > currentNode.value) {
        // Right
        currentNode = currentNode.right; // traverse right
      } else if (currentNode.value === value) {
        return currentNode; // return the value
      }
    }
    return false;
  };
  remove = value => {
    // more complex
  };
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root)); // displays tree
//       9
//    4     20
//  1   6 15   170
