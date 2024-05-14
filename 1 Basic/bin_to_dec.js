let num = 1000;

function binToDec(val) {
  let result = 0,
    pow = 0;
  while (val > 0) {
    let rem = val % 10;
    result += rem * Math.pow(2, pow);
    pow++;
    val = Math.floor(val / 10);
  }
  return result;
}

console.log(binToDec(num));
