const houses = [2, 7, 9, 3, 1];

function robHouses() {
  let i = 0;
  for (const house of houses) {
    const prevHouse = houses[i - 1] || 0;
    const nextHouse = houses[i + 1] || 0;
    i++;
  }
}

robHouses();
