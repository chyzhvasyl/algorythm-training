export const rob1 = (nums: number[]): number => {
  const range = 2;

  const getPrev = (nums: number[], i: number): number => nums[i - 2] ?? 0;

  const shouldSkip = (nums: number[], i: number, sum: number): boolean =>
    getPrev(nums, i) >= nums[i] && (sum + nums[i + 1] >= sum + nums[i] + (nums[i + range] ?? 0));

  const calculateMax = (start: number): number => {
    let sum = 0;
    for (let i = start; i < nums.length; i += range) {
      if (shouldSkip(nums, i, sum)) {
        i--;
      } else {
        sum += nums[i];
      }
    }
    return sum;
  };

  return Math.max(calculateMax(0), calculateMax(1));
};

export const rob = (nums: number[]): number => {
  const resp: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    resp[i] = Math.max(resp[i - 1], (resp[i - 2] ?? 0) + nums[i])
  }

  return Math.max(...resp);
};

// accepted