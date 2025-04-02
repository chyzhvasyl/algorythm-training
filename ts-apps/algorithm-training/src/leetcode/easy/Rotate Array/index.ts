//Given an array, rotate the array to the right by k steps, where k is non-negative.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:
//
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
//
//
// Constraints:
//
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

const areWithinConstraints = (nums: number[], k: number): boolean =>
  nums.length > 0 &&
  nums.length <= Math.pow(10, 5) &&
  nums.some((num) => num >= Math.pow(-2, 31) && num <= Math.pow(2, 31) - 1) &&
  k > -1 &&
  k <= Math.pow(10, 5) &&
  (k > nums.length || k < nums.length);

export const rotate = (nums: number[] = [], k: number): void => {
  if (!areWithinConstraints(nums, k)) return;

  for (let i = 0; i < k; i++) {
    const last = nums[nums.length - 1];
    nums.pop();
    nums.unshift(last);
  }
};
// approved
