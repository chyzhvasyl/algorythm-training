import { logger } from '../../shared';

import { getMyLinkedList } from './Design Linked List';
import { getMyLinkedList2 } from './Doubly Linked List';
import { maxFrequency2 } from './Frequency of the Most Frequent Element';
import { cycledLinkedList, hasCycle } from './Linked List Cycle';
import { cycledLinkedList2, detectCycle } from './Linked List Cycle 2';
import { setZeroes } from './Set Matrix Zeroes';
// import {getIntersectionNode} from "./Intersection of Two Linked Lists";
import { spiralOrder } from './Spiral Matrix';

export const main = (): void => {
  logger(setZeroes, [[0, 1]]);

  logger(maxFrequency2, [1, 2, 3], 1);

  logger(getMyLinkedList);

  console.log('hasCycle---', hasCycle(cycledLinkedList));

  console.log('detectCycle---', detectCycle(cycledLinkedList2));

  // console.log('getIntersectionNode---', getIntersectionNode(cycledLinkedList, cycledLinkedList2));

  logger(spiralOrder, [
    [1, 2, 3],
    [4, 5, 6],
  ]);

  console.log('getMyLinkedList2', getMyLinkedList2());
};
