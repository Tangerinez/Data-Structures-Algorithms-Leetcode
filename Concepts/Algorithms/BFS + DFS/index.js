/*
BFS (Breadth First Search):
    - *** Great for UNWEIGHTED graphs ***
    - Use a queue data structure
    - Start with root node, and then level by level, traverse items from left to right until you find the item you're looking for, or until the tree ends
    - Uses additional memory, since we need to track every node and it's children in order
    - Runtime Complexity: O(n)
    - Space Complexity: O(n)
DFS:
    - Use a stack data structure
    - Follows one branch of the tree down as many levels as possible until target node is found or the end is reached. It then goes back up to parent node and proceeds to do the same with all unexplored children
    - Lower memory usage than BFS, since you don't have to store all the child pointers at each level
    - "All the way down, and come back up"
    - Runtime Complexity: O(n)
    - Space Complexity: O(d) recursive implementation, where d is depth of tree

BFS vs. DFS (When to use what?)
    - BFS:
        - Rule of thumb:
            - If you have additional info on location of the target node and you know that the node is likely in the upper level of a tree/graph, then BFS is better since it'll search through the lowest levels of the tree/graph first
        - Pros:
            - Shortest Path
            - Closer Nodes
        - Cons:
            - More memory
    - DFS:
        - Rule of thumb:
            - If you know the the target node is likely iin the lower levels of the tree/graph, use DFS
        - Pros:
            - Less Memory
            - Unsure about whether a path exists (Does path exist?)
        - Cons:
            - Can be slower than BFS
*/

/* BFS Example */
/* 
              9
        4          20
    1       6  15       170
*/
// BFS in order for the tree above => [9,4,20,1,6,15,170]

/* DFS Example */
/* 
              9
        4          20
    1       6  15       170
*/
// InOrder DFS for tree above => [1,4,6,9,15,20,170]
// PreOrder DFS for tree above => [9,4,1,6,20,15,170]
// PostOrder DFS for tree above => [1,6,4,15,170,20,9]

/* BFS vs. DFS. exercise */
// 1. If you know a solution is not far from the root of the tree:
// BFS

// 2. If the tree is very deep and solutions are rare:
// BFS (DFS will take a long time since the tree is very deep - has to go one by one per branch)

// 3. If the tree is very wide:
// DFS (BFS will need too much memory since it will need to keep track of all the nodes in a current level)

// 4. If solutions are frequent but located deep in the tree:
// DFS

// 5. Determining whether a path exists between two nodes:
// DFS

// 6. Finding the shortest path:
// BFS

// BFS and DFS Implementation
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
  breadthFirstSearch = () => {
    let currentNode = this.root;
    let list = [];
    let queue = []; // *** using a queue data structure for keeping track of which nodes we have to check for
    queue.push(currentNode);
    while (queue.length > 0) {
      // as long as we have something in the queue
      currentNode = queue.shift(); // ** This here basically tells us which node from the queue we are currently on!
      list.push(currentNode.value);
      if (currentNode.left) {
        // does this node have a left child?
        queue.push(currentNode.left); // if so, push the child into the queue
      }
      if (currentNode.right) {
        // does this node have a right child?
        queue.push(currentNode.right); // if so, push child into the queue
      }
    }
    return list; // returns the tree in the order of traversal
  };

  breadthFirstSearchRecursive = (queue, list) => {
    if (!queue.length) {
      // base case for having something in the queue
      return list;
    }
    let currentNode = queue.shift(); // ** This here basically tells us which node from the queue we are currently on!
    list.push(currentNode.value);
    if (currentNode.left) {
      // does this node have a left child?
      queue.push(currentNode.left); // if so, push the child into the queue
    }
    if (currentNode.right) {
      // does this node have a right child?
      queue.push(currentNode.right); // if so, push child into the queue
    }
    return this.breadthFirstSearchRecursive(queue, list);
  };

  depthFirstSearchInorder = () => {
    // using a stack data structure
    return traverseInOrder([this.root], []);
  };

  depthFirstSearchPreorder = () => {
    // *** using a stack data structure
    return traversePreOrder([this.root], []);
  };

  depthFirstSearchPostorder = () => {
    // using a stack data structure
    return traversepostOrder([this.root], []);
  };
}

function traverseInOrder(node, list) {
  if (node.left) {
    // if node has a left child
    traverseInOrder(node.left, list); // keep traversing for left child all the way down
  }
  list.push(node.value); // push this traversed value into our list
  if (node.right) {
    // if node has a right child
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    // if node has a left child
    traversePostOrder(node.left, list); // keep traversing for left child all the way down
  }
  if (node.right) {
    // if node has a right child
    traversePostOrder(node.right, list);
  }
  list.push(node.value); // push the root value at the end after the deeper elements have been traversed
  return list;
}
/* Height of the tree will match the deepest recursive function for DFS */
/* Common interview question - Validate Binary Search Tree! */

const tree = new BinarySearchTree();
tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive([tree.root], []);
tree.depthFirstSearchInorder();
