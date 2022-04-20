var x = 1;
function sideeffect(x) {
  x = 10;
  x--;
  console.log(x, "x");
}

sideeffect(x);
