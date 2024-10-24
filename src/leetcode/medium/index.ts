import { logger } from '../../shared';
import { setZeroes } from './Set Matrix Zeroes';
import { maxFrequency2 } from './Frequency of the Most Frequent Element';
import { getMyLinkedList } from "./Design Linked List";
import {cycledLinkedList, hasCycle} from "./Linked List Cycle";


export const main = (): void => {
  logger(setZeroes, [[0, 1]]);

  logger(maxFrequency2, [1,2,3], 1);

  logger(getMyLinkedList)

  console.log('hasCycle', hasCycle(cycledLinkedList));
}
