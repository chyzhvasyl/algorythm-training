export const trap = (height: number[]): number => {
  let startHeight = 0;
  let waterVolume = 0;
  let diffVolume = 0;
  let minWaterVolume = 0;

  //try to count the worst case

  let volumes = 0;

  for (let i = 0; i < height.length; i++) {
    if (i === 0 && !height[i]) {
      continue;
    }

    if (!startHeight && height[i] > 0) {
      startHeight = height[i];
    }

    if (height[i] < startHeight) {
      waterVolume += startHeight - height[i];
    }

    if (height[i] >= startHeight) {
      startHeight = height[i];
      volumes += waterVolume;

      waterVolume = 0;
    } else {
      //TODO: handle case when we have no peak and fill the water [2,1,0,1] = 1

      if (i === height.length - 1) {
        volumes += diffVolume;
      }
    }
  }

  return volumes;
};