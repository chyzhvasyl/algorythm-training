// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
//
//
//
// Example 1:
//
//
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
//
// Input: height = [4,2,0,3,2,5]
// Output: 9
//
//
// Constraints:
//
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// First one.
// export const trap = (height: number[]): number => {
//   if (height.length < 3) return 0;
//
//   let startHeight = 0;
//   let startHeightIndex = 0;
//   let waterVolume = 0;
//
//   let volumes = 0;
//
//   for (let i = 0; i < height.length; i++) {
//     if (i === 0 && !height[i]) {
//       continue;
//     }
//
//     if (!startHeight && height[i] > 0) {
//       startHeight = height[i];
//       startHeightIndex = i;
//     }
//
//     if (height[i] < startHeight) {
//       waterVolume += startHeight - height[i];
//     }
//
//     if (height[i] >= startHeight) {
//       startHeight = height[i];
//       startHeightIndex = i;
//       volumes += waterVolume;
//       waterVolume = 0;
//     }
//   }
//
//   if (waterVolume > 0 && height[startHeightIndex + 1]) {
//     volumes += trap([height[startHeightIndex] - 1].concat(height.slice(startHeightIndex + 1)));
//   }
//
//   return volumes;
// };
// does not handle the case [0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2]

export const trap = (height: number[]): number => {
  if (height.length < 3) return 0;

  let startHeight = 0;
  let startHeightIndex = 0;
  let waterVolume = 0;
  let volumes = 0;

  // We start from the left finding a peak.
  for (let i = 0; i < height.length; i++) {
    if (i === 0 && height[i] === 0) continue;

    if (startHeight === 0 && height[i] > 0) {
      startHeight = height[i];
      startHeightIndex = i;
      continue;
    }

    if (height[i] < startHeight) {
      waterVolume += startHeight - height[i];
    } else {
      volumes += waterVolume;
      startHeight = height[i];
      startHeightIndex = i;
      waterVolume = 0;
    }
  }

  // Do the same but in reverse direction, finding the right peak moving to the left.
  if (waterVolume > 0) {
    let rightMax = 0;

    for (let i = height.length - 1; i > startHeightIndex; i--) {
      if (height[i] > rightMax) {
        rightMax = height[i];
      } else {
        volumes += rightMax - height[i];
      }
    }
  }

  return volumes;
};

// Accepted.
