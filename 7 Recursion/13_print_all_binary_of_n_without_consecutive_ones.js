function print_all_binary_of_n_without_consecutive_ones(n, last = 0, str = "") {
  if (n == 0) {
    console.log(str);
    return;
  }

  print_all_binary_of_n_without_consecutive_ones(n - 1, 0, str + "0");
  if (last === 0)
    print_all_binary_of_n_without_consecutive_ones(n - 1, 1, str + "1");
}

print_all_binary_of_n_without_consecutive_ones(3);
