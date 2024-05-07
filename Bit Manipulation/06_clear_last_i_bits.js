function count_set_bits(num, position) {
  //clear bit
  const bitmask = ~0 << position;
  // const bitmask = (-1) << position;
  return num & bitmask;
}

console.log(count_set_bits(7, 1));
console.log(count_set_bits(11, 2));
console.log(count_set_bits(15, 2));
