/* 
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  var max = -Infinity; // Initialize to a very small number to handle a path of negative values
  getMaxSum(root); // Call our recursive fn to start the program

  return max; // Once we have popped out of our recursive calls, `max` contains our maximum path sum

  function getMaxSum(tree) {
    if (tree == null) {
      return 0;
    } // Termination condition

    const leftBranch = Math.max(0, getMaxSum(tree.left)); // calculate the root to leaf sum where root is the left node
    const rightBranch = Math.max(0, getMaxSum(tree.right)); // calculate the root to leaf sum where root is the right node
    const currentPath = leftBranch + tree.val + rightBranch; // Sum the path: left -> root -> right (leaf to leaf)

    max = Math.max(max, currentPath); // if the current path is greater than the previous value of `max`, update `max` to the current path sum
    return tree.val + Math.max(leftBranch, rightBranch);
  }
};
