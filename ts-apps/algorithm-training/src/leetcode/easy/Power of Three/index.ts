//Given an integer n, return true if it is a power of three. Otherwise, return false.
//
// An integer n is a power of three, if there exists an integer x such that n == 3x.
//
//
//
// Example 1:
//
// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:
//
// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:
//
// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).
//
//
// Constraints:
//
// -231 <= n <= 231 - 1
//
//
// Follow up: Could you solve it without loops/recursion?

const isValid = (num: number): boolean => {
  return num >= Math.pow(-2, 31) && num <= Math.pow(2, 31) - 1;
};

export const isPowerOfThree = (num: number): boolean | undefined => {
  if (!isValid(num)) return;

  if (num <= 0) return false;

  const result: number = Math.log(num) / Math.log(3);

  if (Number.isInteger(result)) return true;

  const str = result.toString(10);

  return Number.isInteger(Number(str.substring(0, str.length - 1)));
};

// Accepted
