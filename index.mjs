function padder(count) {
  // const padding = "".padStart(count, "0");
  console.log("x");
  return () => {
    const padding = "".padStart(count, "0");
    console.log("y");
    return padding;
  };
}

const padder5 = padder(5);

console.log(padder5());
console.log(padder5());
console.log(padder5());
