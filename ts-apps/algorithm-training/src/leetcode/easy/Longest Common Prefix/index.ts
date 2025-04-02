//Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

export const longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  const getPrefix = (prefix: string = '', length: number): string => {
    if (!prefix) return '';

    for (let i = 1; i < strs.length; i++) {
      const isMatched = prefix === strs[i].slice(0, length);

      if (!isMatched) {
        return prefix.slice(0, length - 1);
      }
    }

    if (strs[0].length === prefix.length) return prefix;

    length++;

    return getPrefix((strs[0] ?? '').slice(0, length), length);
  };

  return getPrefix(strs[0][0], 1);
};

//Accepted
