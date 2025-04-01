//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
//
//
//
// Example 1:
//
//
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
//
//
// Input: head = [1,2]
// Output: false
//
//
// Constraints:
//
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
//
//
// Follow up: Could you do it in O(n) time and O(1) space?

import {ListNode} from "../../../shared";

export const isPalindromeList = new ListNode(1);
isPalindromeList.next = new ListNode(2);
isPalindromeList.next.next = new ListNode(2);
isPalindromeList.next.next.next = new ListNode(1);

// O(n^2)
// export const isPalindrome = (head: ListNode | null): boolean => {
//   if (!head?.next) return true;
//
//   const addDigits = (sum: bigint, digit: number): bigint => (sum * BigInt(10)) + BigInt(digit);
//
//   const fakeHead = new ListNode(1);
//   fakeHead.next = head;
//
//   let sum = BigInt(0);
//   let node = fakeHead;
//
//   while (node) {
//     sum = addDigits(sum, node.val);
//     node = node.next as ListNode;
//   }
//
//   sum = addDigits(sum, 1);
//
//   return sum === BigInt(sum.toString().split('').reverse().join(''));
// };

// time complexity O(n), space complexity O(n)
export const isPalindrome = (head: ListNode | null): boolean => {
  if (!head?.next) return true;

  let list: number[] = [];
  let node = head;

  while (node) {
    list.push(node.val)
    node = node.next as ListNode;
  }

  //two pointers
  for (let i = 0, j = list.length -1; i < j; i++, j--) {
    if (list[i] !== list[j]) {
      return false;
    }
  }

  return true;
};

// Accepted

//O(n), O(1)
export const isPalindrome2 = (head: ListNode | null): boolean => {
  if (!head?.next) return true;

  let length = 0;
  let node = head;

  while (node) {
    node = node.next as ListNode;
    length++;
  }

  node = head;

  while (node) {
    if (true) {
      //TODO implement comparing the first and last node;
    }
    node = node.next as ListNode;
  }


  return true;
};