function update_i_th_bit(num, position) {
  const bitMask = 1 << position;
  return num | bitMask;
}

console.log(update_i_th_bit(4, 1));
console.log(update_i_th_bit(10, 2));
