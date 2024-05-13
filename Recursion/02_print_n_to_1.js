function print_1_to_n(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  print_1_to_n(n - 1);
}

print_1_to_n(61);
