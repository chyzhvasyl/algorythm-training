//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const areWithinConstraints = (nums: number[]): boolean => (
  (nums.length > 0 && nums.length <= Math.pow(10, 5)) &&
  (nums.every(num => num >= Math.pow(-10, 9) && num <= Math.pow(10, 9)))
);

export const containsDuplicate = (nums: number[]): boolean => {
  if(!areWithinConstraints(nums)) return false;
  return nums.some((num, index, arr) => (index !== arr.indexOf(num)));
};

//approved
