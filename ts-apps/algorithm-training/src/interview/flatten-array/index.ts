export const flattenArray = <T = any>(arr: T[]): T[] => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return flattenArray(
        arr
          .slice(0, i)
          // @ts-ignore
          .concat(...arr[i])
          .concat(arr.slice(i + 1)),
      );
    }
  }

  return arr;
};
