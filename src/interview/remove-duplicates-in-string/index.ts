export const removeDuplicatesInString = (str = '') => {
  let result = str;
  for (let i = 0; i < result.length; i++) {
    const duplicate = result.charAt(i);
    if (i !== result.indexOf(duplicate)) {
      result = result.slice(0, i) + result.slice(i + 1);
      i--;
    }
  }

  return result;
}