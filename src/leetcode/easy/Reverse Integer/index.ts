//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
//
//
// Example 1:
//
// Input: x = 123
// Output: 321
// Example 2:
//
// Input: x = -123
// Output: -321
// Example 3:
//
// Input: x = 120
// Output: 21
//
//
// Constraints:
//
// -231 <= x <= 231 - 1


import {reverseString} from "../Reverse String";

const isValid = (x: number) => !(x <= Math.pow(-2, 31) || x >= Math.pow(2, 31) - 1);

export const reverse = (x: number): number => {
  if (!isValid(x)) return 0;


  const str: string[] = Math.abs(x).toString().split('') ;

  reverseString(str)

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      str.shift();
      i--;
    } else {
      break;
    }
  }

  const num = Number(BigInt(str.join('')));
  const resp = x < 0 ? num * (-1) : num;

  return isValid(resp) ? resp : 0;
};

//Accepted