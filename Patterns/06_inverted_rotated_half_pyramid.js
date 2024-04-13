const lines = 4;
let pattern = "";

for (let i = 1; i <= lines; i++) {
  let count = lines - i;
  for (let j = 1; j <= count; j++) {
    pattern += " ";
  }

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  pattern += "\n";
}

console.log(pattern);
