// Given a string s, find the length of the longest substring without duplicate characters.
//
//
//
// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
// Constraints:
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// export const lengthOfLongestSubstring = (s: string): number => {
//   const maxLength: number[] = [];
//   let currentLength = 0;
//   let hashMap: Record<string, string> = {};
//
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const isLastChar = i === s.length - 1;
//
//     if (!hashMap[char]) {
//       hashMap[char] = char;
//       currentLength += 1;
//
//       if (isLastChar) {
//         maxLength.push(currentLength);
//       }
//     } else {
//       maxLength.push(currentLength);
//       currentLength = 0;
//       hashMap = {};
//       i--;
//     }
//   }
//
//   return maxLength.length ? Math.max(...maxLength) : 0;
// };
//
// does not cover the 'dvdf' input.
//

export const lengthOfLongestSubstring = (s: string): number => {
  if (!s.length) return 0;

  let start = 0;
  let end = start;
  let resp = 0;

  for (let i = 0; i < s.length; i++) {
    if (resp >= s.length - i) return resp;

    const hashMap: Record<string, string> = {};

    for (let subI = start; subI <= end && subI < s.length; subI++) {
      const char = s[subI];
      const isLast = subI === s.length - 1;

      if (!hashMap[char]) {
        hashMap[char] = char;

        if (subI === end) {
          end++;
        }
      } else {
        start = i + 1;

        break;
      }

      const length = end - start;

      if (length > resp) {
        resp = length;
      }

      if (isLast) {
        start = i + 1;
        break;
      }
    }
  }

  return resp;
};

// accepted

export const lengthOfLongestSubstring2 = (s: string): number => {
  const seen: Record<string, number> = {};
  let maxLen = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1; // jump start past duplicate
    }

    seen[char] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};
