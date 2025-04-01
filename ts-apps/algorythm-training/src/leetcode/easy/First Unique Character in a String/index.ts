//Given a string s, find the first non-repeating character in it and return its index.ts. If it does not exist, return -1.
//
//
//
// Example 1:
//
// Input: s = "leetcode"
// Output: 0
// Example 2:
//
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
//
// Input: s = "aabb"
// Output: -1
//
//
// Constraints:
//
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

export const firstUniqChar = (s: string): number => {
  const map: Record<string, {
    index: number;
    duplicate: boolean;
  }> = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let charInMap = map[char];

    if (charInMap?.duplicate) continue;

    if (!charInMap) {
      map[char] = {
        index: i,
        duplicate: false,
      };
    } else {
      map[char].duplicate = true;
    }
  }

  let i = -1;

  Object.values(map).filter((state) => !state.duplicate).forEach(({ index, }) => {
    if (i === -1 ) {
      i = index;
    } else if (i > index) {
      i = index;
    }
  })

  return i;
};

// Accepted