// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
//
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
//
//
// Constraints:
//
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const splitAnagram = (str: string) => str.split('').sort((a: string, b: string) => Number(a > b) - Number(a < b));

export const isAnagram = (str1: string | string[], str2: string | string[]): boolean => {
  if (str1.length !== str2.length) return false;

  str1 = splitAnagram(str1 as string);
  str2 = splitAnagram(str2 as string);

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }

  return true
}
