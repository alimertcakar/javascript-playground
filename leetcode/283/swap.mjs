import getMemory from "../../util/getMemory.mjs";
import getPerformance from "../../util/getPerformance.mjs";
const logPerformance = getPerformance();

const arr = [0, 1, 0];
function moveZerosToEnd(arr) {
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current !== 0) {
      const temp = arr[left];
      arr[left] = current;
      arr[i] = temp;
      left++;
    }
  }
}

moveZerosToEnd(arr);
logPerformance();
getMemory();
