const lines = 4;
let pattern = "";

for (let i = 0; i <= lines; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    count++;
    pattern += count;
  }
  pattern += "\n";
}

console.log(pattern);
