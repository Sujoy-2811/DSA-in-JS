const a = [2, 24, 5, 7, 11, 1];

console.log(a);

for (let turn = 0; turn <= a.length - 2; turn++) {
  let min = turn;
  for (let j = turn + 1; j <= a.length - 1; j++) {
    if (a[min] > a[j]) {
      let temp = a[j];
      a[j] = a[min];
      a[min] = temp;
    }
  }
  //swap
  let temp = a[min];
  a[min] = a[turn];
  a[turn] = temp;
}
console.log(a);
