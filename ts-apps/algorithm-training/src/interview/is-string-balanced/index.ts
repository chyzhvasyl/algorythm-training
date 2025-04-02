export const isBalanced = (input = ''): boolean => {
  if (!input) return true;

  const bracesMap: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const reversedBracesMap: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const bracesStack: string[] = [];
  const getReversedBrace = (str = '') => reversedBracesMap[str];
  const getFirstReversedBraceFromStack = () => bracesStack[bracesStack.length - 1];
  const isBrace = (str = ''): boolean => !!bracesMap[str];
  const isReversedBrace = (str = ''): boolean => !!getReversedBrace(str);

  const addBrace = (str = '') => {
    bracesStack.push(str);
  };

  const removeBrace = () => {
    bracesStack.pop();
  };

  const isStackEmpty = (): boolean => !bracesStack.length;

  for (const str of input) {
    if (!bracesStack.length && isReversedBrace(str)) return false;

    if (!isBrace(str) && !isReversedBrace(str)) continue;

    if (isBrace(str)) addBrace(str);

    if (!isReversedBrace(str)) continue;

    if (bracesMap[getFirstReversedBraceFromStack()] !== getReversedBrace(str)) {
      return false;
    }

      removeBrace();
  }

  return isStackEmpty();
};
