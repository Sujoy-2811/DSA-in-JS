const lines = 4;
let pattern = "";
for (let i = 1, count = 0; i <= lines; i++) {
  for (let j = 0; j < i; j++) {
    count++;
    pattern += String.fromCharCode(64 + count);
  }
  pattern += "\n";
}

console.log(pattern);
