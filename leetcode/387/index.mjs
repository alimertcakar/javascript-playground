// Can be made a lot faster by only using array fixed size of 26 length.

var firstUniqChar = function (s) {
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in charMap) {
      charMap[s[i]][0] = true;
    } else {
      charMap[s[i]] = [false, i];
    }
  }

  let result = -1;

  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]][0]) {
      result = charMap[s[i]][1];
      break;
    }
  }

  return result;
};

const chars = "leetcode";

const result = firstUniqChar(chars);
console.log(result);
