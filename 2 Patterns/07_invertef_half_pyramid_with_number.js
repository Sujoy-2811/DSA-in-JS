let lines = 5,
  pattern = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1, count = 0; j <= lines - i + 1; j++) {
    count++;
    pattern += count;
  }
  pattern += "\n";
}

console.log(pattern);
