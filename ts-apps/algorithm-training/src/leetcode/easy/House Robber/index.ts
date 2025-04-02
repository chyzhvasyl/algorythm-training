// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:
//
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
//
//
// Constraints:
//
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

export const rob1 = (nums: number[]): number => {
  const range = 2;
  const getPrev = (nums: number[], i: number): number => nums[i - 2] ?? 0;

  const shouldSkip = (nums: number[], i: number, sum: number): boolean => getPrev(nums, i) >= nums[i]
    && sum + nums[i + 1] >= sum + nums[i] + (nums[i + range] ?? 0);

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
  const resp: number[] = [ nums[0] ];

  for (let i = 1; i < nums.length; i++) {
    resp[i] = Math.max(resp[i - 1], (resp[i - 2] ?? 0) + nums[i]);
  }

  return Math.max(...resp);
};

// accepted
