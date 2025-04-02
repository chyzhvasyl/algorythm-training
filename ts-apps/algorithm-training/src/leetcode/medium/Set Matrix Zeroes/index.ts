// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
//
// You must do it in place.
//
//
//
// Example 1:
//
//
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:
//
//
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//
//
// Constraints:
//
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
//
//
// Follow up:
//
// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

const nullifyRow = (matrix: number[][] = [], row: number): void => {
  matrix[row] = Array.from({ length: getColumnsLength(matrix) }).fill(0) as number[];
};

const nullifyColumn = (matrix: number[][], column: number): void => {
  matrix.forEach((row: number[]): void => {
    row[column] = 0;
  });
};

const getRowsLength = (matrix: number[][]): number => matrix.length;
const getColumnsLength = (matrix: number[][]): number => matrix[0].length;

export const setZeroes = (matrix: number[][]): void => {
  const maxSize = 200;
  const minSize = 1;

  if (!(getColumnsLength(matrix) >= minSize && getColumnsLength(matrix) <= maxSize)) return;

  if (!(getRowsLength(matrix) >= minSize && getRowsLength(matrix) <= maxSize)) return;

  const rows: number[] = [];
  const columns: number[] = [];

  matrix.forEach((row: number[], rowIndex: number): void => {
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (row[columnIndex] === 0) {
        rows.push(rowIndex);
        columns.push(columnIndex);
      }
    }
  });

  rows.forEach((index: number): void => {
    nullifyRow(matrix, index);
  });

  columns.forEach((index: number): void => {
    nullifyColumn(matrix, index);
  });
};

// approved
