export const isBalanced = (input: string = ''): boolean => {
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

  const getReversedBrace = (str: string = '') => {
    return reversedBracesMap[str];
  };

  const getFirstReversedBraceFromStack = () => {
    return bracesStack[bracesStack.length - 1];
  };

  const isBrace = (str: string = ''): boolean => {
    return !!bracesMap[str];
  };

  const isReversedBrace = (str: string = ''): boolean => {
    return !!getReversedBrace(str);
  };

  const addBrace = (str = '') => {
    bracesStack.push(str);
  };

  const removeBrace = () => {
    bracesStack.pop();
  };

  const isStackEmpty = (): boolean => {
    return !bracesStack.length;
  };

  for (let str of input) {
    if (!bracesStack.length && isReversedBrace(str)) return false;

    if (!isBrace(str) && !isReversedBrace(str)) continue;

    if (isBrace(str)) addBrace(str);

    if (!isReversedBrace(str)) continue;

    if (bracesMap[getFirstReversedBraceFromStack()] !== getReversedBrace(str)) {
      return false;
    } else {
      removeBrace();
    }
  }

  return isStackEmpty();
};
