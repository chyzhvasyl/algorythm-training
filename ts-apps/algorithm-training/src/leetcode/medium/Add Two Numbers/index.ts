// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//
//
// Example 1:
//
//
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:
//
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:
//
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

import { ListNode } from '../../../shared';

export const getListNum = (list: ListNode): bigint => {
  const num: number[] = [];
  let currentNode: ListNode | null = list;

  while (currentNode) {
    num.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return BigInt(
    num.reverse().reduce((prev: string, curr: number) => prev.concat(`${curr}`), ''),
  );
};

export const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  const num1 = getListNum(l1);
  const num2 = getListNum(l2);
  const sum = (num1 + num2).toString();
  const newList = new ListNode();
  let ref = newList;

  for (let i = sum.length - 1; i >= 0; i--) {
    ref.val = Number(sum[i]);
    ref.next = i === 0 ? null : new ListNode();

    if (ref.next) {
      ref = ref.next;
    }
  }

  return newList;
};

const addTwoNumbersList1 = new ListNode(1);

addTwoNumbersList1.next = new ListNode(0);
addTwoNumbersList1.next.next = new ListNode(0);
addTwoNumbersList1.next.next.next = new ListNode(0);
addTwoNumbersList1.next.next.next.next = new ListNode(1);

const addTwoNumbersList2 = new ListNode(5);

addTwoNumbersList2.next = new ListNode(6);
addTwoNumbersList2.next.next = new ListNode(4);

// Accepted
