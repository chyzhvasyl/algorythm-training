import { ListNode } from '../../../shared';

export const cycledLinkedList = new ListNode(3);
cycledLinkedList.next = new ListNode(2);
cycledLinkedList.next.next = new ListNode(0);
cycledLinkedList.next.next.next = new ListNode(4);
cycledLinkedList.next.next.next.next = new ListNode(6);

export const hasCycle = (head: ListNode): boolean => {
  let slow: ListNode | null | undefined = head;
  let fast: ListNode | null | undefined = slow?.next;

  if (!fast) return false;

  while (slow && fast) {
    if (slow === fast) return true;

    slow = slow?.next!;
    fast = fast?.next?.next;
  }

  return false;
};

//Accepted
