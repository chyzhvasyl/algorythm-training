import { removeDuplicates } from "./Remove Duplicates from Sorted Array";
import { maxProfit } from "./Best Time to Buy and Sell Stock II";
import { rotate } from "./Rotate Array";
import { containsDuplicate } from "./Contains Duplicate  ";
import { singleNumber } from "./Single Number  ";

export const main = (): void => {
  // const removeDuplicatesInput = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  // console.log('removeDuplicates', removeDuplicates(removeDuplicatesInput));
  // console.log('---------------------------------------------------------');



  // const maxProfitInput = [7,1,5,3,6,4];
  // console.log('maxProfitInput', maxProfit(maxProfitInput));
  // console.log('---------------------------------------------------------');



  // const arr = [1,2,3,4, 5,6, 7];
  // const k = 3;
  // console.log('rotate', rotate(arr, k));
  // console.log('---------------------------------------------------------');

  // const arr = [1,2,3,4,5,6];
  // console.log('containsDuplicate', containsDuplicate(arr));
  // console.log('---------------------------------------------------------');

  const arr = [1];
  console.log('singleNumber', singleNumber(arr));
  console.log('---------------------------------------------------------');
}

