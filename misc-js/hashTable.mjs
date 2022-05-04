class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [...Array(size)].map(() => new Array());
  }

  hash(key) {
    let sum = 0;
    key.split("").forEach((char) => {
      sum += char.charCodeAt();
    });

    return sum % this.size;
  }

  // Resizes memory buckets
  rehash() {
    // TODO
  }

  add(key, value) {
    const index = this.hash(key);

    const existingIndex = this.table[index].findIndex(
      (item) => item.key === key
    );
    if (existingIndex >= 0) {
      this.table[index][existingIndex] = [key, value];
    } else {
      this.table[index].push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const targetCell = this.table[index];
    const existingIndex = targetCell.findIndex((item) => item[0] === key);
    if (existingIndex >= 0) {
      return targetCell[existingIndex][1];
    } else {
      return null;
    }
  }
  remove(key) {
    const index = this.hash(key);
    const targetCell = this.table[index];
    const existingIndex = targetCell.findIndex((item) => item.key === key);

    if (existingIndex >= 0) {
      targetCell[existingIndex] = null;
    } else {
      return { key: null, value: null };
    }
  }
  keys() {
    return this.table.flatMap((x) => x);
  }
}

const myTable = new HashTable(10);
const hashed = myTable.hash("asdasdasd");

for (let i = 0; i < 7; i++) {
  myTable.add(randomStr(10), "SomeBullShitValue1");
}
myTable.add("alimert", "SomeBullShitValue1");

console.log(myTable.keys());

function randomStr(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
