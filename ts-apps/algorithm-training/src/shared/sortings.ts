export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const pivotIndex: number = Math.floor(arr.length / 2);
  const pivot: number = arr[pivotIndex];

  const less: number[] = [];
  const greater: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};
