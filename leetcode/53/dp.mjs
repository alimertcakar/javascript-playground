const arr = [1];

function largestSubArray(arr) {
  let prev = -Number.MAX_VALUE;
  let high = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    prev = Math.max(current, prev + current);
    high = Math.max(high, prev);
  }

  return high;
}

const result = largestSubArray(arr);
console.log(result, "result");
