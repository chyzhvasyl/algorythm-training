//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
//
//
// Example 1:
//
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:
//
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
//
//
// Constraints:
//
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

export const strStr = (haystack: string, needle: string): number => {
  if (needle.length === 0) return 0;

  if (haystack.length < needle.length) return -1;

  let resultIndex = -1;

  const setResultIndex = (i: number): void => {
    resultIndex = resultIndex === -1 ? i : resultIndex;
  }

  for (let i = 0, j = 0; i < haystack.length; i++) {
    const isStackLast = i === haystack.length - 1;

    const discardIndexes = (): void => {
      resultIndex = -1;
      j = 0;
    }

    const startFromPreviousMatchedIndex = (): void => {
      if (resultIndex > -1) {
        i = resultIndex;
      }
    }

    const hasNeedleNotChecked = (): boolean => Boolean(isStackLast && needle[j]);

    if (needle.length === j) return resultIndex;

    if (haystack[i] === needle[j]) {
      setResultIndex(i);

      j++;
    } else {
      if (needle[j] === undefined) return resultIndex;

      startFromPreviousMatchedIndex();

      discardIndexes();
    }

    if (hasNeedleNotChecked()) return -1;
  }

  return resultIndex;
};