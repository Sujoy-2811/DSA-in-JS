let lines = 5,
  pattern = "";

//upper part
for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= lines - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
//lower part
for (let i = lines; i >= 1; i--) {
  for (let j = 1; j <= lines - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
