// Given the head of a linked list, rotate the list to the right by k places.
// Example 1:
//
//
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:
//
//
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
//
//
// Constraints:
//
// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

import { ListNode } from '../../../shared';

export const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head?.next || k === 0) {
    return head;
  }

  let length = 1;
  let current: ListNode | null = head;

  while (current?.next) {
    length++;
    current = current.next;
  }

  let wrappedK = k;

  while (wrappedK > length) {
    wrappedK -= length;
  }

  if (wrappedK === length) {
    return head;
  }

  const skip = length - wrappedK;

  current.next = head; // Wrap the list into a circle
  let lengthRef = 1;

  current = current.next; // Start from the head again

  // Find a new head
  while (current?.next) {
    if (lengthRef === skip) {
      current = current.next; // Move to the new head

      break;
    }

    lengthRef++;
    current = current.next;
  }

  let currentRef: ListNode | null = current;

  lengthRef = 1;

  while (currentRef?.next) {
    if (lengthRef === length) {
      currentRef.next = null; // Break the circle
    }

    currentRef = currentRef.next;
    lengthRef++;
  }

  return current;
};

// Accepted
