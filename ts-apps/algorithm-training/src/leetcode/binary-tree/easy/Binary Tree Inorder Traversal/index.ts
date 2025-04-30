// Given the root of a binary tree, return the inorder traversal of its nodes' values.
//
//
//
// Example 1:
//
// Input: root = [1,null,2,3]
//
// Output: [1,3,2]
//
// Explanation:
//
//
//
// Example 2:
//
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
//
// Output: [4,2,6,5,7,1,3,9,8]
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

// export const inorderTraversalTree = new TreeNode(2);
// inorderTraversalTree.left = new TreeNode(1);
// inorderTraversalTree.right = new TreeNode(4);
// inorderTraversalTree.right.right = new TreeNode(3);

export const inorderTraversalTree = new TreeNode(1);
inorderTraversalTree.right = new TreeNode(2);
inorderTraversalTree.right.left = new TreeNode(3);

export const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const result: number[] = [];

  const iterativeTraversal = (start: TreeNode | null): void => {
    const stack: TreeNode[] = [];
    let pointer: TreeNode | null = start;

    while (pointer || stack.length) {
      while (pointer) {
        stack.push(pointer);
        pointer = pointer.left;
      }

      const currentNode = stack.pop();

      if (currentNode) {
        result.push(currentNode?.val);
        pointer = currentNode.right;
      }
    }
  };

  // const recursiveTraversal = (node: TreeNode | null): void => {};

  iterativeTraversal(root);

  return result;
};

// accepted
