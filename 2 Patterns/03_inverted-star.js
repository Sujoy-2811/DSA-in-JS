let lines = 4;
let pattern = "";
for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= lines - i + 1; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
