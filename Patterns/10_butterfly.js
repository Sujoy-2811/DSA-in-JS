let lines = 6,
  pattern = "";

// upper part
for (let i = 1; i <= lines; i++) {
  //left
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  //middle
  for (let j = 1; j <= 2 * (lines - i); j++) {
    pattern += " ";
  }

  //right
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
// lower part
for (let i = lines; i >= 1; i--) {
  //left
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  //middle
  for (let j = 1; j <= 2 * (lines - i); j++) {
    pattern += " ";
  }

  //right
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
