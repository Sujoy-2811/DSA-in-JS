function xToPower_optimised(n, pow) {
  if (pow === 0) {
    return 1;
  }

  return n * xToPower_optimised(n, pow - 1);
}

console.log(xToPower_optimised(4, 3));
console.log(xToPower_optimised(5, 2));
console.log(xToPower_optimised(2, 10));
