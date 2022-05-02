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

const result = hasPair([6, 4, 3, 2, 1, 7], 9);
console.log(result, "result");
