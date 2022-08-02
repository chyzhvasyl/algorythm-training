import { flattenArray } from "./flatten-array";
import { logger } from "../shared";
import { removeDuplicatesInString } from "./remove-duplicates-in-string";
import { hasUniqueCharacters } from "./unique-characters";
import { removeTheMostFrequentString } from "./remove-the-most-frequent-string";
import { isStringReversed } from "./is-string-reversed";
import { isArraySubset } from "./is-array-subset";
import { reverseMatrixBy90Deg } from "./reverse-matrix";
import { isBalanced } from "./is-string-balanced";


export const interviewTasks = () => {
  logger(hasUniqueCharacters, 'AaBbcCc');

  logger(flattenArray, [[1,2,3,], [4,5,6, [7,8,9], 10, 11, [[[12]]]]]);

  logger(removeDuplicatesInString, 'abccccccccaaaaaaaa2fgrrtrtbcxx');

  logger(removeTheMostFrequentString, ['frt', 'jopa']);

  logger(isStringReversed, 'abcde', 'ecdba');

  logger(isArraySubset, [2, 1, 5,3, 3,4,4,4,4,6,7,10], [1, 2, 3, 3,5,4]);

  logger(reverseMatrixBy90Deg.bind(), [[1,2,3], [4,5,6], [7,8,9]], 4);

  logger(isBalanced, '[{]}');
};