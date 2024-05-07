function update_i_th_bit(num, position) {
  const bitMask = ~(1 << position);
  return num & bitMask;
}

console.log(update_i_th_bit(20, 2));
console.log(update_i_th_bit(11, 1));
