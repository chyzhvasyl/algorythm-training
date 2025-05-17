//  Binary Tree Level Order Traversal

import { TreeNode } from '../../../../shared';

export const levelOrder = (root: TreeNode | null): number[][] => {
  const result: number[][] = [];

  if (!root) return result;

  const extract = (...node: TreeNode[]): void => {
    const treeValues: number[] = [];
    const newSubLevelSubtree: TreeNode[] = [];

    for (const n of node) {
      treeValues.push(n.val);

      if (n.left) {
        newSubLevelSubtree.push(n.left);
      }

      if (n.right) {
        newSubLevelSubtree.push(n.right);
      }
    }

    result.push(treeValues);

    if (newSubLevelSubtree.length) {
      extract(...newSubLevelSubtree);
    }
  };

  extract(root);

  return result;
};
