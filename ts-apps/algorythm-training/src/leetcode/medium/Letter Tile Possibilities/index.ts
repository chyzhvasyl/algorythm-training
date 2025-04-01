//You have n  tiles, where each tile has one letter tiles[i] printed on it.
//
// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.
//
//
//
// Example 1:
//
// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:
//
// Input: tiles = "AAABBC"
// Output: 188
// Example 3:
//
// Input: tiles = "V"
// Output: 1
//
//
// Constraints:
//
// 1 <= tiles.length <= 7
// tiles consists of uppercase English letters.

const getFactorial = (n: number, cache: number[] = []): number => {
  if (n === 0 || n === 1)  return 1

  if (cache[n] > 0) return cache[n]

  return cache[n] = getFactorial(n - 1) * n;
}

const getSubSum = (length: number, table: Record<string, number>): number => {
  let sum = 0;

  for (const [key, value] of Object.entries(table)) {
    if (value <= length) {
      // sum =+ getFactorial(length)/
    }
  }

  return sum;
}


export const numTilePossibilities = (tiles: string[]): number => {
  const cachedCombinations: number[] = [];

  const allTiles = tiles.length
  const allReplacent = getFactorial(allTiles, cachedCombinations);
  const tilesCount = tiles.reduce<Record<string, number>>((prev, curr: string) => {
    return {
      ...prev,
      curr: prev[curr] ? prev[curr] + 1 : 1,
    }
  }, {});
  const uniqueTiles = Object.keys(tiles).length;

  let result = 0;

  for (let length = 1; length <= uniqueTiles; length++) {
    //calculate
    // length 1
    // (A - 1 times) + (B 1 times)) = 2 combinations = 1!/(1!⋅0!) + 1!/(0!⋅1!)
    // length 2
    // (A - 2 times) + (B 1 times + A 1 times) + (A 1 times, B 1 times) = 2!/(2!⋅0!)=1 + 2!/(1!⋅1!)
    // ...

    result = getSubSum(length, tilesCount)
  }


  return result
};