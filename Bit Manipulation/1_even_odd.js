function update_i_th_bit(num) {
  const bitMask = 1;
  return num & bitMask ? "Number is odd" : "Number is even";
}

console.log(update_i_th_bit(5));
console.log(update_i_th_bit(14));
