//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
//
//
// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

export const isPalindrome = (s: string): boolean => {
  const getAlphanumeric = (s: string): string => s.replace(/[^a-zA-Z0-9]/g, '');

  const result: string = getAlphanumeric(s).toLowerCase();

  if (!result) return true;

  const reverseString = (s: string): string => {
    const chars: string[] = s.split('');

    for (let i = 0; i < chars.length; i += 1) {
      chars[i] = chars[chars.length - 1 - i]
    }

    return chars.join('');
  }


  return result === reverseString(result);
};

// Accepted