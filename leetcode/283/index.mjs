import getMemory from "../../util/getMemory.mjs";
import getPerformance from "../../util/getPerformance.mjs";
const logPerformance = getPerformance();

const arr = [0, 1, 0];
function moveZerosToEnd(arr) {
  let zeroCount = 0;
  let cleanIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === 0) {
      zeroCount++;
    } else {
      arr[cleanIndex++] = current;
    }
  }

  for (let i = arr.length - 1; i >= arr.length - zeroCount; i--) {
    arr[i] = 0;
  }
}

moveZerosToEnd(arr);

logPerformance();
getMemory();
