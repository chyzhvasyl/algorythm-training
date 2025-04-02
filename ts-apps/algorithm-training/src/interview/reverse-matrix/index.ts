// type deg = '90' | '180' | '270';

//   [1,2,3]    [7,4,1]
//   [4,5,6] -> [8,5,2]
//   [7,8,9]    [9,6,3]

// Chain of responsibility pattern
export class ReverseMatrix {
  private _reversedMatrix: number[][] = [];

  constructor(matrix: number[][] = []) {
    this._reversedMatrix = matrix;
  }

  public rotateBy90 = (): ReverseMatrix => {
    return this.rotate90();
  };

  public get reversedMatrix(): number[][] {
    return this._reversedMatrix;
  }

  private rotate90(): ReverseMatrix {
    const reversedMatrix: number[][] = [];

    for (let i = 0; i < this._reversedMatrix.length; i++) {
      const row = this._reversedMatrix[i];

      for (let j = 0; j < row.length; j++) {
        const el: number = row[j];

        if (!reversedMatrix[j]) {
          reversedMatrix.push([]);
        }

        reversedMatrix[j].unshift(el);
      }
    }

    this._reversedMatrix = reversedMatrix;

    return this;
  }
}

export const reverseMatrixBy90Deg = (matrix: number[][] = [], times = 1) => {
  let reversedMatrix: number[][] = [...matrix];

  const reversBy90 = (reversed: number[][] = []) => {
    const _reversedMatrix: number[][] = [];
    for (let i = 0; i < reversed.length; i++) {
      const row = reversed[i];

      for (let j = 0; j < row.length; j++) {
        const el: number = row[j];

        if (!_reversedMatrix[j]) {
          _reversedMatrix.push([]);
        }

        _reversedMatrix[j].unshift(el);
      }
    }

    reversedMatrix = _reversedMatrix;
  };

  for (let i = 1; i <= times; i++) {
    reversBy90(reversedMatrix);
  }

  return reversedMatrix;
};
