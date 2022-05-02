// Better
function hasPair(arr, sum) {
  const pairs = {};
  let result = false;
  arr.forEach((item) => {
    if (pairs[item]) result = true;
    pairs[sum - item] = true;
  });

  return result;
}

const result = hasPair([0, 9], 9);
console.log(result, "result");
