const lines = 4;
let pattern = "";
for (let i = 1; i <= lines; i++) {
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
