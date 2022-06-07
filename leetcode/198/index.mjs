const houses = [2, 7, 9, 3, 1];

//  2,7,9,3,1
// -7,-11,-10,-10,-3
// 5, 4,-1,-7,-2

function robHouses() {
  let prevprev = 0;
  let prev = 0;

  for (const house of houses) {
    const temp = Math.max(house + prevprev, prev);
    prevprev = prev;
    prev = temp;
  }

  return prev;
}

console.log(robHouses());
