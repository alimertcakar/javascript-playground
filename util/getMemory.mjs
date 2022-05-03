export default function getMemory() {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`Script uses approximately ${Math.round(used * 100) / 100} MB`);
}
