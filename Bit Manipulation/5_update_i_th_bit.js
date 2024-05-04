function update_i_th_bit(num, position, newBit) {
  //clear bit
  const clearBit = ~(1 << position);
  let output = num & clearBit;
  const updateBit = newBit << position;
  return output | updateBit;
}

console.log(update_i_th_bit(7, 2, 0));
console.log(update_i_th_bit(7, 2, 1));
console.log(update_i_th_bit(11, 0, 1));
console.log(update_i_th_bit(11, 0, 0));
