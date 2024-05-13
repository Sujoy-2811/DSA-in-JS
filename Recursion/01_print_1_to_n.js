function print_1_to_n(n) {
  if (n < 1) {
    return;
  }
  print_1_to_n(n - 1);
  console.log(n);
}

print_1_to_n(61);
