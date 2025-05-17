// Given the root of a binary tree, return its maximum depth.
//
// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down
// to the farthest leaf node.
//
//
//
// Example 1:
//
//
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:
//
// Input: root = [1,null,2]
// Output: 2
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

import { TreeNode } from '../../../../shared';

export const maxDepth = (root: TreeNode | null): number => {
  let resp = 0;

  if (!root) return resp;

  const recursiveTraversal = (node: TreeNode | null, depth: number): void => {
    if (!node) return;

    if (!node.left && !node.right) {
      resp = depth > resp ? depth : resp;
    }

    recursiveTraversal(node?.left, depth + 1);
    recursiveTraversal(node?.right, depth + 1);
  };

  recursiveTraversal(root, 1);

  return resp;
};

// Accepted
