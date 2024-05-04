function update_i_th_bit(num, position) {
  const bitMask = 1 << position;
  return num & bitMask ? 1 : 0;
}

console.log(update_i_th_bit(4, 2));
console.log(update_i_th_bit(9, 2));
