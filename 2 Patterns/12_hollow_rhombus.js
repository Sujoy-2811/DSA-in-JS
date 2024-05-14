let lines = 7,
  pattern = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= lines - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= lines; j++) {
    if (i == 1 || j == 1 || j == lines || i == lines) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
