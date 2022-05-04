import getMemory from "../../util/getMemory.mjs";
import getPerformance from "../../util/getPerformance.mjs";
const logPerformance = getPerformance();

const arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
function hasDuplicate(arr) {
  const arrSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (arrSet.has(current)) {
      return true;
    } else {
      arrSet.add(current);
    }
  }

  return false;
}

hasDuplicate(arr);

logPerformance();
getMemory();
