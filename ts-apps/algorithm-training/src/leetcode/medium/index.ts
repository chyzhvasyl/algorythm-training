import { ListNode, logger } from '../../shared';

import { addTwoNumbers } from './Add Two Numbers';
import { getMyLinkedList } from './Design Linked List';
import { getMyLinkedList2 } from './Doubly Linked List';
import { flatten } from './Flatten a Multilevel Doubly Linked List';
import { maxFrequency2 } from './Frequency of the Most Frequent Element';
import { cycledLinkedList, hasCycle } from './Linked List Cycle';
// import { cycledLinkedList2 } from './Linked List Cycle 2';
import { lengthOfLongestSubstring } from './Longest Substring Without Repeating Characters';
import { rotateRight } from './Rotate List';
import { setZeroes } from './Set Matrix Zeroes';
import { spiralOrder } from './Spiral Matrix';
// import { getIntersectionNode } from './Intersection of Two Linked Lists';

export const main = (): void => {
  logger(setZeroes, [[0, 1]]);

  logger(maxFrequency2, [1, 2, 3], 1);

  logger(getMyLinkedList);

  logger(hasCycle, cycledLinkedList);

  // logger(detectCycle, cycledLinkedList2);

  // logger(getIntersectionNode, cycledLinkedList, cycledLinkedList2);

  logger(spiralOrder, [
    [1, 2, 3],
    [4, 5, 6],
  ]);

  logger(getMyLinkedList2);

  const list1 = new ListNode(1);

  list1.next = new ListNode(0);
  list1.next.next = new ListNode(0);
  list1.next.next.next = new ListNode(0);
  list1.next.next.next.next = new ListNode(1);

  const list2 = new ListNode(5);

  list2.next = new ListNode(6);
  list2.next.next = new ListNode(4);

  logger(addTwoNumbers, [list1, list2]);

  const rotateRightList = new ListNode(1);

  rotateRightList.next = new ListNode(2);
  rotateRightList.next.next = new ListNode(3);

  logger(rotateRight, rotateRightList, 3);

  logger(flatten);

  logger(lengthOfLongestSubstring, 'dvdf');
};
