export const removeTheMostFrequentString = (strings: string[] = []): string => {
  const stringMap: Record<string, number> = {};

  for (const string of strings) {
    if (Number.isInteger(stringMap[string])) {
      stringMap[string]++;
    } else {
      stringMap[string] = 1;
    }
  }

  let mostFrequentTimes = 1;
  let mostFrequentStrings = '';

  for (const [key, value] of Object.entries(stringMap).reverse()) {
    if (value >= mostFrequentTimes) {
      mostFrequentTimes = value;
      mostFrequentStrings = key;
    }
  }

  return mostFrequentStrings;
};
