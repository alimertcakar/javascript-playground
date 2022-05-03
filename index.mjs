import { performance } from "perf_hooks";

function main() {
  const arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i);
  }
}

function main2() {
  const arr = Array(100000000);
  for (let i = 0; i < 100000000; i++) {
    arr[i] = i;
  }
}

var startTime = performance.now();
main(); // <---- measured code goes between startTime and endTime
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
