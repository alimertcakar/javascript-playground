let fiboCount = 0;

function fibo(num, memo = {}) {
  fiboCount++;
  if (num <= 2) return 1;
  if (num in memo) return memo[num];

  const result = fibo(num - 1, memo) + fibo(num - 2, memo);
  memo[num] = result;

  return result;
}

let recurCount = 0;
function makeRecur(cache = {}) {
  let blockScopeVar = "x";
  return function recur(num) {
    recurCount++;
    if (num <= 2) return 1;
    if (num in cache) return cache[num];

    const result = recur(num - 1) + recur(num - 2);
    blockScopeVar = blockScopeVar + "x";
    console.log(blockScopeVar);
    cache[num] = result;
    return result;
  };
}

const recur = makeRecur();

console.log(recur(9), "recur 9");
console.log(recurCount, "recurCount");
console.log(fibo(9), "fibo 9");
console.log(fiboCount, "fiboCount");
