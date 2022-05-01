const chars = ["a", "b", "c"];

let count = 0;

function factorialLoop(n) {
  if (n === 0) return;
  for (let i = n; i > 0; i--) {
    console.log(chars[chars.length % i] + n);
    factorialLoop(n - 1);
  }
}

factorialLoop(7);
