function count_set_bits(num, position, newBit) {
  //clear bit
  const clearBit = ~(1 << position);
  let output = num & clearBit;
  const updateBit = newBit << position;
  return output | updateBit;
}

console.log(count_set_bits(7, 2, 0));
console.log(count_set_bits(7, 2, 1));
console.log(count_set_bits(11, 0, 1));
console.log(count_set_bits(11, 0, 0));
