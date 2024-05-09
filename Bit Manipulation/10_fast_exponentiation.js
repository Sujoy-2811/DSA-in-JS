function fast_exponentiation(base, pow) {
  let ans = 1;

  while (pow > 0) {
    // const num = pow & 1;
    // ans *= num ? base : 1;
    pow & 1 && (ans *= base);
    base *= base;
    pow = pow >> 1;
  }
  return ans;
}

console.log(fast_exponentiation(3, 4));
console.log(fast_exponentiation(16, 2));
console.log(fast_exponentiation(4, 1));
