const calculateMinimumHP = (dungeon) => {
  const dungeonLenY = dungeon.length;
  const dungeonLenX = dungeon[0].length;

  const cache = Array(dungeonLenY + 1)
    .fill(null)
    .map(() => Array(dungeonLenX + 1).fill(Number.MAX_VALUE));

  cache[dungeonLenX - 1][dungeonLenY] = 1;
  cache[dungeonLenX][dungeonLenY - 1] = 1;

  for (let y = dungeonLenY - 1; y >= 0; y--) {
    for (let x = dungeonLenX - 1; x >= 0; x--) {
      const orbPoint = dungeon[y][x];
      const right = cache[y + 1][x];
      const bottom = cache[y][x + 1];
      const currMinHp = Math.min(right, bottom) - orbPoint;
      cache[y][x] = Math.max(1, currMinHp);
    }
  }

  return cache[0][0];
};

const dungeon = [
  [-5, 15, -3],
  [15, -10, -1],
  [-10, -30, -5],
];
const result = calculateMinimumHP(dungeon);
