import { logger } from '../../../shared';

import { preorderTraversal, preorderTraversalTree } from './Binary Tree Preorder Traversal';
import { inorderTraversal, inorderTraversalTree } from './Binary Tree Inorder Traversal';
import { postorderTraversal, postOrderTraversalTree } from './Binary Tree Postorder Traversal';
import { levelOrder } from './Binary Tree Level Order Traversal';

export const main = (): void => {
  logger(preorderTraversal, preorderTraversalTree);

  logger(inorderTraversal, inorderTraversalTree);

  logger(postorderTraversal, postOrderTraversalTree);

  logger(levelOrder, postOrderTraversalTree);
};
