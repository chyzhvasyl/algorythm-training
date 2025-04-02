import { logger } from '../../shared';
import { trap } from './Trapping Rain Water';

export * from './Trapping Rain Water';

export const main = (): void => {
  logger(trap, [0, 1, 2, 0, 3, 0, 1, 2, 0, 0, 4, 2, 1, 2, 5, 0, 1, 2, 0, 2]);
};
