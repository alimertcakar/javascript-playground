function makeFibonacci() {
  const cache = {};
  let calculations = 0;
  return function fibonacci(n) {
    calculations++;
    if (n <= 1) return 0n;
    if (n <= 2) return 1n;

    if (n in cache) {
      return cache[n];
    }

    const result = BigInt(fibonacci(n - 1) + fibonacci(n - 2));
    cache[n] = result;

    return result;
  };
}

const fibonacci = makeFibonacci();

console.log(fibonacci(4000));

// console.log(cache);
// console.log(calculations);
