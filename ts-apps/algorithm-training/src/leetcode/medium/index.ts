import { ListNode, logger } from '../../shared';

import { getMyLinkedList } from './Design Linked List';
import { getMyLinkedList2 } from './Doubly Linked List';
import { maxFrequency2 } from './Frequency of the Most Frequent Element';
import { cycledLinkedList, hasCycle } from './Linked List Cycle';
import { cycledLinkedList2, detectCycle } from './Linked List Cycle 2';
import { setZeroes } from './Set Matrix Zeroes';
// import {getIntersectionNode} from "./Intersection of Two Linked Lists";
import { spiralOrder } from './Spiral Matrix';
import { addTwoNumbers } from './Add Two Numbers';

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

  const list1 = new ListNode(1);

  list1.next = new ListNode(0);
  list1.next.next = new ListNode(0);
  list1.next.next.next = new ListNode(0);
  list1.next.next.next.next = new ListNode(1);

  const list2 = new ListNode(5);
  list2.next = new ListNode(6);
  list2.next.next = new ListNode(4);

  logger(addTwoNumbers, [list1, list2]);
};
