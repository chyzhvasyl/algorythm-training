//Given the head of a singly linked list, reverse the list, and return the reversed list.
//
//
//
// Example 1:
//
//
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
//
//
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
//
// Input: head = []
// Output: []
//
//
// Constraints:
//
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
//
//
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

import { ListNode } from '../../../shared';

export const reverseListInput = new ListNode(1);
reverseListInput.next = new ListNode(2);
reverseListInput.next.next = new ListNode(3);
reverseListInput.next.next.next = new ListNode(4);

export const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let currentNode: ListNode | null = head;
  let length = 0;

  const reverseSiblings = (): void => {
    if (!currentNode?.next) return;

    let next = currentNode.next;
    let currVal = currentNode.val;

    currentNode.val = next?.val;
    next.val = currVal;

    currentNode = currentNode.next;
  };

  while (currentNode?.next) {
    reverseSiblings();

    length++;
  }

  const reverseFromHead = (range = 1): void => {
    currentNode = head;

    for (let i = 0; i < length - range; i++) {
      if (!currentNode?.next) return;

      reverseSiblings();
    }

    if (range < length - 1) {
      reverseFromHead(range + 1);
    }
  };

  reverseFromHead();

  return head;
};

//Accepted
