function sum_of_1st_natural_nos(num) {
  if (num === 1) {
    return 1;
  }

  return num + sum_of_1st_natural_nos(num - 1);
}

console.log(sum_of_1st_natural_nos(3));
