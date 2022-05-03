import { performance } from "perf_hooks";

export default function getPerformance() {
  const t0 = performance.now();

  return () => {
    const t1 = performance.now();
    console.log(`Script took ${t1 - t0} milliseconds to run`);
  };
}
