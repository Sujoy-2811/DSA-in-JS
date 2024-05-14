function xToPower_optimised(n, pow) {
  if (pow === 0) {
    return 1;
  }
  const full_power = Math.pow(xToPower_optimised(n, Math.floor(pow / 2)), 2);
  if (pow % 2 === 0) {
    return full_power;
  }
  return n * full_power;
}

console.log(xToPower_optimised(4, 3));
console.log(xToPower_optimised(5, 2));
console.log(xToPower_optimised(2, 10));
