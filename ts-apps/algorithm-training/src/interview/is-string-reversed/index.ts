export const isStringReversed = (source = '', test = ''): boolean => {
  if (source.length !== test.length) return false;

  for (let i = test.length - 1, j = 0; i > -1; i--, j++) {
    if (test[i] !== source[j]) {
      return false;
    }
  }

  return true;
};
