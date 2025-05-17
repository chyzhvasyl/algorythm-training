// Given the root of a binary tree, return the preorder traversal of its nodes' values.
//
//
//
// Example 1:
//
// Input: root = [1,null,2,3]
//
// Output: [1,2,3]
//
// Explanation:
//
//
//
// Example 2:
//
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
//
// Output: [1,2,4,5,6,7,3,8,9]
//
// Explanation:
//
//
//
// Example 3:
//
// Input: root = []
//
// Output: []
//
// Example 4:
//
// Input: root = [1]
//
// Output: [1]
//
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
//
//
// Follow up: Recursive solution is trivial, could you do it iteratively?

import { TreeNode } from '../../../../shared';

export const preorderTraversalTree = new TreeNode(1);
preorderTraversalTree.left = new TreeNode(4);
preorderTraversalTree.right = new TreeNode(2);
preorderTraversalTree.right.right = new TreeNode(3);

export const preorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  if (!root) return result;

  // const recursiveTraversal = (node: TreeNode | null): void => {
  //   if (!node) return;
  //
  //   result.push(node.val);
  //
  //   recursiveTraversal(node.left);
  //   recursiveTraversal(node.right);
  // };
  //
  // recursiveTraversal(root);

  const iterativeTraversal = (node: TreeNode): void => {
    const stack: TreeNode[] = [node];

    while (stack.length) {
      const firstNode = stack.pop()!;

      result.push(firstNode.val);

      if (firstNode?.right) {
        stack.push(firstNode.right);
      }

      if (firstNode?.left) {
        stack.push(firstNode.left);
      }
    }
  };

  iterativeTraversal(root);

  return result;
};

// Accepted both
