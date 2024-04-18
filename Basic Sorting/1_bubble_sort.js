const a = [2, 24, 5, 7, 11, 1];

console.log(a);

for (let turn = 0; turn <= a.length - 2; turn++) {
  for (let j = 0; j <= a.length - 2 - turn; j++) {
    if (a[j] > a[j + 1]) {
      //swap
      let temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
    }
  }
}
console.log(a);
