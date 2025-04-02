import { logger } from '../shared';

import { myBind } from './custom-bind';
import { findMedian1, findMedian2, tree } from './find-a-median';
import { flattenArray } from './flatten-array';
import { isArraySubset } from './is-array-subset';
import { isBalanced } from './is-string-balanced';
import { isStringReversed } from './is-string-reversed';
import { removeDuplicatesInString } from './remove-duplicates-in-string';
import { removeTheMostFrequentString } from './remove-the-most-frequent-string';
import { reverseMatrixBy90Deg } from './reverse-matrix';
import { hasUniqueCharacters } from './unique-characters';
import { universalSum } from './universal-sum';

// TODO: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

export const interviewTasks = () => {
  logger(hasUniqueCharacters, 'AaBbcCc');

  logger(flattenArray, [
    [ 1, 2, 3 ],
    [ 4, 5, 6, [ 7, 8, 9 ], 10, 11, [[[ 12 ]]]],
  ]);

  logger(removeDuplicatesInString, 'abccccccccaaaaaaaa2fgrrtrtbcxx');

  logger(removeTheMostFrequentString, [ 'frt', 'jopa' ]);

  logger(isStringReversed, 'abcde', 'ecdba');

  logger(isArraySubset, [ 2, 1, 5, 3, 3, 4, 4, 4, 4, 6, 7, 10 ], [ 1, 2, 3, 3, 5, 4 ]);

  logger(
    reverseMatrixBy90Deg,
    [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ],
    ],
    4,
  );

  logger(isBalanced, '[{]}');

  logger(
    myBind(
      (phone: number, number: number) => {
        // @ts-ignore
        console.log('this', this);
        console.log('phone', phone);
        console.log('number', number);
      },
      { cab: 'context' },
      10000,
      23456,
    ),
  );

  logger(universalSum()()()()()(20)()()(), 22);

  logger(findMedian1, tree);

  logger(findMedian2, tree);
};
