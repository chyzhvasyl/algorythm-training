import { logger } from '../../shared';
import { setZeroes } from './Set Matrix Zeroes';
import { maxFrequency2, bigList } from './Frequency of the Most Frequent Element ';


export const main = (): void => {
  logger(setZeroes, [[0, 1]]);

  logger(maxFrequency2, bigList, 100000);
}
