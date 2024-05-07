function count_set_bits(num, i, j) {
  const a = ~0 << (j + 1);
  const b = (1 << i) - 1; // 2^1 -1  == 1, 2^3 -1 = 111 , 2^n -1 = 1<<i -1
  const bitmask = a | b;
  return num & bitmask;
}

console.log(count_set_bits(10, 2, 4));
