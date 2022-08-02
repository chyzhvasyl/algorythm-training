export const isArraySubset = (input: any[] = [], subset: any[] = []): boolean => {
  if (subset.length > input.length) return false;
  if (subset.length === 0 && input.length === 0) return true;
  let copy = [...subset];

  for (let i = copy.length - 1; i > -1; i--) {
    if (input.find(el => el === copy[i])) {
      copy.splice(i, 1);
    } else {
      return false;
    }
  }

  return true;
}