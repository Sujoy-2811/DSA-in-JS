function count_set_bits(num) {
  const bitMask = 1;
  return num & bitMask ? "Number is odd" : "Number is even";
}

console.log(count_set_bits(5));
console.log(count_set_bits(14));
