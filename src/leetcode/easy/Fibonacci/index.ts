export const fibonacci = (n: number, memo: number[] = []): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (typeof memo[n] !== 'undefined') {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}
