let lines = 5,
  pattern = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) {
    const print = (i + j + 1) % 2;
    pattern += print;
  }
  pattern += "\n";
}

console.log(pattern);
