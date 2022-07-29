import { flattenArray } from "./flatten-array";
import { logger } from "../shared";
import { removeDuplicatesInString } from "./remove-duplicates-in-string";
import { hasUniqueCharacters } from "./unique-characters";


export const interviewTasks = () => {
  logger(hasUniqueCharacters, 'AaBbcCc');

  logger(flattenArray, [[1,2,3,], [4,5,6, [7,8,9], 10, 11, [[[12]]]]]);

  logger(removeDuplicatesInString, 'abccccccccaaaaaaaa2fgrrtrtbcxx');
};