//Given an m x n matrix, return all elements of the matrix in spiral order.
//
//
//
// Example 1:
//
//
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//
//
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
//
//
// Constraints:
//
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

//    for (let rowIndex = left; rowIndex <= right; rowIndex++) {
//       const row = matrix[rowIndex];
//       for (let columnIndex = top; columnIndex <= bottom; columnIndex++) {
//         const column = row[columnIndex];
//       }
//     }

export const spiralOrder = (matrix: number[][]): number[] => {
  const resp: number[] = [];

  let left: number = 0;
  let top: number = 0;
  let right: number = matrix[0].length - 1;
  let bottom: number = matrix.length - 1;

  let toRight: boolean = true;
  let toBottom: boolean = true;

  const iterateRow = (): void => {
    if (left > right) return;

    let row: number[];
    let rowIndex: number;

    if (toRight) {
      rowIndex = top;
      row = matrix[rowIndex];

      // right + 1 to include the last element
      resp.push(...row.slice(left, right + 1));
      top++;
    } else {
      rowIndex = bottom;
      row = matrix[rowIndex];

      // right + 1 to include the last element
      resp.push(...row.slice(left, right + 1).reverse());
      bottom--;
    }

    toRight = !toRight;

    iterateColumn();
  };

  const iterateColumn = (): void => {
    if (top > bottom || left > right) return;

    if (toBottom) {
      for (let rowIndex = top; rowIndex <= bottom; rowIndex++) {
        const row: number[] = matrix[rowIndex];
        const columnElement: number = row[right];

        resp.push(columnElement);
      }

      right--;
    } else {
      for (let rowIndex = bottom; rowIndex >= top; rowIndex--) {
        const row: number[] = matrix[rowIndex];
        const columnElement: number = row[left];

        resp.push(columnElement);
      }

      left++;
    }
    toBottom = !toBottom;

    iterateRow();
  };

  iterateRow();

  return resp;
};

//Accepted
