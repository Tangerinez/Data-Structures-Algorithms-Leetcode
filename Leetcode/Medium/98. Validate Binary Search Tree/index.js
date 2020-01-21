/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Faster solution
const isValidBST = (
  root,
  leftMax = Number.MIN_SAFE_INTEGER, // -(2^53 - 1)
  rightMin = Number.MAX_SAFE_INTEGER // (2^31 - 1)
) => {
  return (
    !root || // false if no values exist
    (!(leftMax >= root.val || root.val >= rightMin) && // root value is a real number
    isValidBST(root.left, leftMax, root.val) && // check left child value against parent value
      isValidBST(root.right, root.val, rightMin)) // check right child value against right parent value
  );
};

// Slower Solution
const isValidBST = (root, a = -Infinity, b = Infinity) => {
  return (
    !root ||
    (a < root.val &&
      root.val < b &&
      isValidBST(root.left, a, root.val) &&
      isValidBST(root.right, root.val, b))
  );
};
