import { removeDuplicates } from "./Remove Duplicates from Sorted Array";
import { maxProfit2 } from "./Best Time to Buy and Sell Stock II";
import { rotate } from "./Rotate Array";
import { containsDuplicate } from "./Contains Duplicate";
import { singleNumber } from "./Single Number";
import { intersect } from "./Intersection of Two Arrays II";
import { twoSum } from "./Two Sum";
import { isValidSudoku } from "./Valid Sudoku";
import { sumNumbers } from "./sum numbers";
import { logger } from "../../shared";
import { climbStairs } from './Climbing Stairs';
import { fibonacci } from './Fibonacci';
import { maxProfit1 } from './Best Time to Buy and Sell Stock';
import { isPowerOfThree } from './Power of Three';
import { isAnagram } from './Valid Anagram';
import { longestCommonPrefix } from './Longest Common Prefix';
import { strStr } from "./Implement strStr()";
import { isPalindrome } from "./Valid Palindrome";
import { solution } from "./First Bad Version";
import { plusOne } from "./Plus One";
import { moveZeroes } from "./Move Zeroes  ";
import { reverseString } from "./Reverse String";
import { reverse } from "./Reverse Integer";
import { firstUniqChar } from "./First Unique Character in a String";
import { romanToInt } from "./Roman to Integer";
import { countPrimes } from "./Count Primes";
import { maxSubArray } from "./Maximum Subarray";
import { rob } from "./House Robber";
import { findWords } from "./Keyboard Row";
import { deleteNode } from "./Delete Node in a Linked List";
import { removeNthFromEnd, removeNthFromEndInput } from "./Remove Nth Node From End of List";

export const main = (): void => {
  logger(removeDuplicates, [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

  logger(maxProfit2, [7,6,4,3,1, 11, 12]);

  logger(rotate, [1,2,3,4,5,6, 7], 3);

  logger(containsDuplicate, [1,2,3,4,5,6]);

  logger(singleNumber, [1]);

  logger(intersect, [1,2,2,1], [2,2]);

  logger(twoSum, [3,3], 6);

  logger(isValidSudoku,
    [
      ["5","3",".",".","7",".",".",".","."]
      ,["6",".",".","1","9","5",".",".","."]
      ,[".","9","8",".",".",".",".","6","."]
      ,["8",".",".",".","6",".",".",".","3"]
      ,["4",".",".","8",".","3",".",".","1"]
      ,["7",".",".",".","2",".",".",".","6"]
      ,[".","6",".",".",".",".","2","8","."]
      ,[".",".",".","4","1","9",".",".","5"]
      ,[".",".",".",".","8",".",".","7","9"]
    ]);

  logger(sumNumbers(1)(2), 3);

  logger(fibonacci, 10);

  logger(climbStairs, 10);

  logger(maxProfit1, [7,1,5,3,6,4]);

  logger(isPowerOfThree, 27);

  logger(isAnagram, 'rat', 'car');

  logger(longestCommonPrefix, ["flower"]);

  logger(strStr, 'mississippi', 'issip');

  logger(isPalindrome, ' ');

  logger(solution((n) => n === 1),  1);

  logger(plusOne, [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);

  logger(moveZeroes, [0,1,0,3,2]);

  logger(reverseString, ["1","2","3", '4','5','6','7','8','9']);

  logger(reverse, 12030000);

  logger(firstUniqChar, 'aabb');

  logger(romanToInt, 'MCMXCIV');

  logger(countPrimes, 10000);

  logger(maxSubArray, [-2,1]);

  logger(rob, [8,2,8,9,2]);

  logger(findWords, ["Hello","Alaska","Dad","Peace"]);

  logger(deleteNode);

  logger(removeNthFromEnd, removeNthFromEndInput, 1);
}