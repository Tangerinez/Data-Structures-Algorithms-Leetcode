/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

// Example 1)
Input: [1,1,1,1,1,null,1]
Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 */

// My solution - Recursive Solution
var isUnivalTree = function(root) {
  let bLeftTrue =
    !root.left || (root.left.val == root.val && isUnivalTree(root.left));

  let bRightTrue =
    !root.right || (root.right.val == root.val && isUnivalTree(root.right));

  return bLeftTrue && bRightTrue;
};
// Runtime Complexity: O(n)
// Space Complexity: O(h), where h = height of tree
