let lines = 5,
  pattern = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= lines - i; j++) {
    pattern += " ";
  }
  for (let j = i; j >= 1; j--) {
    pattern += j;
  }
  for (let j = 2; j <= i; j++) {
    pattern += j;
  }
  pattern += "\n";
}

console.log(pattern);
