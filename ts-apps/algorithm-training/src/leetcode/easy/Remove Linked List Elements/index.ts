import { ListNode } from '../../../shared';

export const removeElementsLinkedList = new ListNode(1);
removeElementsLinkedList.next = new ListNode(1);
removeElementsLinkedList.next.next = new ListNode(1);
removeElementsLinkedList.next.next.next = new ListNode(1);
removeElementsLinkedList.next.next.next.next = new ListNode(1);

export const removeElements = (head: ListNode | null, val: number): ListNode | null => {
  let currentNode: ListNode | null = head;
  let newHead: ListNode | null = null;

  while (currentNode) {
    const ifCurrent: boolean = currentNode.val === val;
    const addNewNode = (currentHead: ListNode, newNode: ListNode): void => {
      if (currentHead.next) return addNewNode(currentHead.next, newNode);

      currentHead.next = newNode;
    };

    if (ifCurrent) {
      currentNode = currentNode?.next;

      continue;
    }

    if (!newHead) {
      newHead = new ListNode(currentNode.val);
    } else {
      addNewNode(newHead, new ListNode(currentNode.val));
    }

    currentNode = currentNode?.next;
  }

  return newHead;
};

//Accepted
