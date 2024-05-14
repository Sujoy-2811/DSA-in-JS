function power_of_two_or_not(num) {
  // 4 -> 100
  // 4-1 -> 011
  // &   -> 000
  return (num & (num - 1)) === 0;
}

console.log(power_of_two_or_not(4));
console.log(power_of_two_or_not(13));
console.log(power_of_two_or_not(25));
console.log(power_of_two_or_not(64));
