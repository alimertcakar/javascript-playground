const calculateMinimumHP = function (dungeon) {
  const dungeonLenY = dungeon.length;
  const dungeonLenX = dungeon[0].length;
  const paths = [];
  let minHealth = Number.MAX_SAFE_INTEGER;

  const isEndOfDungeon = (x, y) =>
    x === dungeonLenX - 1 && y === dungeonLenY - 1;
  const isOutOfBoundary = (x, y) => {
    return x >= dungeonLenX || y >= dungeonLenY;
  };

  function getPathMinHealth(paths) {
    let minHealth = 0;
    paths.reduce((health, path) => {
      const orbPoint = dungeon[path.y][path.x];
      minHealth = Math.min(minHealth, health + orbPoint);
      return health + orbPoint;
    }, 0);

    return minHealth;
  }

  function runDownPath(prevPositions, cursorX, cursorY) {
    if (isOutOfBoundary(cursorX, cursorY)) return;
    const nextPositions = [...prevPositions];
    nextPositions.push({ x: cursorX, y: cursorY });
    runDownPath(nextPositions, cursorX + 1, cursorY);
    runDownPath(nextPositions, cursorX, cursorY + 1);

    if (isEndOfDungeon(cursorX, cursorY)) {
      paths.push({ positions: nextPositions });
      return;
    }
  }

  runDownPath([], 0, 0);

  paths.forEach((path) => {
    const pathMinHealth = getPathMinHealth(path.positions);
    minHealth = Math.min(Math.abs(pathMinHealth), minHealth);
  });
  return Math.abs(minHealth) + 1;
};

const dungeon = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];
const result = calculateMinimumHP(dungeon);
console.log(result, "result");
