let num = 10;

function decToBin(val) {
  let result = 0,
    pow = 0;
  while (val > 0) {
    let rem = val % 2;
    result += rem * Math.pow(10, pow);
    pow++;
    val = Math.floor(val / 2);
  }
  return result;
}

console.log(decToBin(num));
