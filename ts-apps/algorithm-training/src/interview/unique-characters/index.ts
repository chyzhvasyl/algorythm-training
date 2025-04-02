export const hasUniqueCharacters = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (i !== str.indexOf(str.charAt(i))) {
      return false;
    }
  }

  return true;
};
