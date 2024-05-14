const a = [2, 24, 5, 7, 11, 1];

console.log(a);

for (let turn = 1; turn <= a.length - 1; turn++) {
  let prev = turn - 1;
  let curr = a[turn];
  while (prev >= 0 && a[prev] > curr) {
    a[prev + 1] = a[prev];
    prev--;
  }
  a[prev + 1] = curr;
}
console.log(a);
