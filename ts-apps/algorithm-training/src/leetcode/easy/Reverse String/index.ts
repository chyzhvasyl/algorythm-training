// Write a function that reverses a string. The input string is given as an array of characters s.
//
// You must do this by modifying the input array in-place with O(1) extra memory.
//
//
//
// Example 1:
//
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
//
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
//
//
// Constraints:
//
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

export const reverseString = (s: string[] = []): void => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const right = s[s.length - 1 - i];
    const left = s[i];

    s[i] = right;
    s[s.length - 1 - i] = left;
  }
};

// Accepted
