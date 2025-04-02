// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.
//
//
//
// Example 1:
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

import { ListNode } from '../../../shared';

export const mergeTwoListsInput1 = new ListNode(-10);
mergeTwoListsInput1.next = new ListNode(-10);
mergeTwoListsInput1.next.next = new ListNode(-9);
mergeTwoListsInput1.next.next.next = new ListNode(-4);
mergeTwoListsInput1.next.next.next.next = new ListNode(1);
mergeTwoListsInput1.next.next.next.next.next = new ListNode(6);
mergeTwoListsInput1.next.next.next.next.next.next = new ListNode(6);

export const mergeTwoListsInput2 = new ListNode(-7);

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  if (!list1 && !list2) return null;

  const nodeValues: number[] = [];
  let head1 = list1;
  let head2 = list2;

  while (head1 || head2) {
    if (head1) {
      nodeValues.push(head1.val);
      head1 = head1.next;
    }

    if (head2) {
      nodeValues.push(head2.val);
      head2 = head2.next;
    }
  }

  if (list1 && list2) {
    nodeValues.sort((a, b) => a - b);
  }

  const newHead = new ListNode(nodeValues[0]);

  nodeValues.forEach((nodeValue: number, index: number): void => {
    if (index === 0) return;

    const setNextNode = (node: ListNode | null, skip = 1): void => {
      if (!node) return;

      if (skip === index) {
        node.next = new ListNode(nodeValue);
      } else {
        return setNextNode(node?.next, skip + 1);
      }
    };

    setNextNode(newHead);
  });

  return newHead;
};

// Accepted
