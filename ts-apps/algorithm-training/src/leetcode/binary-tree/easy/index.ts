import { logger } from '../../../shared';

import { preorderTraversal, preorderTraversalTree } from './Binary Tree Preorder Traversal';
import { inorderTraversal, inorderTraversalTree } from './Binary Tree Inorder Traversal';

export const main = (): void => {
  logger(preorderTraversal, preorderTraversalTree);

  logger(inorderTraversal, inorderTraversalTree);
};
