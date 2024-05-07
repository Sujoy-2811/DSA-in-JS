function count_set_bits(num) {
  const bitmask = 1;
  let count = 0;
  while (num > 0) {
    //check last digit
    count += num & 1;

    num = num >> 1;
  }
  return count;
}
console.log(count_set_bits(7));
console.log(count_set_bits(10));
console.log(count_set_bits(16));
console.log(count_set_bits(1));
console.log(count_set_bits(0));
