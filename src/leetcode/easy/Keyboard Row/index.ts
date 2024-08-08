export const findWords = (words: string[] = []): string[] => {
  const resp: string[] = [];
  const pattern = /^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/;

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (word.match(pattern)) {
      resp.push(words[i]);
    }
  }

  return resp;
};