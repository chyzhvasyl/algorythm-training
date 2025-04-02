// Given an integer array nums, find the subarray with the largest sum, and return its sum.
//
//
//
// Example 1:
//
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
//
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
//
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
//
//
// Constraints:
//
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// export const maxSubArray = (nums: number[]): number => {
//   let currentSum = nums[0];
//   let maxSum = nums[0];
//
//   for (let i = 1; i < nums.length; i++) {
//     const moreThanMax = currentSum + nums[i] > maxSum;
//     const moreThanCurrent = currentSum + nums[i] > nums[i];
//
//     if (moreThanMax || moreThanCurrent) {
//       currentSum += nums[i];
//       if (moreThanMax && currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     } else if (nums[i] > currentSum) {
//       currentSum = nums[i];
//     } else {
//       currentSum = nums[i + 1];
//       i++;
//     }
//   }
//
//   return maxSum;
// };

export const maxSubArray = (nums: number[]): number => {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// Accepted
