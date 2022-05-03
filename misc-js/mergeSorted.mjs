const a = [1, 2, 3, 4, 5, 6];
const b = [3, 4, 5, 6, 7, 8, 9];

function mergeSorted(a, b) {
  const result = [];
  let i = 0;
  let j = 0;

  while (result.length < a.length + b.length) {
    const aItem = a[i];
    const bItem = b[j];

    if ((aItem && aItem < bItem) || !bItem) {
      result.push(aItem);
      i++;
    } else {
      result.push(bItem);
      j++;
    }
  }
  return result;
}

const result = mergeSorted(a, b);
console.log(result, "result");
